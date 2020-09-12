<template>
  <div class="container">
    <!-- Title -->
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="cssc-heading mt-4 mb-4" style="text-align: center;">
        Technology of the Month
      </div>
    </div>
    <CenteredThreeColumnGrid :children="features" :rounded="false" />
    <!-- Monthly Title -->
    <div>
      <div class="cssc-subheadings mt-4 mb-4" style="text-align: center; font-size: 40px;">
        September - Web Development
      </div>
      <ResourcesGrid :items="resources" />
    </div>
    <div class="mb-5" />
    <!-- Voting Title-->
    <div class="cssc-subheadings mt-4 mb-4" style="text-align: center; font-size: 40px;" :disable="voteStatus" :hidden="voteStatus">
      Voting for {{ this.month }}
      <VoteSystem :databaseSeries="series" :databaseLabels="labels" :month="month" :year="year" />
    </div>
  </div>
</template>

<script>
import VoteSystem from './VoteSystem.vue'
import { getMonthVotes } from '~/assets/database/firebase.js'
export default {
  components: {
    VoteSystem
  },
  async asyncData ({ params }) {
    // Fetch the data from the database
    const tempTitle = []
    const tempNum = []
    // Change start date here
    const startDate = 12
    // Fetch the current date and year and next month
    const currentDate = new Date()
    const nextMonth = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth() + 1, 1).toLocaleString('default', { month: 'long' })
    const currentYear = currentDate.getUTCFullYear().toString()
    const currentDay = currentDate.getUTCDate()
    // Change the integer value if we want to change the start date for the voting system
    if (currentDay >= startDate) {
      let resultStatus = false
      // Fetch the votes from the current Month and Year
      await getMonthVotes(currentYear, nextMonth)
        .then((result) => {
          if (result !== null) {
            const dictLen = Object.keys(result).length
            // Converts the dictionary to the appropriate array
            for (let i = 0; i < dictLen; i++) {
              tempTitle.push(result[i].id)
              tempNum.push(result[i].Vote)
            }
          } else {
            // Hide and disables the vote system if there no available data
            resultStatus = true
          }
        })
      // Set the dynamic data to the corresponding variable
      return { labels: tempTitle, series: tempNum, month: nextMonth, year: currentYear, voteStatus: resultStatus }
    }
    // Hides and disables the voting system if it is not the starting date of the month
    return { voteStatus: true }
  },
  data: () => {
    return {
      labels: [],
      series: [],
      month: '',
      year: '',
      voteStatus: false,
      features: [
        {
          title: 'What is Technology of the month?',
          desc: 'A monthly learning opportunity to explore different areas of CS and to create cool projects to compete in a showcase competition!',
          icon: '/icons/tech-of-the-month.svg'
        },
        {
          title: 'Workshops',
          desc: 'These workshops are designed to help students learn the basic fundamentals, or help polish their skills. No prior knowledge is needed!',
          icon: '/icons/workshop.svg'
        },
        {
          title: 'Voting',
          desc: 'Want to have a say in the upcoming workshop? Vote below!',
          icon: '/icons/vote.svg'
        }
      ],
      resources: [
        {
          title: 'HTML',
          desc: 'Learn the base foundation of all websites',
          link: '/resources/html',
          icon: '/icons/html5.svg'
        },
        {
          title: 'CSS',
          desc: 'Learn how to style your HTML pages',
          link: '/resources/css',
          icon: '/icons/css3.svg'
        },
        {
          title: 'Javascript',
          desc: 'Learn how to implement scripts into your HTML page',
          link: '/resources/javascript',
          icon: '/icons/javascript.svg'
        }
      ]
    }
  }
}
</script>
