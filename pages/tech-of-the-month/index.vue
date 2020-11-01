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
      <div
        class="cssc-subheadings mt-4 mb-4"
        style="text-align: center; font-size: 40px;"
      >
        {{ this.currentMonth }} - Web Development
      </div>
      <ResourcesGrid :items="resources" />
    </div>
    <div class="mb-5" />
    <!-- Voting Title-->
    <div class="cssc-subheadings" style="text-align: center; font-size: 40px;">
      <span v-if="voteEnded && retrievedData">
        Voting has ended for {{ this.votingMonth }} <br />
        <span style="font-size: 20px;"
          >The next vote will start on the 15th and will be available until the
          end of the month</span
        >
        <br /><br />
        Results:
      </span>
      <span v-else-if="!retrievedData">
        Unable to retrieve current voting options. Please try again.
      </span>
      <span v-else> Voting for {{ this.votingMonth }} </span>
    </div>
    <VoteSystem
      :databaseInfo="voteOptions"
      :month="votingMonth"
      :year="votingYear"
      :voteEnded="voteEnded"
      style="text-align: center;"
    />
  </div>
</template>

<script>
import {getMonthVotes} from '~/database/firebase.js'
export default {
  async asyncData({params}) {
    // Storing options and their associated vote count
    let voteOptions = {}
    // Change start date here
    const startDate = 15
    // Fetch the current date and year and next month
    const currentDate = new Date()
    const currentDay = currentDate.getUTCDate()
    const currentMonth = currentDate.toLocaleString('default', {month: 'long'})
    const nextMonth = new Date(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth() + 1,
      1,
    ).toLocaleString('default', {month: 'long'})
    const votingMonth = currentDay <= startDate ? currentMonth : nextMonth
    const votingYear = (
      currentDate.getUTCFullYear() + (nextMonth === 'January' ? 1 : 0)
    ).toString()
    const voteEnded = currentDay <= startDate
    let retrievedData = false
    // Fetch the votes from the specified Month and Year
    await getMonthVotes(votingYear, votingMonth).then(result => {
      retrievedData = true
      voteOptions = result
    })
    // Set the dynamic data to the corresponding variable
    return {
      voteOptions,
      votingMonth,
      votingYear,
      voteEnded,
      currentMonth,
      retrievedData,
    }
  },
  data: () => {
    return {
      features: [
        {
          title: 'What is Technology of the month?',
          desc:
            'A monthly learning opportunity to explore different areas of CS and to create cool projects to compete in a showcase competition!',
          icon: '/icons/tech-of-the-month.svg',
        },
        {
          title: 'Workshops',
          desc:
            'These workshops are designed to help students learn the basic fundamentals, or help polish their skills. No prior knowledge is needed!',
          icon: '/icons/workshop.svg',
        },
        {
          title: 'Voting',
          desc: 'Want to have a say in the upcoming workshop? Vote below!',
          icon: '/icons/vote.svg',
        },
      ],
      resources: [
        {
          title: 'HTML',
          desc: 'Learn the base foundation of all websites',
          link: '/resources/html',
          icon: '/icons/html5.svg',
        },
        {
          title: 'CSS',
          desc: 'Learn how to style your HTML pages',
          link: '/resources/css',
          icon: '/icons/css3.svg',
        },
        {
          title: 'JavaScript',
          desc: 'Learn how to implement scripts into your HTML page',
          link: '/resources/javascript',
          icon: '/icons/javascript.svg',
        },
        {
          title: 'Vue',
          desc:
            'Develop web applications easily with a community powered JavaScript framework!',
          link: '/resources/vue',
          icon: '/icons/vue.svg',
        },
        {
          title: 'React JS',
          desc: 'A JavaScript library for building dynamic user interfaces',
          link: '/resources/react',
          icon: '/icons/react.svg',
        },
      ],
    }
  },
}
</script>
