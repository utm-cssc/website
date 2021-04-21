<template class="v-application--wrap">
  <div class="container">
    <section class="main">
      <TheShowNavBar />
      <TheShowHero />
      <div class="society-container">
        <div v-for="society in societies" :key="society.name">
          <img
            class="society-img"
            :src="`/the-show/societies/${society.name}.png`"
          />
        </div>
      </div>
      <TheShowCountdown />
    </section>

    <section>
      <h1 class="section-title">About</h1>
      <div class="box-style">
        <div class="contests-text-container">
          The Show must go on!
          <br />
          <br />
          Presenting The Show Rebooted, the revival of the six-hour extravaganza
          dedicated to you, the MCS student community. After everything that
          happened this year, we're bringing a version of The Show that will
          happen once in your lifetime! Although we're all stuck online this
          time, we'll still have the fun and the freebies to bring you a night
          you won’t forget.
        </div>
      </div>
    </section>

    <section class="event-card" v-for="event in events" :key="event.name">
      <h1 class="section-title">{{ event.name }}</h1>
      <div class="box-style">
        <div class="contests-text-container">
          <TheShowGrid :items="event.hosting"></TheShowGrid>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheShowHero from '~/components/the-show/TheShowHero'
import TheShowCountdown from '~/components/the-show/TheShowCountdown'
import TheShowNavBar from '~/components/the-show/TheShowNavbar'
import TheShowGrid from '~/components/the-show/TheShowGrid'

export default {
  layout: 'the-show',
  components: {TheShowGrid, TheShowNavBar, TheShowCountdown, TheShowHero},
  data() {
    return {
      societies: [
        {name: 'cssc', link: 'https://cssc.utm.utoronto.ca/discord'},
        {name: 'dsc', link: 'https://discord.gg/8xKTpsv'},
        {name: 'mcss', link: 'https://discord.gg/5K3TuF7DkY'},
        {name: 'utm_robotics', link: 'https://discord.gg/bE4a3g4'},
        {name: 'utm_sam', link: 'http://utmsam.sa.utoronto.ca/'},
        {name: 'wisc', link: 'https://www.wiscutm.com/'},
        {name: 'whitevan', link: 'https://www.white-van.xyz'},
      ],
      events: [
        {
          name: 'Competitions',
          hosting: [
            {name: 'Trivia Night (ft. MCS Profs!)', img: 'trivia.svg'},
            {name: 'Bob Ross MS Paint Night', img: 'paint.svg'},
          ],
        },
        {
          name: 'Workshops',
          hosting: [
            {name: 'Keep it QL with GraphQL', img: 'graphql.svg'},
            {name: 'Kubernetes Workshop', img: 'kubernetes.svg'},
          ],
        },
        {
          name: 'Activities',
          hosting: [
            {name: 'Poker Tournament', img: 'poker.svg'},
            {name: 'Minecraft Building Challenge', img: 'minecraft.svg'},
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.v-application--wrap {
  background-color: green !important;
}

.society-img {
  height: 100px;
  width: 100px;
}

.society-container {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 40px;
}

.main {
  min-height: 100vh;
}

.section-title {
  font-size: 42px;
  color: white;
  font-weight: 600;
  margin-bottom: 20px;
}

.box-style {
  border-radius: 25px;
  background-color: rgba(70, 70, 70, 1);
  color: white;
  padding: 20px;
  margin: 0px;
}

.contests-text-container {
  margin: 2em;
}

.event-card {
  margin-bottom: 20px !important;
}
</style>
