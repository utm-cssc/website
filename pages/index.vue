<template>
  <div class="container">
    <!-- Title -->
    <div
      class="mt-5 d-flex flex-column justify-content-center align-items-center"
    >
      <!-- <img src="@/assets/logo/cssc-logo.png" alt="UTM CSSC Logo"> -->
      <CenteredHero
        icon="svg/cssc-logo-without-title.svg"
        title="UTM CSSC"
        desc="Helping MCS Students"
        :button1="button1"
        :button2="button2"
      />
    </div>
    <hr class="mt-4">
    <CenteredThreeColumnGrid :children="features" />
    <!-- What is CSSC -->
    <div>
      <div class="cssc-heading">
        What is CSSC?
      </div>
      <p>
        The Computer Science Student Community (CSSC) is an open space for
        Computer Science students to come in and ask questions about their
        university and post-university career. We act as liaisons to the
        Computer Science faculty to ensure that all students can seek
        appropriate support and guidance. The CSSC seeks to support students
        through community initiatives built upon inclusivity and empowerment.
      </p>
    </div>
    <div>
      <div class="cssc-heading">
        CSSC History
      </div>
      <p>
        Formerly known as the Hacklab.
      </p>
    </div>
    <div>
      <div class="cssc-heading">
        How to contribute?
      </div>
      <p>The CSSC is still setting up its near to long term infrastructure.</p>
      <p class="my-2">
        At the moment, the best ways to get involved are:
      </p>
      <li class="ml-4">
        Joining our digital communities on Discord or Microsoft Teams
      </li>
      <li class="ml-4">
        Contributing to this website. Learn how!
      </li>
      <li class="ml-4">
        Engaging with us in person by visiting our office at UTM in Deerfield
        Hall Room 2014. We'll be posting our office hours for the upcoming term
        soon!
      </li>
    </div>
    <div class="mb-5" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      features: [
        {
          title: 'Growth',
          desc:
            'The CSSC is dedicated to your academic and professional growth! We\'re here for you with opportunities, space and resources to inform your computer science journey through University!',
          icon: './svg/growth.svg'
        },
        {
          title: 'Resources',
          desc:
            'Our technology team is devoted to developing processes and tools to help you succeed! We curate from across the internet and produce original content for our community!',
          icon: './svg/resources.svg'
        },
        {
          title: 'Collaboration',
          desc:
            'We work closely with other MCS Clubs and Societies in order to achieve common goals in the CS Community!',
          icon: './svg/collaboration.svg'
        }
      ],
      button1: {
        label: 'Tech of the month',
        link: 'tech-of-month'
      },
      button2: {
        label: 'How to contribute',
        link: 'contribute'
      }
    }
  }
}
</script>

<style scoped>
.hero-full-height {
  height: 100vh;
}

@media screen and (max-width: 768px) {
  .hero-full-height {
    min-height: 100vh;
  }
}
</style>
