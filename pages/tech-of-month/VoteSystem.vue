<script>
import RadioLayout from './RadioLayout.vue'
// Uncomment this when auth has been implemented
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
      userStatus: true,
      signInStatus: true,
      voteStatus: true,
      options: {
        // Labels is the legend of the pie chart
        // The labels and series index corresponds with another, first index of the label is first value of the series
        legend: {
          position: 'bottom'
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
      // Submit the votes to the database, it will first rearrange the dictionary into an array where the head is the first choice
      // and the tail is the last choice
      // The number of votes can be adjusted so it is fair, currently it is just first place gets 3 votes, second place gets 2, and last place gets 1
      // console.log(JSON.stringify(this.vote))

      for (const key in this.vote) {
        const keyValue = this.vote[key]
        if (keyValue <= 0) {
          this.errorStatus = false
          this.voteStatus = true
          this.userStatus = true
          return
        }
      }
      await login()
        .then((resultID) => {
          this.googleID = resultID
        })

      // Uncomment this when auth has been implemented and edit it to work with the UofT auth
      // Checks to see if the user has already voted before
      if (this.googleID !== '') {
        await checkUser(this.year, this.month, this.googleID)
          .then((result) => {
            if (result) {
              // console.log('user has already voted')
              this.userStatus = false
            } else {
              this.userStatus = true
            }
            this.signInStatus = true
            this.voteStatus = true
          })
      } else {
        this.signInStatus = false
        this.userStatus = true
        this.voteStatus = true
      }

      this.errorStatus = true
      if (this.userStatus && this.signInStatus) {
        // Update the votes in the database, adds user to the database and update series for piechart
        await addVote(this.year, this.month, this.vote)
        this.updateSeries()
        this.errorStatus = true
        this.userStatus = true
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
        <RadioLayout :children="Object.keys(vote)" :titles="title" />
        <p style="line-height: 0; font-size: 15px; color: red;" :hidden="errorStatus">
          Please enter a vote for each choice
        </P>
        <p style="line-height: 0; font-size: 15px; color: red;" :hidden="signInStatus">
          Please sign in if you wish to vote
        </P>
        <p style="line-height: 0; font-size: 15px; color: red;" :hidden="userStatus">
          You've already voted
        </P>
        <p style="line-height: 0; font-size: 15px;" :hidden="voteStatus">
          Vote has been submitted
        </P>
        <button style="padding-left: 12px;" @click="submitVote()">
          Submit
        </button>
      </div>
      <!-- Display result here, can use bar graph or pie char -->
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
