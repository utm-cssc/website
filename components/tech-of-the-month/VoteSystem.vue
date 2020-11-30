<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
    <article>
      <div class="flex-col mr-2">
        <!-- Displays the radio button layout -->
        <RadioLayout
          ref="radioComponent"
          :options="Object.keys(voteOrder)"
          :titles="title"
          :hidden="voteEnded"
        />
        <button class="submitButton" @click="submitVote()" v-if="voteEnded">
          Submit
        </button>
      </div>
      <!-- Pie Chart-->
    </article>
    <br />
    <no-ssr>
      <div align="center" v-if="voteEnded">
        <apexcharts
          id="apexChart"
          width="300"
          type="donut"
          :options="options"
          :series="series"
          style="position: center;"
        />
      </div>
    </no-ssr>
    <!-- Subscribe input -->
    <form @submit.prevent="subscribe" style="font-size: 15px;">
      Enter an email to receive notifications about the upcoming voting periods
      <input
        type="email"
        class="form-control"
        placeholder="example@email.com"
        v-model="email"
        style="display: inline; width: 50%;"
      />
      <button>Submit</button>
    </form>
    <!-- Alerts-->
    <!-- Seceondary alert for revoting form-->
    <InteractiveAlerts
      :alertStatus.sync="secondaryAlert"
      :alertRecieveInput="true"
      :alertMessage="secondaryMessage"
      :alertYesFunction="resubmitVote"
      @update="secondaryAlert = $event"
    />
    <!-- Third alert is for the unsubscribing form -->
    <InteractiveAlerts
      :alertStatus.sync="thirdAlert"
      :alertRecieveInput="true"
      :alertMessage="
        'You are already subscribed, would you like to unsubscribe:'
      "
      :alertYesFunction="unsubscribe"
      @update="thirdAlert = $event"
    />
    <!-- Primary alert is for main messages-->
    <div class="fixed-bottom">
      <v-alert
        v-model="primaryAlert"
        border="left"
        close-text="Close Alert"
        dismissible
        dark
        :style="'background-color:' + bgColour"
        transition="scale-transition"
      >
        {{ primaryMessage }}
      </v-alert>
    </div>
  </div>
</template>

