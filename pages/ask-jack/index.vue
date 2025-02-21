<script>
/* eslint-disable */
</script>

<template>
  <div class="container">
    <div class="mt-5 flex flex-column justify-center align-center">
      <CenteredHero
        icon="../../icons/quiz.svg"
        title="Ask Jack!"
        desc="Ask all of your university and computer science questions here!"
        :button1="button1"
        :button2="button2"
      />
    </div>
    <a id="ask-upper-year-form"></a>
    <div class="mb-3 mt-2 cssc-heading">Ask Jack</div>
    <p class="mb-3">
      Hello everyone! It’s nice to meet you all! My name is Jack, I use he/him
      pronouns, and I’m here to answer all your questions! You can ask me
      anything you want about academics, internships and PEY, access to other
      resources like accessibilities or department policies, and much more! You
      can either send in your question down below or send them in the CSSC
      Discord in the Ask Jack channels (Links at the bottom of this page.)
      Puzzle pieces are just like humans: sometimes we might make mistakes. But
      I’ll try my best to answer all your burning questions! Until then, this is
      Jack signing off!
    </p>
    <div class="mb-3 mt-2 cssc-heading">Behind the Scenes</div>
    <p class="mb-5">
      Ask Jack is an initiative created by CSSC for students and driven by
      students. Our goal is to answer student questions with the help of the MCS
      Department and Faculty members. Most answers will be from upper-year
      students, but for more specific questions that require expert advice,
      please be assured we will be working with the department to provide the
      most updated and accurate answers as possible. We hope that this program
      will help ease student uncertainty when dealing with their academic,
      social, and professional life. If you’re curious about the people behind
      Ask Jack, feel free to check us out under the Meet the Team section on our
      homepage!
    </p>
    <v-form action="https://formspree.io/xwkrdzyg" method="POST">
      <div class="mb-3 mt-3 cssc-heading">Ask Your Question</div>
      <v-text-field
        v-model="question"
        name="Question"
        placeholder="Enter your Question Here"
        required
        rows="3"
      ></v-text-field>
      <div class="mb-3 mt-2 cssc-heading">Tags</div>
      <p class="mb-3">
        Note: CSSC cannot answer any course content related questions!
      </p>
      <div
        class="flex align-center mr-3"
        v-for="tagOption in tagOptions"
        :key="tagOption.value"
      >
        <v-checkbox
          v-model="selectedTags"
          :value="tagOption.value"
          :id="tagOption.value"
        ></v-checkbox>
        <label :for="tagOption.value">{{ tagOption.text }}</label>
      </div>
      <div class="mt-3 cssc-heading">Email</div>
      <p class="mb-2">
        Feel free to provide your utoronto email so we can contact you back!
        (Optional)
      </p>
      <p class="mb-2">
        Note: Unless an email address is provided, all questions and answers
        will be posted anonymously on the #general-guidance channel on
        <a href="https://cssc.utm.utoronto.ca/discord">CSSC's Discord.</a>
      </p>

      <v-text-field
        v-model="email"
        name="Email"
        placeholder="user@mail.utoronto.ca"
        rows="1"
        max-rows="1"
      ></v-text-field>
      <div class="flex justify-center mb-4 mt-5">
        <v-btn size="lg" type="submit" name="Submit" class="button mr-3"
          >Submit</v-btn
        >
        <v-btn size="lg" type="reset" value="Reset" class="button ml-3"
          >Reset</v-btn
        >
      </div>
    </v-form>
    <div class="mt-3 mb-4 cssc-heading" id="faq">
      Frequently Asked Questions
    </div>
    <v-row justify="center">
      <v-expansion-panels inset>
        <v-expansion-panel v-for="(faq, index) in allFAQ" :key="index">
          <v-expansion-panel-header>
            Q: {{ faq.question }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            A: {{ faq.answer }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
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
  async asyncData({$content, params, error}) {
    const allFAQ = []
    const faqs = await $content('faq/faq').fetch()
    const lines = faqs.body.children[0].children[0].value.split('\n')
    for (let i = 0; i < lines.length; i++) {
      const currentFAQ = lines[i].split('|')
      if (currentFAQ[0] != '' && currentFAQ[1] != '') {
        const FAQ = {
          question: currentFAQ[0],
          answer: currentFAQ[1],
        }
        allFAQ.push(FAQ)
      }
    }
    return {allFAQ}
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
