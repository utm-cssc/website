<script>
/* eslint-disable */
</script>

<style>
/* .content {
  max-width: 500px;
  margin: auto;
} */
</style>
 
<template>

  <div class="container">
	<div class="mt-5 d-flex flex-column justify-content-center align-items-center">
      <CenteredHero
        icon="svg/cssc-logo-without-title.svg"
        title="Ask an Upper Year!"
        desc=""
        arrowLink="#ask-upper-year-form"
      />
	</div>
	<a id="ask-upper-year"></a>
    <form action="https://formspree.io/xwkrdzyg" method="POST">
    <!--<form action="http://individual.utoronto.ca/cgi-bin/formmail.pl" method="POST">
	<input type="hidden" name="recipient" value="zain.kazmi@mail.utoronto.ca"/> -->
	<li style="list-style-type: none;"><label for="ask_alex">Ask Alex: TA and POST</label>
      	<input type="checkbox" name="ask alex" text="Ask Alex" id="ask_alex"/>
      	</li>
      	<li style="list-style-type: none;">
      	<label for="ask_jess">Ask Jess</label>
     	<input type="checkbox" name="Ask Jess" id="ask_jess"/>
      	</li>
      	<li style="list-style-type: none;">
     	<label for="ask_chris">Ask Chris</label>
      	<input type="checkbox" id="ask_chris" name="Ask Chris" />
      	</li>
	<li style="list-style-type: none;">
      	<label for=Question> Input your Question here </label> 
      	</li>
	<li style="list-style-type: none;">
	<!-- <textarea id="Question" name="Question" style="border-style: inset;"></textarea> -->
	<b-form-textarea v-model="text" name="Question" placeholder="Enter your Question Here"></b-form-textarea>
	</li>
	<br>
	<li style="list-style-type: none;">
	<h2 style="font-size: 20px;">Tags:</h2>
	</li>
	<li style="list-style-type: none;">
	<label for="post">Post</label>
	<input type="checkbox" name="Post" id="post"/>
	</li>
	<li style="list-style-type: none;">	
	<label for="TA_stuff">TA stuff</label>
	<input type="checkbox" id="TA_stuff" name="TA Stuff" />
	</li>
	<li style="list-style-type: none;">
	<label for="tech">Technology</label>
	<input type="checkbox" id="tech" name="Tech"/>
	</li>
	<li style="list-style-type: none;">
        <label for="personal_proj">Personal Projects</label>
        <input type="checkbox" id="personal_proj" name="Personal Projects"/>
        </li>
	<li style="list-style-type: none;">
	<label for="Gen_questions">General Question About CS Courses (e.g., What to expect?, Course prerequisites?, etc, ...)</label>
	<input type="checkbox" id="Gen_questions" name="General CS course questions"/>
	</li>
	<li style="list-style-type: none;">
	<label for="academic_offences">Academic Offences</label>
        <input type="checkbox" id="personal_proj" name="Academic Offences"/>
        </li>
	<li style="list-style-type: none;">
	<label for="email_prof">Emailing Professors</label>
	<input type="checkbox" id="email_prof" name="email profs"/>
	</li>
	<li style="list-style-type: none;">
	<label for="mental_health">Accessibility and Mental health</label>
	<input type="checkbox" id="mental_health" name="accesibility mental health"/>
	</li>
	<li style="list-style-type: none;">
	<label for="cs_intern">CS Internships</label>
	<input type="checkbox" id="cs_intern" name="CS Internships"/>
	</li>
	<li style="list-style-type: none;">
	<label for="other">Other</label>
	<input type="checkbox" id="other" name="Other"/>
	</li>	
	

	<b-button type="submit" name="Submit">Submit</b-button>
	<b-button type="reset" value="Reset">Reset</b-button>
      </form>

  </div>
</template>

<script>
export default {

}
</script>
