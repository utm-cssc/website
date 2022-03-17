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
      11:59pm. The contest will start on March 17th at 10am, and run until March
      27th at 11:59pm. <br /><br />

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
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      question: '',
      email: '',
      labels: [],
      selectedUpperYear: [],
      selectedTags: [],
      shareQuestion: [],
      shareQuestionOptions: [
        {text: 'Yes', value: 'Yes'},
        {text: 'No', value: 'No'},
      ],
      button2: {
        label: 'MCS Townhall Notes',
        link:
          '../../../resources/mcs-townhall/cssc_mcs_townhall_notes_2021.pdf',
      },
      button1: {
        label: 'MCS Townhall Slides',
        link: '../../../resources/mcs-townhall/mcs_townhall_slides_2021.pdf',
      },
      tagOptions: [
        {text: 'POSt', value: 'POSt'},
        {text: 'Technology', value: 'Technology'},
        {text: 'Becoming a TA', value: 'Becoming a TA'},
        {text: 'Personal Projects', value: 'Personal Projects'},
        {
          text: 'General First Year Question',
          value: 'General First Year Question',
        },
        {
          text:
            'General CS Course Questions (e.g. What to expect?, Course Prerequisites?, etc.)',
          value: 'General CS Question',
        },
        {text: 'Academic Offences', value: 'Academic Offences'},
        {
          text: 'Accessibility and Mental Health',
          value: 'Accessibility and Mental Health',
        },
        {text: 'Emailing Professors', value: 'Emailing Professors'},
        {text: 'CS Internships', value: 'CS Internships'},
        {text: 'Other', value: 'Other'},
      ],
    }
  },
  computed: {
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
