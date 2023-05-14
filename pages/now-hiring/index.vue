<template>
  <div class="container">
    <!-- What is CSSC -->
    <div class="my-5">
      <div class="cssc-heading">
        We're Hiring!
      </div>
      <p>
        The Computer Science Student Community (CSSC) is an organization
        dedicated to supporting computer science students throughout their
        university career. If you're passionate about computer science and want
        to make a positive impact on your fellow students, CSSC is looking for
        new hires to join our various teams. As a member of CSSC, you'll have
        the opportunity to help students in their academic and professional
        pursuits, while also fostering community growth. Don't miss out on this
        chance to become a part of a supportive and impactful organization -
        apply to join CSSC today!
      </p>
    </div>
    <div class="flex justify-center space-evenly flex-wrap">
      <img class="slide" :src="slide1" />
      <img class="slide" :src="slide2" />
      <img class="slide" :src="slide3" />
      <img class="slide" :src="slide4" />
    </div>
    <div class="mt-5 flex justify-center">
      <v-btn class="btn-cta mt-2" :href="button1.link" target="_blank" x-large>
        {{ button1.label }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      slide1: '../now-hiring/hiring_Slide_1.png',
      slide2: '../now-hiring/hiring_Slide_2.png',
      slide3: '../now-hiring/hiring_Slide_3.png',
      slide4: '../now-hiring/hiring_Slide_4.png',
      button1: {
        label: 'Apply Now!',
        link: 'https://forms.gle/HF8rNPL8Cm9xVsaDA',
      },
    }
  },
}
</script>

<style scoped>
.slide {
  max-width: 20vw;
  min-width: 200px;
}

.btn-cta {
  background-color: #5d7493 !important;
  border-color: #5d7493 !important;
  outline: none;
  font-size: 1.42rem;
  color: #fff;
}
</style>
