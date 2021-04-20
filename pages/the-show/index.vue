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

    <section>
      <h1 class="section-title">Competitions</h1>
      <div class="box-style">
        <div class="contests-text-container">
          <TheShowGrid :items="competitions"></TheShowGrid>
        </div>
      </div>
    </section>
    <section>
      <h1 class="section-title">Activities</h1>
      <div class="box-style">
        <div class="contests-text-container">
          <TheShowGrid :items="competitions"></TheShowGrid>
        </div>
      </div>
    </section>
    <section>
      <h1 class="section-title">Workshops</h1>
      <div class="box-style">
        <div class="contests-text-container">
          <TheShowGrid :items="competitions"></TheShowGrid>
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
      competitions: [
        {name: 'Trivia Night (ft. MCS Profs!)', desc: 'BAP! BAP!'},
        {name: 'Bob Ross MS Paint Night', desc: 'Very good painter indeed'},
      ],
      workshops: [
        {
          name: 'Keep it QL with GraphQL',
          desc: 'Neo4J sucks. GraphQL all the way',
        },
        {name: 'Kubernetes Workshop', desc: 'K8 K8 K8'},
      ],
      activites: [
        {name: 'Poker Tournament', desc: '$$$$$$$$$$$4'},
        {name: 'Minecraft Building Challenge', desc: 'Brrrrr'},
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
  margin-bottom: 12px;
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
</style>
