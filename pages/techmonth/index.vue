<template>
  <div class="container">
    <!-- Title -->
    <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
      <div class="cssc-title">Technology of the Month</div>
    </div>
    <hr class="mt-4" />
    <Grid-1-X-3 :children="features"></Grid-1-X-3>
    <!-- Monthly Title -->
    <div>
      <div class="cssc-heading-center">September - Web Development</div>
      <GridLink :children="resources"></GridLink>
    </div>
    <div class="mb-5" />
    <div class="cssc-heading-center">Voting</div>
  </div>
</template>

<script>
import GridLink from './GridLink.vue'
export default {
  components: {
    GridLink
  },
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
          link: 'http://localhost:3000/'
        },
        {
          title: 'CSS',
          desc: 'Learn how to style your HTML pages',
          link: 'http://localhost:3000/'
        },
        {
          title: 'Javascript',
          desc: 'Learn how to implement scripts into your HTML page',
          link: 'http://localhost:3000/'
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
