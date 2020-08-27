<script>
// import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    apexcharts: () => import('vue-apexcharts')
  },
  data () {
    return {
      options: {},
      series: [44, 55, 41, 17, 15],
      vote: ['a', 'b', 'c'],
      first: '',
      second: '',
      counter: 0
    }
  },
  methods: {
    setUp () {
      const container = document.querySelector('#listContainer')
      for (let i = 0; i < this.vote.length; i++) {
        const listItem = document.createElement('li')
        // const subText = document.createElement('a')
        listItem.innerHTML = this.vote[i]
        container.appendChild(listItem)
      }
    },
    submitVote (name) {
      // const radioButtons = document.getElementsByName('favorite_pet')
      // for (let i = 0; i < radioButtons.length; i++) {
      //   if (radioButtons[i].checked === true) {
      //     alert(radioButtons[i].value)
      //   }
      // }

      const test = document.getElementById(name + 'Name')

      if (this.counter === 2) {
        this.counter = 1
      } else {
        this.counter += 1
      }
      if (this.counter === 1) {
        this.first = name
      } else {
        this.second = name
      }
      test.innerHTML = this.counter
      alert(this.first + ' ' + this.second)
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
        <ul id="listContainer">
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
        </ul>
        <!-- <fieldset>
          <h2>What is Your Favorite Pet?</h2>
          <input type="radio" name="favorite_pet" value="Cats" checked />Cats<br />
          <input type="radio" name="favorite_pet" value="Dogs" />Dogs<br />
          <input type="radio" name="favorite_pet" value="Birds" />Birds<br />
          <button type="button" @click="submitVote()">Click Me!</button>
        </fieldset> -->
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
