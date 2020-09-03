<script>
import RadioLayout from './RadioLayout.vue'
import { getMonthVotes, addVote } from '~/assets/database/firebase.js'
export default {
  components: {
    apexcharts: () => import('vue-apexcharts'),
    RadioLayout
  },
  async asyncData ({ params }) {
    const tempTitle = []
    const tempNum = []
    // Read the votes from the month of september
    await getMonthVotes('september')
      .then((result) => {
        console.log(JSON.stringify(result))
        const dictLen = Object.keys(result).length
        // Converts the dictionary to the appropriate array
        for (let i = 0; i < dictLen; i++) {
          tempTitle.push(result[i].id)
          tempNum.push(result[i].Number)
        }
      })
    console.log(tempTitle.toString())
    console.log(tempNum.toString())
    // Set the labels and series of the pie chart
    return { options: { labels: tempTitle }, series: tempNum }
  },
  data () {
    return {
      title: ['First Choice', 'Second Choice', 'Third Choice'],
      vote: {},
      options: {
        // Labels is the legend of the pie chart
        // The labels and series index corresponds with another, first index of the label is first value of the series
        labels: []
      },
      // Series is the numbers that will display onto the pie chart
      series: []
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
    async updateSeries () {
      // This can be changed be to more efficient so it is not reading from the database again
      // This is updating the series array, AKA updating the pie chart
      const tempNum = []
      await getMonthVotes('september')
        .then((result) => {
          const dictLen = Object.keys(result).length
          for (let i = 0; i < dictLen; i++) {
            tempNum.push(result[i].Number)
          }
        })
      this.series = tempNum
    },
    async submitVote () {
      // Submit the votes to the database, it will first rearrange the dictionary into an array where the head is the first choice
      // and the tail is the last choice
      // The number of votes can be adjusted so it is fair, currently it is just first place gets 3 votes, second place gets 2, and last place gets 1
      console.log(JSON.stringify(this.vote))
      const dictLen = Object.keys(this.vote).length
      const sortedArray = new Array(dictLen)
      let status = true

      for (const key in this.vote) {
        const arrayIndex = this.vote[key] - 1
        if (arrayIndex >= 0) {
          sortedArray[arrayIndex] = key
        } else {
          // If the user didn't select a button, it won't update the votes
          alert('Please rank them properly')
          status = false
        }
      }
      console.log(sortedArray)
      if (status) {
        console.log('Updating vote and series')
        await addVote('september', sortedArray)
        await this.updateSeries()
      }
    }
  }
}
</script>
<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto mt-5">
    <h1>Vote</h1>
    <article>
      <div class="flex-col mr-2" id="container">
        <!-- Displays the radio button layout -->
        <RadioLayout :children="Object.keys(this.vote)" :titles="this.title"></RadioLayout>
        <button @click="submitVote()"> Submit </button>
      </div>
      <!-- Display result here, can use bar graph or pie char -->
    </article>
    <no-ssr> <apexcharts width="380" type="donut" :options="options" :series="series"></apexcharts> </no-ssr>

  </div>
</template>

</script>
