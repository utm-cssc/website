<template>
  <div class="container">
    <!-- Title -->
    <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
      <div class="cssc-heading">Technology of the Month</div>
    </div>
    <hr class="mt-4" />
    <Grid-1-X-3 :children="features"></Grid-1-X-3>
    <!-- Monthly Title -->
    <div>
      <div class="cssc-subheadings" style="text-align: center; font-size: 40px;">September - Web Development</div>
      <ResourcesGrid :items="resources"/>
    </div>
    <div class="mb-5" />
    <div class="cssc-subheadings" style="text-align: center; font-size: 40px;">Voting</div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      features: [
        {
          title: 'What is Technology of the month',
          desc: 'Each month a technology will be focused on for learning purposes'
        },
        {
          title: 'Workshops',
          desc: 'These workshops will be designed to help each student either learn from the base foundation, or help polish their skills'
        },
        {
          title: 'How you can contribute',
          desc: 'Want to have a say in the upcoming workshop? Vote below!'
        }
      ],
      resources: [
        {
          title: 'HTML',
          desc: 'Learn the base foundation of all websites',
          link: 'http://localhost:3000/',
          icon: 'devicon-html5-plain-wordmark'
        },
        {
          title: 'CSS',
          desc: 'Learn how to style your HTML pages',
          link: 'http://localhost:3000/',
          icon: 'devicon-css3-plain-wordmark'
        },
        {
          title: 'Javascript',
          desc: 'Learn how to implement scripts into your HTML page',
          link: 'http://localhost:3000/',
          icon: 'devicon-javascript-plain'
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
