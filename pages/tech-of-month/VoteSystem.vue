<script>
import RadioLayout from './RadioLayout.vue'
// Uncomment this when auth has been implemented
import { addVote, checkUser } from '~/assets/database/firebase.js'
// import { addVote } from '~/assets/database/firebase.js'
export default {
  props: {
    databaseSeries: Array,
    databaseLabels: Array
  },
  components: {
    apexcharts: () => import('vue-apexcharts'),
    RadioLayout
  },
  data () {
    return {
      title: ['First Choice', 'Second Choice', 'Third Choice'],
      vote: {},
      month: 'September',
      year: '2020',
      utorid: 'test2',
      errorStatus: true,
      userStatus: true,
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
          this.userStatus = true
          return
        }
      }
      // Uncomment this when auth has been implemented and edit it to work with the UofT auth
      // Checks to see if the user has already voted before
      await checkUser(this.year, this.month, this.utorid)
        .then((result) => {
          if (result) {
            // console.log('user has already voted')
            this.errorStatus = true
            this.userStatus = false
          }
        })

      if (this.userStatus) {
        // Update the votes in the database, adds user to the database and update series for piechart
        await addVote(this.year, this.month, this.vote)
        this.updateSeries()
        this.errorStatus = true
        this.userStatus = true
      }
    }
  }
}
</script>
<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto mt-5">
    <article>
      <div class="flex-col mr-2" id="container">
        <!-- Displays the radio button layout -->
        <RadioLayout :children="Object.keys(this.vote)" :titles="this.title"></RadioLayout>
        <p style="line-height: 0; font-size: 15px; color: red;" :hidden="this.errorStatus">Please enter a vote for each choice</P>
        <p style="line-height: 0; font-size: 15px; color: red;" :hidden="this.userStatus">You've already voted</P>
        <button @click="submitVote()" style="padding-left: 12px;"> Submit </button>
      </div>
      <!-- Display result here, can use bar graph or pie char -->
    </article>
    <br>
    <no-ssr>
      <div align="center">
        <apexcharts
        width="300"
        type="donut"
        :options="options"
        :series="series"
        id="apexChart"
        style="position: center;"/>
      </div>
    </no-ssr>

  </div>
</template>

</script>