<script>
import RadioLayout from './RadioLayout.vue'
import {
  addVote,
  userVoted,
  login,
  setEmail,
  deleteAttribute,
} from '~/database/firebase.js'
export default {
  components: {
    apexcharts: () => import('vue-apexcharts'),
    RadioLayout,
  },
  props: {
    databaseInfo: {
      type: Object,
      default: () => {},
    },
    month: {
      type: String,
      default: '',
    },
    year: {
      type: String,
      default: '',
    },
    voteEnded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: [],
      // Higher order = higher value, i.e first choice is worth 3, second choice is worth 2, and third choice is worth 1
      voteOrder: {},
      voteValue: {},
      userID: '',
      primaryMessage: '',
      secondaryMessage: '',
      revote: false,
      bgColour: '',
      primaryAlert: false,
      secondaryAlert: false,
      thirdAlert: false,
      email: '',
      options: {
        // Labels is the legend of the pie chart
        // The labels and series index corresponds with one another, first index of the label is first value of the series
        legend: {
          position: 'top',
        },
        labels: Object.keys(this.databaseInfo),
      },
      // Series is the numbers that will display onto the pie chart
      series: Object.values(this.databaseInfo),
    }
  },
  created() {
    this.setupLabels()
  },
  methods: {
    setupLabels() {
      const dictLen = Object.keys(this.options.labels).length
      for (let i = 0; i < dictLen; i++) {
        this.$set(this.voteOrder, this.options.labels[i], 0)
        this.title.push((i + 1).toString())
      }
    },
    updateSeries() {
      // This is updating the series array, AKA updating the pie chart
      for (const key in this.voteValue) {
        this.databaseInfo[key] =
          parseInt(this.databaseInfo[key]) + parseInt(this.voteValue[key])
      }
      this.options['labels'] = Object.keys(this.databaseInfo)
      this.series = Object.values(this.databaseInfo)
    },
    setAlertVisibility(primary, secondary, third) {
      this.primaryAlert = primary
      this.secondaryAlert = secondary
      this.thirdAlert = third
    },
    async subscribe() {
      if (this.email === '') {
        this.primaryMessage = 'Invalid email!'
        this.setAlertVisibility(true, false, false)
        this.bgColour = '#f55252'
        return
      }
      await setEmail(this.email, 'Add').then(emailAdded => {
        if (emailAdded) {
          this.primaryMessage = 'Subscribed!'
          this.setAlertVisibility(true, false, false)
          this.bgColour = '#00d097'
        } else {
          this.setAlertVisibility(false, false, true)
        }
      })
    },
    async unsubscribe() {
      await setEmail(this.email, 'Remove').then(emailRemoved => {
        if (emailRemoved) {
          this.primaryMessage = 'Unsubscribed!'
          this.setAlertVisibility(true, false, false)
          this.bgColour = '#00d097'
        } else {
          this.primaryMessage = 'You are not subscribed'
          this.setAlertVisibility(true, false, false)
          this.bgColour = '#f55252'
        }
      })
    },
    resubmitVote() {
      this.revote = true
      this.submitVote()
    },
    async submitVote() {
      // Checks if user selected a vote option for each row
      for (const key in this.voteOrder) {
        const keyValue = this.voteOrder[key]
        if (keyValue <= 0) {
          this.primaryMessage = 'Please select an option for each choice'
          this.setAlertVisibility(true, false, false)
          this.bgColour = '#f55252'
          return
        }
      }

      // If revote is false, that means the user has not signed in before, if true, then the user has signed in already and wants to change their vote
      if (!this.revote) {
        await login().then(resultID => {
          this.userID = resultID
        })
      }

      // Checks to see if the user has already voted before
      // If the user has not voted before, add the user to the database
      if (this.userID !== '') {
        await userVoted(this.year, this.month, this.userID).then(result => {
          // If result is nonempty, then the user has already voted, ask the user if they wish to revote
          if (Object.keys(result).length != 0) {
            // Update the vote accordingly.
            // (e.g If the user changes a vote from first choice to third choice, substract 2, and from third choice to first choice add 2)
            let displayMessage =
              'You have already voted, your current votes are: \n'
            const sortedArray = Array(Object.keys(result).length - 1)
            const removeOptions = Array(Object.keys(result).length - 1)
            if (
              Object.keys(result).length - 1 >
              Object.keys(this.voteOrder).length
            ) {
              for (const key in result) {
                if (key != 'id') {
                  if (key in this.voteOrder) {
                    this.voteValue[key] = this.voteOrder[key] - result[key]
                    // Reversing order since higher weight => higher choice (i.e. [HTML: 3, "CSS": 1] represents HTML got picked first)
                    sortedArray[
                      Object.keys(result).length - result[key] - 1
                    ] = key
                  } else {
                    displayMessage =
                      'The options were recently changed, please revote, your current votes are: \n'
                    removeOptions.push(key)
                  }
                }
              }
            } else {
              for (const key in this.voteOrder) {
                if (!(key in result)) {
                  result[key] = 0
                }
                this.voteValue[key] = this.voteOrder[key] - result[key]
                // Reversing order since higher weight => higher choice (i.e. [HTML: 3, "CSS": 1] represents HTML got picked first)
                sortedArray[Object.keys(result).length - result[key] - 1] = key
              }
            }

            let overcountingError = 0
            for (let i = 0; i < Object.keys(result).length - 1; i++) {
              if (sortedArray[i] == null) {
                i += 1
                overcountingError += 1
              }
              displayMessage +=
                (i + 1 - overcountingError).toString() + ': ' + sortedArray[i]
              if (i !== this.title.length) {
                displayMessage += ', '
              }
            }
            displayMessage += '\n Would you like to revote?'
            // Displays the resubmission form. If the current submission is a revote, do not display the error message again
            if (!this.revote) {
              this.setAlertVisibility(false, true, false)
              this.secondaryMessage = displayMessage
            } else {
              if (removeOptions.length != 0) {
                deleteAttribute(
                  this.year,
                  this.month,
                  this.userID,
                  removeOptions,
                )
              }
            }
          } else if (Object.keys(result).length == 0) {
            this.voteValue = JSON.parse(JSON.stringify(this.voteOrder))
            // Internal server error if there was trouble retrieving user data
          } else if (result == null) {
            this.primaryMessage = 'Internal server error. Please try again'
            this.setAlertVisibility(true, false, false)
            this.bgColour = '#f55252'
          }
        })
      } else {
        // User did not properly sign in
        this.primaryMessage = 'Please sign in if you wish to vote'
        this.setAlertVisibility(true, false, false)
        this.bgColour = '#f55252'
      }

      // In order to submit the vote, the primaryAlert and the secondaryAlert has to be false (No errors)
      if (!this.primaryAlert && !this.secondaryAlert) {
        // Update the votes in the database, update series for piechart and reset all values
        const voteResult = await addVote(
          this.year,
          this.month,
          this.voteValue,
          this.voteOrder,
          this.userID,
        )
        // If addVote returns false, then there was an internal server error while retrieving/writing data
        if (!voteResult) {
          this.primaryMessage = 'Internal server error. Please try again'
          this.setAlertVisibility(true, false, false)
          this.bgColour = '#f55252'
        } else {
          this.updateSeries()
          this.primaryMessage = 'Vote has been submitted'
          this.setAlertVisibility(true, false, false)
          this.bgColour = '#00d097'
          this.revote = false
          this.$refs.radioComponent.reset()
        }
      }
    },
  },
}
</script>

<style scoped>
/* Hover effects */
.submitButton:hover {
  color: #00d097;
  transition-duration: 0.5s;
}

.fixed-bottom {
  left: 25%;
  width: 50%;
}

@media (max-width: 576px) {
  .submitButton {
    font-size: 25px;
    padding-bottom: 20px;
  }

  .fixed-bottom {
    left: 0;
    width: 100%;
  }
}
</style>
