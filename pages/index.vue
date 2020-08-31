<template>
  <div class="container">
    <!-- Title -->
    <div class="d-flex flex-column justify-content-center align-items-center hero-full-height">
      <img src="@/assets/logo/cssc-logo.png" alt="UTM CSSC Logo">
      <b-btn class="mt-4">Tech Of the Month →</b-btn>
    </div>
    <Grid-1-X-3 :children="features"></Grid-1-X-3>
    <!-- What is CSSC -->
    <div>
      <div class="cssc-heading">What is CSSC?</div>
      <p class="cssc-subheading">
        The Computer Science Student Community (CSSC) is an open space for Computer Science students to come in and ask questions about their university and post-university career. We act as liaisons to the Computer Science faculty to ensure that all students can seek appropriate support and guidance. The CSSC seeks to support students through community initiatives built upon inclusivity and empowerment.
      </p>
    </div>
    <div>
      <div class="cssc-heading">How to contribute?</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      features: [
        {
          title: 'Academic & Professional Growth',
          desc: 'The CS Student Community aims to provide students with technological knowledge sought after by employers in the industry. We provide students with opportunities, space and resources to develop their academic and professional skills. The CSSC also looks to inform students of options they have post-graduation and how they can combine this degree with other fields.'
        },
        {
          title: 'Development of Technology Resources',
          desc: 'CSSC\'s technology team is devoted to developing processes and tools to help students succeed academically and professionally. We curate resources from across the internet and produce original content with the interest of students as our top priority.'
        },
        {
          title: 'Collaboration with MCS Societies',
          desc: 'We provide space and resources for MCS clubs that serve particular student needs and concerns. The CSSC works closely with other MCS Clubs and Societies in order to achieve common goals in the CS Community.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero-full-height {
  height: 100vh;
}

.cssc-heading {
  color: #00d097;
  font-size: 50px;
  font-weight: bold;
}

.cssc-subheading {
  font-size: 30px;
}

@media screen and (max-width: 768px) {
  .hero-full-height {
    min-height: 100vh;
  }
}
</style>
