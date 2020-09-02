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
      title: ['First choice', 'Second choice', 'Third choice'],
      vote: {
        a: 0,
        b: 0,
        c: 0
      },
      options: {
        labels: ['First choice', 'Second choice', 'Third choice']
      },
      series: [1, 1, 1]
    }
  },
  methods: {
    submitVote () {
      console.log(JSON.stringify(this.vote))
      const dictLen = Object.keys(this.vote).length
      const sortedArray = new Array(dictLen)
      const tempArray = new Array(3)

      for (const key in this.vote) {
        const arrayIndex = this.vote[key] - 1
        if (arrayIndex >= 0) {
          sortedArray[arrayIndex] = key
        } else {
          alert('Please rank them properly')
        }
      }

      let counter = 3
      for (let i = 0; i < dictLen; i++) {
        tempArray[i] = this.series[0] + counter
        counter -= 1
      }
      this.series = tempArray
      console.log(sortedArray.toString())
      console.log(tempArray)
      // alert(sortedArray.toString())
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
        <button @click="submitVote()"> Submit </button>
      </div>
      <!-- Display result here, can use bar graph or pie char -->
    </article>
    <no-ssr> <apexcharts width="380" type="donut" :options="options" :series="series"></apexcharts> </no-ssr>

  </div>
</template>

</script>
