<template>
  <div class="container">
    <section class="main">
      <TheShowNavBar />
      <TheShowHero />
      <div class="society-container">
        <div v-for="society in societies" :key="society.name" class="society">
          <a :href="society.link">
            <img
              class="society-img"
              :src="`/the-show/societies/${society.name}.png`"
            />
          </a>
        </div>
      </div>
      <TheShowCountdown />
    </section>
    <div>
      <a id="about" />
      <h1 class="section-title">About</h1>
      <div class="box-style">
        <div class="about-text-container">
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

      <div class="event-card" v-for="event in events" :key="event.name">
        <a :id="`${event.name.toLowerCase()}`" />
        <h1 class="section-title">{{ event.name }}</h1>
        <div class="box-style">
          <div class="contests-text-container">
            <TheShowGrid :items="event.hosting"></TheShowGrid>
          </div>
        </div>
      </div>

      <div>
        <a id="prizes" />
        <h1 class="section-title">Prizes</h1>
        <div class="box-style prize-container">
          <div
            v-for="prize in prizes"
            :key="prize.name"
            class="contests-text-container"
          >
            <div class="prizeName">{{ prize.name }}</div>
            <div class="prize-img-container">
              <img class="prize-img" :src="`/the-show/${prize.img}`" />
            </div>
          </div>
        </div>
        <div class="prize-additional">
          + Giftcards, Google Minis, Bose Speakers, Gaming Keyboards, Mice and
          MUCH MORE!
        </div>
      </div>

      <div>
        <div class="society-container">
          <div v-for="society in societies" :key="society.name">
            <a :href="society.link">
              <img
                class="society-img"
                :src="`/the-show/societies/${society.name}.png`"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
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
        {name: 'cssc', link: 'https://cssc.utm.utoronto.ca'},
        {name: 'dsc', link: 'https://discord.gg/8xKTpsv'},
        {name: 'mcss', link: 'https://discord.gg/5K3TuF7DkY'},
        {name: 'utm_robotics', link: 'https://discord.gg/bE4a3g4'},
        {name: 'utm_sam', link: 'http://utmsam.sa.utoronto.ca/'},
        {name: 'wisc', link: 'https://www.wiscutm.com/'},
        {name: 'whitevan', link: 'https://discord.gg/e4fCRDtuAa'},
        {name: 'artclub', link: ' https://discord.gg/TChtJQWFJR'},
      ],
      events: [
        {
          name: 'Competitions',
          hosting: [
            {name: 'Poker Tournament', img: 'poker.svg', link: ''},
            {
              name: 'Minecraft Building Challenge',
              img: 'minecraft.svg',
              link: '',
            },
            {
              name: 'Capture the Flag',
              img: 'ctf.svg',
              link: 'https://utmctf.tk',
            },
            {
              name: 'Competitive Programming',
              img: 'competitiveprogramming.svg',
              link:
                'https://docs.google.com/forms/d/e/1FAIpQLSe5sqtumrK6neFAps5jOpUY3bzopCHCkVhk7SjbWvXMpaIkUA/viewform',
            },
            {
              name: 'Comp-stantial Dilemma',
              img: 'csd.svg',
              link:
                'https://docs.google.com/forms/d/e/1FAIpQLSetNfcYBbnmuu4SHmBlIDN-7B1ULb5GpadAepyQ26DSumH4Rg/viewform',
            },
          ],
        },
        {
          name: 'Workshops',
          hosting: [
            {
              name: 'Keep it QL with GraphQL',
              img: 'graphql.svg',
              link: 'https://github.com/white-van/graphql-workshop',
            },
            {
              name: 'Kubernetes Workshop',
              img: 'kubernetes.svg',
              link: 'https://github.com/white-van/k8s-demo',
            },
            {
              name: 'Meditation and Mindfulness',
              img: 'meditation.svg',
              link: '',
            },
            {
              name: 'Intro to Artificial Intelligence/Machine Learning',
              img: 'aiml.svg',
              link: '',
            },
          ],
        },
        {
          name: 'Activities',
          hosting: [
            {
              name: 'Trivia Night (ft. MCS Profs!)',
              img: 'trivia.svg',
              link: '',
            },
            {name: 'Bob Ross MS Paint Night', img: 'paint.svg', link: ''},
            {name: 'Game Night', img: 'gamenight.svg', link: ''},
            {
              name: 'Infinity War (ft. Professors Mike Pawliuk & Ilir Dema)',
              img: 'infinity.svg',
              link:
                'https://docs.google.com/document/d/15xt5IhtrfdKMB-B4_lJJRZl6_-jWCaeRSMwV3U4nxN8/edit',
            },
            {name: 'Lightning Talks', img: 'lightningtalk.svg', link: ''},
          ],
        },
      ],
      prizes: [
        {name: 'Nintendo Switch', img: 'switch.svg'},
        {name: 'Go Pro Hero 7', img: 'gopro.svg'},
        {name: 'Snowball iCE', img: 'mic.svg'},
        {name: 'Airpods', img: 'airpods.svg'},
      ],
    }
  },
}
</script>

<style scoped>
.society-img {
  height: 90px;
  width: 90px;
}

.society-container {
  background-color: #717070;
  border-radius: 25px;
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;
}

@media (max-width: 950px) {
  .society-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .society {
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .society-img {
    width: 100%;
    height: 100%;
  }
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
  color: white;
  padding: 20px;
  margin: 0px;
}

.about-text-container,
.contests-text-container {
  margin: 2em;
}

.about-text-container {
  font-weight: 400;
  font-size: 30px;
}

.event-card {
  margin-bottom: 20px !important;
}

.prize-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  vertical-align: middle;
  margin-top: 20px;
}

@media (max-width: 950px) {
  .prize-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}

.prizeName {
  text-align: center;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 30px;
}

.prize-additional {
  text-align: center;
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 30px;
}

.prize-img-container {
  display: block;
  margin: 0 auto;
  width: 100%;
}
</style>
