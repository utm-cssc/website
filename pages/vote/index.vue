<script>
// import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    apexcharts: () => import('vue-apexcharts'),
    optionList: {
      props: {
        voteList: Array
      },
      render (createElement) {
        return createElement('div', {}, [
          createElement('ul', {},
            this.voteList.map(option => createElement('li', {
              attrs: {
                id: option + 'Name'
              }
            },
            [`${option}`, createElement('button', {
              attrs: {
                id: option + 'Counter'
              },
              on: {
                click: () => this.$parent.changeCounter(option)
              }
            }, '0')])
            ))
        ])
      }
    }
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
      first: '',
      second: '',
      counter: 0
    }
  },
  methods: {
    changeCounter (name) {
      const test = document.getElementById(name + 'Counter')
      const dictLen = Object.keys(this.vote).length
      if (this.counter === dictLen) {
        this.counter = 1
      } else {
        this.counter += 1
      }
      this.vote[name] = this.counter
      test.innerHTML = this.counter
      alert(JSON.stringify(this.vote))
    },
    submitVote () {
      const dictLen = Object.keys(this.vote).length
      const sortedArray = new Array(dictLen)
      for (const key in this.vote) {
        const arrayIndex = this.vote[key] - 1
        if (sortedArray[arrayIndex] == null) {
          sortedArray[arrayIndex] = key
        } else {
          alert('Please rank them properly')
        }
      }
      alert(sortedArray.toString())
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
        <optionList v-bind:voteList="Object.keys(this.vote)"></optionList>
          <!--
          <li @click="submitVote('a')" id="a">
            A
            <a id="aName"></a>
          </li>
          <li @click="submitVote('b')" id="b">
            B
            <a id="bName"></a>
          </li>
          <li @click="submitVote('c')" id="c">
            C
            <a id="cName"></a>
          </li>
          -->
        <button @click="submitVote"> Submit </button>
      </div>
      <!-- Display result here, can use bar graph or pie char -->
    </article>
    <no-ssr> <apexcharts width="380" type="donut" :options="options" :series="series"></apexcharts> </no-ssr>

  </div>
</template>

</script>

<style scoped>

.content {
  position: relative;
}

.title {
  line-height: 1;
  opacity: 1;
  font-size: 2.6666667em;
  margin: 0;
  margin-top: 0;
  margin-bottom: 0.875em;
  color: #1a202c;
  font-weight: 800;
}

.event-card {
  border: solid 2px #343434;
  border-radius: 8px;
  padding: 12px 24px;
}

.img-event {
  height: 209px;
}

@media (max-width: 600px) {
  .img-event {
    height: 108px;
  }
}
</style>
