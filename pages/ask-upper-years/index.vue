<script>
/* eslint-disable */
</script>
 
<template>
  <div class="container">
	<div class="mt-5 d-flex flex-column justify-content-center align-items-center">
      <CenteredHero
        icon="../../icons/quiz.svg"
        title="Ask an Upper Year!"
        desc="Ask all of your university and computer science questions to upper year students who have been in your shoes!"
        arrowLink="#ask-upper-year-form"
      />
	</div>
	<a id="ask-upper-year-form"></a>
	<div class="cssc-heading" style="text-align: center;">
        CSSC Upper Year Students
    </div>
	<CenteredThreeColumnGrid :children="features" :rounded="true" />
    <form action="https://formspree.io/xwkrdzyg" method="POST">
	<div class="mb-3 cssc-heading">
        Choose an Upper Year Student
    </div>
	<b-form-group>
		<b-form-checkbox-group class="flex" id="ask-upper-year" v-model="selectedUpperYear" name="upper-year-student">
			<div class="flex align-items-center mr-3" v-for="upperYearOption in askUpperYearOptions" :key="upperYearOption.value">
				<b-form-checkbox :value="upperYearOption.value"></b-form-checkbox>
				<span>{{upperYearOption.text}}</span>
			</div>
		</b-form-checkbox-group>
	</b-form-group>	
	<div class="mb-3 mt-2 cssc-heading">
		Ask Your Question
    </div>
	<b-form-textarea v-model="question" name="Question" placeholder="Enter Your Question Here" rows="3"></b-form-textarea>
	<div class="mt-2 cssc-heading">
    	Tags
    </div>
	<p class="mb-3">Note: CSSC cannot answer any course content related questions!</p>
	<b-form-group>
		<b-form-checkbox-group id="ask-upper-year-tags" v-model="selectedTags" name="question-tags">
			<div class="flex align-items-center mr-3" v-for="tagOption in tagOptions" :key="tagOption.value">
				<b-form-checkbox :value="tagOption.value"></b-form-checkbox>
				<span>{{tagOption.text}}</span>
			</div>
		</b-form-checkbox-group>
	</b-form-group>	
	<div class="mt-3 cssc-heading">
    	Share With Us
    </div>
	<p class="mb-2">
		Are you okay with us posting your question anonymously under our FAQ on our website, Discord and/or Instagram?
	</p>
	<b-form-checkbox-group id="ask-upper-year-share" v-model="shareQuestion" name="share-question">
		<div class="flex align-items-center mr-3" v-for="shareQuestionOption in shareQuestionOptions" :key="shareQuestionOption.value">
			<b-form-checkbox :value="shareQuestionOption.value"></b-form-checkbox>
			<span>{{shareQuestionOption.text}}</span>
		</div>
	</b-form-checkbox-group>
		<div class="mt-3 cssc-heading">
    	   Email
        </div>
	<p class="mb-2">
		Please provide your utoronto email so we can contact you back!
	</p>
	<b-form-textarea v-model="email" name="Email" placeholder="user@mail.utoronto.ca" rows="1" max-rows="1"></b-form-textarea>
	<div class="d-flex justify-content-center mb-4 mt-5">
		<b-button size="lg" type="submit" name="Submit" class="button mr-3">Submit</b-button>
		<b-button size="lg" type="reset" value="Reset" class="button ml-3">Reset</b-button>
	</div>
      </form>
	  <div class="mt-3 mb-4 cssc-heading">
    	Frequently Asked Questions
      </div>
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
		  { text: "Yes", value: "Yes"},
		  { text: "No", value: "No"}
	  ],
	  askUpperYearOptions: [
		{ text: "Jessica Anderson", value: "Jess" },
		{ text: "Chris Lim", value: "Chris" },
		{ text: "Alexandra Thompson", value: "Alex" },
		{ text: "Any Upper Year", value: "Any Upper Year" },
	  ],
	  tagOptions: [
		{ text: "POSt", value: "POSt" },
		{ text: "Technology", value: "Technology" },
		{ text: "Becoming a TA", value: "Becoming a TA" },
		{ text: "Personal Projects", value: "Personal Projects" },
		{ text: "General First Year Question", value: "General First Year Question" },
		{ text: "General CS Course Questions (e.g. What to expect?, Course Prerequisites?, etc.)", value: "General CS Question" },
		{ text: "Academic Offences", value: "Academic Offences" },
		{ text: "Accessibility and Mental Health", value: "Accessibility and Mental Health" },
		{ text: "Emailing Professors", value: "Emailing Professors" },
		{ text: "CS Internships", value: "CS Internships" },
		{ text: "Other", value: "Other" },

	  ],
      features: [
        {
          title: 'Jessica Anderson',
          desc: 'Jessica was accepted into UTM as an Accounting Student, but ended up wanting to do Computer Science, so she is ready to tackle any of your POSt questions. She always struggles to choose which courses are most important to take and she\'s ready to share her findings! Jessica also has industry experience so feel free to send any of those questions her way!',
          icon: 'https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/53421307_422837641797498_4304438682435190784_n.jpg?_nc_cat=103&_nc_sid=174925&_nc_ohc=PNNt6wDk8fIAX_Ivtbx&_nc_oc=AQkYBQz4FbrqeeWYV-K5xdFq5Wn7-DeBgJDorZQBJ7F9IB7-E7A88a5LtgmGgqGNHiwNb5iTUR1uGq7V7oj6tKJK&_nc_ht=scontent.fyyz1-1.fna&oh=2129d75a3918d714fe942f762788dde1&oe=5F7E5C5E'
        },
        {
          title: 'Chris Lim',
          desc: 'Chris is our tech lead! He recently finished a CSC492 project where he created a tinder-like application for students to match with school clubs! If you need help with your personal projects or want to learn a new technology, he\'s your go to man!',
          icon: 'https://avatars1.githubusercontent.com/u/24628243?s=400&u=0edf079732c29b3c8cdd0358a39210d57d301002&v=4'
        },
        {
          title: 'Alexandra Thompson',
          desc: 'Alexandra found her passion for teaching and working with students in her time as an undergraduate Computer Science teaching assistant. Now, she aspires to go to graduate school and continue inspiring students. Alexandra loves to talk about academic how-to\'s, being a TA and anything to do with the ups and downs of student life. She loves to share her tips on overcoming struggles and help undergraduates find the right strategy.',
          icon: '../../profile-pics/AlexThompson.jpg'
        }
      ]
    }
  }
}
</script>
<style scoped>
.custom-control-inline {
  margin-right: 0.15rem;
}

.button {
  background-color: var(--color-primary);
  border: none;
}

.button:hover {
  background-color: var(--color-primary-dark);
}
</style>