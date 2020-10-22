<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
    <article>
      <div class="flex-col mr-2">
        <!-- Displays the radio button layout -->
        <RadioLayout ref="radioComponent" :children="Object.keys(voteOrder)" :titles="title" :hidden="voteEnded"/>
        <button class="submitButton" @click="submitVote()" :hidden="voteEnded">
          Submit
        </button>
      </div>
      <!-- Pie Chart-->
    </article>
    <br>
    <no-ssr>
      <div align="center">
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
      <input type="email" class="form-control" placeholder="example@email.com" v-model="email" style="display: inline; width: 50%;"/>
      <button>Submit</button>
    </form>
    <!-- Alerts-->
    <!-- Secondary alert is for the resubmission form-->
    <div class="fixed-bottom" style="left: 25%; width: 50%;">
      <v-alert
        v-model="secondaryAlert"
        border="left"
        close-text="Close Alert"
        dismissible
        dark
        style="background-color: #009b68;"
        transition="scale-transition"
      >
        You have already voted, your current votes are: <br>
        {{ secondaryMessage }}
        <v-col class="shrink">
          <v-btn
            small
            style="background-color: white; color: black;"
            @click="revote = true; secondaryAlert = !secondaryAlert; submitVote();"
          >
            Yes
          </v-btn>
          <v-btn
            small
            style="background-color: white; color: black;"
            @click="secondaryAlert = !secondaryAlert"
          >
            No
          </v-btn>
        </v-col>
      </v-alert>
    </div>
    <!-- Third alert is for the unsubscribing -->
    <div class="fixed-bottom" style="left: 25%; width: 50%;">
      <v-alert
        v-model="thirdAlert"
        border="left"
        close-text="Close Alert"
        dismissible
        dark
        style="background-color: #f55252;"
        transition="scale-transition"
      >
        You are already subscribed, would you like to unsubscribe:
        <v-col class="shrink">
          <v-btn
            small
            style="background-color: white; color: black;"
            @click="thirdAlert = !thirdAlert; unsubscribe();"
          >
            Yes
          </v-btn>
          <v-btn
            small
            style="background-color: white; color: black;"
            @click="thirdAlert = !thirdAlert"
          >
            No
          </v-btn>
        </v-col>
      </v-alert>
    </div>
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

</script>
<script>
import RadioLayout from './RadioLayout.vue'
import { addVote, userVoted, login, addEmail, removeEmail } from '~/assets/database/firebase.js'
export default {
  components: {
    apexcharts: () => import('vue-apexcharts'),
    RadioLayout
  },
  props: {
    databaseSeries: {
      type: Array,
      default: () => []
    },
    databaseLabels: {
      type: Array,
      default: () => []
    },
    month: {
      type: String,
      default: ''
    },
    year: {
      type: String,
      default: ''
    },
    voteEnded: {
      type: Boolean,
      default: false
    }
  },
  data () {
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
          position: 'top'
        },
        labels: this.databaseLabels
      },
      // Series is the numbers that will display onto the pie chart
      series: this.databaseSeries
    }
  },
  created () {
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
    updateSeries () {
      // This is updating the series array, AKA updating the pie chart
      const newData = []
      let index = 0
      for (const key in this.voteValue) {
        newData[index] = this.series[index] + parseInt(this.voteValue[key])
        index += 1
      }
      this.series = newData
    },
    async subscribe () {
      if (this.email === '') {
        this.primaryMessage = 'Invalid email!'
        this.primaryAlert = true
        this.bgColour = '#f55252'
        return
      }
      await setEmail(this.email, "Add")
        .then((emailAdded) => {
          if (emailAdded) {
            this.primaryMessage = 'Subscribed!'
            this.primaryAlert = true
            this.bgColour = '#00d097'
          } else {
            this.thirdAlert = true
          }
        })
    },
    async unsubscribe () {
      await setEmail(this.email, "Remove")
        .then((emailRemoved) => {
          if (emailRemoved) {
            this.primaryMessage = 'Unsubscribed!'
            this.primaryAlert = true
            this.bgColour = '#00d097'
          } else {
            this.primaryMessage = 'You are not subscribed'
            this.primaryAlert = true
            this.bgColour = '#f55252'
          }
        })
    },
    async submitVote () {
      // Checks if user selected a vote option for each row
      for (const key in this.voteOrder) {
        const keyValue = this.voteOrder[key]
        if (keyValue <= 0) {
          this.primaryMessage = 'Please enter a vote for each choice'
          this.primaryAlert = true
          this.bgColour = '#f55252'
          return
        }
      }

      // If revote is false, that means the user has not signed in before, if true, then the user has signed in already and wants to change their vote
      if (!this.revote) {
        await login()
          .then((resultID) => {
            this.userID = resultID
          })
      }

      // Checks to see if the user has already voted before
      // If the user has not voted before, add the user to the database
      if (this.userID !== '') {
        await userVoted(this.year, this.month, this.userID, this.databaseLabels)
          .then((result) => {
            // If result is nonempty, then the user has already voted, ask the user if they wish to revote
            if (Object.keys(result).length != 0) {
              // Update the vote accordingly. 
              // (e.g If the user changes a vote from first choice to third choice, substract 2, and from third choice to first choice add 2)
              let displayMessage = ''
              const sortedArray = Array(this.title.length)
              for (const key in this.voteOrder) {
                this.voteValue[key] = this.voteOrder[key] - result[key]
                // Reversing order since higher weight => higher choice (i.e. [HTML: 3, "CSS": 1] represents HTML got picked first)
                sortedArray[this.title.length - result[key]] = key
              }

              for (let i = 0; i < this.title.length; i++) {
                displayMessage += this.title[i] + ': ' + sortedArray[i]
                if (i !== this.title.length-1) {
                  displayMessage += ", "
                }
              }
              displayMessage += '\n Would you like to revote?'
              // Displays the resubmission form. If the current submission is a revote, do not display the error message again
              if (!this.revote) {
                this.secondaryAlert = true
                this.secondaryMessage = displayMessage
              }
            // Internal server error if there was trouble retrieving user data
            } else if (result == null) {
              this.primaryMessage = 'Internal server error. Please try again'
              this.primaryAlert = true
              this.bgColour = '#f55252'
            }
          })
      } else {
        // User did not properly sign in
        this.primaryMessage = 'Please sign in if you wish to vote'
        this.primaryAlert = true
        this.bgColour = '#f55252'
      }

      // In order to submit the vote, the primaryAlert and the secondaryAlert has to be false (No errors)
      if (!this.primaryAlert && !this.secondaryAlert) {
        this.voteValue = this.voteOrder
        // Update the votes in the database, update series for piechart and reset all values
        const voteResult = await addVote(this.year, this.month, this.voteValue, this.voteOrder, this.userID)
        // If addVote returns false, then there was an internal server error while retrieving/writing data
        if (!voteResult) {
          this.primaryMessage = 'Internal server error. Please try again'
          this.primaryAlert = true
          this.bgColour = '#f55252'
        } else {
          this.updateSeries()
          this.primaryMessage = 'Vote has been submitted'
          this.primaryAlert = true
          this.bgColour = '#00d097'
          this.revote = !this.revote
          this.$refs.radioComponent.reset()
        }
      }
    }
  }
}
</script>

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
