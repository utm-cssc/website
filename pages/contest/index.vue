<script>
/* eslint-disable */
</script>

<template>
  <div class="container">
    <div class="mt-5 flex flex-column justify-center align-center">
      <CenteredHero
        icon="../../icons/projects.svg"
        title="Open Source Contest"
        desc="Compete to be the best contributor!"
      />
    </div>
    <div class="mb-3 mt-2 cssc-heading">Open Source Contest</div>
    <p class="mb-3">
      The Open Source Contest is an 11-day long competition where students
      compete to make as many contributions to open source projects as they can!
      By participating, students can get hands-on experience with Git, GitHub,
      and the open source contribution process, as well as build their resume by
      writing code for open source repositories.
    </p>
    <div class="mb-3 mt-2 cssc-heading">How it Works</div>
    <p class="mb-5">
      Students will be competing for three awards: Best Contributor, Best Issue,
      and Best Pull Request.
      <b
        >The winner of each award will receive a GitHub Invertocat hoodie as a
        prize!</b
      >
      <br /><br />

      When the contest starts, students will receive GitHub invitations to join
      the open source repositories for the projects they will be contributing
      to. There are two projects: a discord bot that allows users to send
      anonymous messages, and a command-line version of the game Wordle.
      <br /><br />

      Students can sign up for the contest from March 13th until March 16th at
      11:59pm. The contest will start on March 17th, and run until March 27th at
      11:59pm. <br /><br />

      After the contest starts, and students have accepted the GitHub
      invitations to their repositories, they can start competing and making
      their contributions! Students can find a list of issues under the Issues
      tab of their repositories. These issues will list all the features, bugs,
      and fixes that they can work on to make contributions. These issues can be
      solved by writing code to address the problems the they describe, and then
      making a pull request for the code. Each issue will list an associated
      number of points which students will earn after solving them.
      Additionally, students can earn points by creating their own issues and
      solving those. Any issues that a student creates and solves will be
      evaluated by mentors to determine how many points they will earn for that
      issue. The more quality the issue, the more points it will get!
      <br /><br />

      Once the contest ends, the judges will evaluate the pull requests and
      issues made by students to determine the winners of the prizes!
      <br /><br />
    </p>
    <div>
      <div class="mb-3 mt-2 cssc-heading">Leaderboard</div>
      <v-data-table
        :headers="headers"
        :items="users"
        item-key="name"
        class="elevation-1"
      />
    </div>
    <div class="mb-3 mt-2 cssc-heading">How to Enter</div>
    <p class="mb-3">
      To sign up for the contest, fill in the
      <u><a href="https://forms.gle/bk5Ey88F6tfXZ2s49">sign-up form</a></u> by
      the end of March 16th! In order to keep yourself updated on the contest as
      it unfolds, join the contest
      <u><a href="https://discord.gg/MMDfbdy6FK">Discord server</a></u> to
      receive announcements, instructions, and help from mentors. Make sure to
      join, as this is where all communication about the contest will take
      place!
    </p>
    <div class="mb-3 mt-2 cssc-heading">Resources</div>
    <div>
      <grid-1-x-2
        link="https://huonggiangbui.notion.site/Open-source-Contribution-Guideline-f578ed76a7e64212bf79a1b0e8906164"
        title="How to get started with Open Source"
        desc="The basics to Git and Github"
        button="Check it out!"
      ></grid-1-x-2>
      <grid-1-x-2
        title="Quick Guide to Javascript"
        link="https://huonggiangbui.notion.site/JS-Quick-Guideline-2c7a3c733a424d01a4173b5f50d1a595"
        desc="Learn how to use Javascript in a few seconds"
        button="Check it out!"
      ></grid-1-x-2>
      <grid-1-x-2
        link="https://www.notion.so/AnonBot-A-Guide-25b6733b7da84d418d4fc137fdbc8166"
        title="AnonBot: a Guide"
        desc="Get an overview of the AnonBot project"
        button="Check it out!"
      ></grid-1-x-2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    }
  },
  computed: {
    headers() {
      return [
        {
          text: 'Rank',
          align: 'start',
          sortable: false,
          value: 'rank',
        },
        {
          text: 'Github Username',
          value: 'username',
        },
        {text: 'Points', value: 'points', sortable: true},
        {text: 'Issues Solved', value: 'solved', sortable: true},
        {text: 'Issues Created', value: 'created', sortable: true},
      ]
    },
    isDark() {
      return this.$nuxt.$colorMode.value == 'dark'
    },
  },
}
</script>

<style scoped>
.button {
  background-color: var(--color-secondary) !important;
  border: none;
  color: white;
}

.button:hover,
.button:active {
  background-color: var(--color-primary-dark) !important;
  box-shadow: none !important;
}

.v-expansion-panel-header {
  font-size: 20px;
}

.jack_cheer_container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.jack_cheer {
  box-sizing: border-box;
  margin-left: 25rem;
  margin-right: 25rem;
}
</style>
