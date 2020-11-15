<script>
/* eslint-disable */
</script>

<template>
  <div class="container">
    <div
      class="mt-5 d-flex flex-column justify-content-center align-items-center"
    >
      <CenteredHero
        icon="../../icons/quiz.svg"
        title="Ask Jack!"
        desc="Ask all of your university and computer science questions to upper year students who have been in your shoes!"
        arrowLink="#ask-upper-year-form"
      />
    </div>
    <a id="ask-upper-year-form"></a>
    <div class="mb-3 mt-2 cssc-heading">
      Ask Jack
    </div>
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
    <div class="jack_cheer_container">
      <img
        class="feature-img mb-5 mb-md-0 jack_cheer"
        src="~/static/ask-jack/jack_cheer.png"
      />
    </div>
    <div class="mb-3 mt-2 cssc-heading">
      Behind the Scenes
    </div>
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
    <form action="https://formspree.io/xwkrdzyg" method="POST">
      <div class="mb-3 mt-3 cssc-heading">
        Ask Your Question
      </div>
      <b-form-textarea
        v-model="question"
        name="Question"
        placeholder="Enter your Question Here"
        required="required"
        rows="3"
      ></b-form-textarea>
      <div class="mb-3 mt-2 cssc-heading">
        Tags
      </div>
      <p class="mb-3">
        Note: CSSC cannot answer any course content related questions!
      </p>
      <b-form-group>
        <b-form-checkbox-group
          id="ask-upper-year-tags"
          v-model="selectedTags"
          name="question-tags"
        >
          <div
            class="flex align-items-center mr-3"
            v-for="tagOption in tagOptions"
            :key="tagOption.value"
          >
            <b-form-checkbox :value="tagOption.value"></b-form-checkbox>
            <span>{{ tagOption.text }}</span>
          </div>
        </b-form-checkbox-group>
      </b-form-group>
      <div class="mt-3 cssc-heading">
        Email
      </div>
      <p class="mb-2">
        Feel free to provide your utoronto email so we can contact you back!
        (Optional)
      </p>
      <b-form-textarea
        v-model="email"
        name="Email"
        placeholder="user@mail.utoronto.ca"
        rows="1"
        max-rows="1"
      ></b-form-textarea>
      <div class="d-flex justify-content-center mb-4 mt-5">
        <b-button size="lg" type="submit" name="Submit" class="button mr-3"
          >Submit</b-button
        >
        <b-button size="lg" type="reset" value="Reset" class="button ml-3"
          >Reset</b-button
        >
      </div>
    </form>
    <div class="mt-3 mb-4 cssc-heading">
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
  async asyncData({$axios}) {
    const allFAQ = []
    await $axios
      .$get('https://raw.githubusercontent.com/utm-cssc/faq/master/faq.csv')
      .then(response => {
        const lines = response.split('\n')
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
      })
    return {allFAQ}
  },
}
</script>

<style scoped>
.button {
  background-color: var(--color-primary);
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
}
</style>
