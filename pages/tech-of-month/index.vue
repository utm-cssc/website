<template>
  <div class="container">
    <!-- Title -->
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="cssc-heading mt-4 mb-4" style="text-align: center;">
        Technology of the Month
      </div>
    </div>
    <hr class="mt-4 mb-4">
    <CenteredThreeColumnGrid :children="features"></CenteredThreeColumnGrid>
    <!-- Monthly Title -->
    <div>
      <div class="cssc-subheadings mt-4 mb-4" style="text-align: center; font-size: 40px;">
        September - Web Development
      </div>
      <ResourcesGrid :items="resources" />
    </div>
    <div class="mb-5" />
    <div class="cssc-subheadings mt-4 mb-4" style="text-align: center; font-size: 40px;">
      Voting
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      features: [
        {
          title: 'What is Technology of the month?',
          desc: 'A monthly learning opportunity to explore different areas of CS and to create cool projects to compete in a showcase competition!',
          icon: '/svg/tech-of-the-month.svg'
        },
        {
          title: 'Workshops',
          desc: 'These workshops are designed to help students learn the basic fundamentals, or help polish their skills. No prior knowledge is needed!',
          icon: '/svg/workshop.svg'
        },
        {
          title: 'Voting',
          desc: 'Want to have a say in the upcoming workshop? Vote below!',
          icon: '/svg/vote.svg'
        }
      ],
      resources: [
        {
          title: 'HTML',
          desc: 'Learn the base foundation of all websites',
          link: 'http://localhost:3000/tech-of-month',
          icon: '/svg/html5.svg'
        },
        {
          title: 'CSS',
          desc: 'Learn how to style your HTML pages',
          link: 'http://localhost:3000/tech-of-month',
          icon: '/svg/css3.svg'
        },
        {
          title: 'Javascript',
          desc: 'Learn how to implement scripts into your HTML page',
          link: 'http://localhost:3000/tech-of-month',
          icon: '/svg/javascript.svg'
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

#monthly {
  padding-left: 150px;
}

@media screen and (max-width: 768px) {
  .hero-full-height {
    min-height: 100vh;
  }

  #monthly {
    padding-left: 0;
  }
}
</style>
