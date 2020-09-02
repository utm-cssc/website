<script>
// import VueApexCharts from 'vue-apexcharts'
import RadioLayout from './RadioLayout.vue'
export default {
  components: {
    apexcharts: () => import('vue-apexcharts'),
    RadioLayout
  },
  data () {
    return {
      options: {},
      series: [44, 55, 41, 17, 15],
      vote: {
        a: 0,
        b: 0,
        c: 0
      },
      title: ['First choice', 'Second choice', 'Third choice']
    }
  }
}
</script>
<template>
  <!-- https://i.imgur.com/kluuhxo.png -->

  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto mt-5">
    <h1>Vote</h1>
    <article>
      <div class="flex-col mr-2" id="container">
        <RadioLayout :children="Object.keys(this.vote)" :titles="this.title"></RadioLayout>
        <button> Submit </button>
      </div>
      <!-- Display result here, can use bar graph or pie char -->
    </article>
    <no-ssr> <apexcharts width="380" type="donut" :options="options" :series="series"></apexcharts> </no-ssr>

  </div>
</template>

</script>
