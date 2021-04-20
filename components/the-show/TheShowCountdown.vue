<template>
  <div id="timer">
    <div class="days">
      <div class="numbers">{{ days }}</div>
      days
    </div>
    <div class="hours">
      <div class="numbers">{{ hours }}</div>
      hours
    </div>
    <div class="minutes">
      <div class="numbers">{{ minutes }}</div>
      minutes
    </div>
    <div class="seconds">
      <div class="numbers">{{ seconds }}</div>
      seconds
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheShowCountdown',
  mounted() {
    setInterval(this.tick, 1000)
  },
  methods: {
    tick: function() {
      const today = new Date().getTime()
      const theShowDate = new Date('Apr 24, 2021 18:00:00').getTime()
      const diff = theShowDate - today
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24))
      this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000)
    },
  },
  data: function() {
    return {
      days: '',
      minutes: '',
      hours: '',
      seconds: '',
    }
  },
}
</script>

<style scoped>
.numbers {
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-size: 5.2em;
  font-weight: 800;
  margin: 0px 50px 0 50px;
}

#timer {
  color: #fff;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1em;
  letter-spacing: 3px;
}

.days,
.hours,
.minutes,
.seconds {
  display: inline-block;
  padding: 0px 3px 2px 3px;
  border-radius: 5px;
}
</style>
