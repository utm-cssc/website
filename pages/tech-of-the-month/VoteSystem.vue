<script>
import RadioLayout from './RadioLayout.vue'
import { addVote, checkUser, login } from '~/assets/database/firebase.js'
export default {
  components: {
    apexcharts: () => import('vue-apexcharts'),
    RadioLayout
  },
  props: {
    databaseSeries: {
      type: Array,
      default: () => [0, 0, 0]
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
    }
  },
  data () {
    return {
      title: ['First Choice', 'Second Choice', 'Third Choice'],
      vote: {},
      googleID: '',
      errorStatus: true,
      voteStatus: true,
      errorMessage: '',
      options: {
        // Labels is the legend of the pie chart
        // The labels and series index corresponds with another, first index of the label is first value of the series
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
    // Will run this function when the element is created
    this.convertDictionary()
  },
  methods: {
    convertDictionary () {
      // Convert the label array to a dictionary so that it can be used to create the radio button layout
      const dictLen = Object.keys(this.options.labels).length
      const tempDict = {}
      for (let i = 0; i < dictLen; i++) {
        tempDict[this.options.labels[i]] = 0
      }
      this.vote = tempDict
    },
    updateSeries () {
      // This is updating the series array, AKA updating the pie chart
      const tempNum = []
      let index = 0
      for (const key in this.vote) {
        tempNum[index] = this.series[index] + this.vote[key]
        index += 1
      }

      this.series = tempNum
    },
    async submitVote () {
      // Checks if user selected a vote option for each row
      this.voteStatus = true
      for (const key in this.vote) {
        const keyValue = this.vote[key]
        if (keyValue <= 0) {
          this.errorMessage = 'Please enter a vote for each choice'
          this.errorStatus = false
          return
        }
      }
      await login()
        .then((resultID) => {
          this.googleID = resultID
        })

      // Checks to see if the user has already voted before
      // If the user has not voted before, add the user to the database
      // Currently working with google sign in
      if (this.googleID !== '') {
        await checkUser(this.year, this.month, this.googleID)
          .then((result) => {
            if (result) {
              // User has already voted
              this.errorMessage = 'You have already voted'
              this.errorStatus = false
            } else {
              this.errorStatus = true
            }
          })
      } else {
        // User did not properly sign in
        this.errorMessage = 'Please sign in if you wish to vote'
        this.errorStatus = false
      }

      if (this.errorStatus) {
        // Update the votes in the database, update series for piechart
        await addVote(this.year, this.month, this.vote)
        this.updateSeries()
        this.$refs.radioComponent.reset()
        this.errorStatus = true
        this.voteStatus = false
      }
    }
  }
}
</script>
<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto mt-5">
    <article>
      <div class="flex-col mr-2">
        <!-- Displays the radio button layout -->
        <RadioLayout ref="radioComponent" :children="Object.keys(vote)" :titles="title" />
        <!-- Error messages -->
        <p style="line-height: 0; font-size: 15px; color: red;" :hidden="errorStatus">
          {{ errorMessage }}
        </P>
        <p style="line-height: 0; font-size: 15px;" :hidden="voteStatus">
          Vote has been submitted
        </P>
        <button style="padding-left: 12px;" @click="submitVote()">
          Submit
        </button>
      </div>
      <!-- Display result here-->
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
  </div>
</template>

</script>
