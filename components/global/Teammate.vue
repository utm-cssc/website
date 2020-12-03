<template>
  <div
    class="flip flex align-center justify-center my-3 mx-3"
    :class="{flipping: isClicked}"
  >
    <div class="front card flex flex-col justify-between align-center">
      <div class="mt-5 pointer mb-4" @click="isClicked = !isClicked">
        <img :src="imgSrc" :alt="imgAlt" class="circle" />
      </div>
      <div class="pointe mb-5" @click="isClicked = !isClicked">
        <div class="name text-center">{{ name }}</div>
        <div class="position text-center">{{ position }}</div>
      </div>
      <div class="flex mb-4">
        <v-tooltip top>
          <template v-slot:activator="{on, attrs}">
            <DiscordIcon
              v-bind="attrs"
              v-on="on"
              @click="copyToClipboard"
              class="logo mr-3 pointer"
            />
          </template>
          <span>{{ isCopied }}</span>
        </v-tooltip>
        <a :href="emailAddress">
          <EmailIcon class="logo mr-3" />
        </a>
        <a v-if="linkedin" :href="linkedin">
          <LinkedinIcon class="logo" />
        </a>
      </div>
    </div>
    <div
      class="card back message text-center pointer"
      @click="isClicked = !isClicked"
    >
      <p class="px-3 py-2">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import DiscordIcon from '../../static/icons/discord.svg?inline'
import EmailIcon from '../../static/icons/email.svg?inline'
import LinkedinIcon from '../../static/icons/linkedin.svg?inline'

export default {
  components: {DiscordIcon, EmailIcon, LinkedinIcon},
  data() {
    return {
      isCopied: 'Click to copy username',
      isClicked: false,
    }
  },
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    discord: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
    },
  },
  computed: {
    imgAlt() {
      return this.name + "'s Img"
    },
    emailAddress() {
      return 'mailto:' + this.email
    },
  },
  methods: {
    copyToClipboard(e) {
      navigator.clipboard
        .writeText(this.discord)
        .then(() => {
          this.isCopied = 'Copied!'
          setTimeout(() => {
            this.isCopied = 'Copy username'
          }, 5000)
        })
        .catch(() => {
          this.isCopied = 'Try Again!'
          setTimeout(() => {
            this.isCopied = 'Copy username'
          }, 1000)
        })
    },
  },
}
</script>

<style scoped>
.team-container {
  width: 250px;
  min-height: 350px;
  background-color: var(--bg);
}

.pointer {
  cursor: pointer;
}

.flip {
  position: relative;
  max-width: 250px;
}

.front,
.back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.front,
.flip > .back {
  display: flex;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;
  background-color: var(--bg);
}

.flip > .back {
  position: absolute;
  opacity: 0;
  z-index: 1;
  height: 80%;
  transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
}

.front {
  position: relative;
  width: 250px;
  min-height: 350px;
  transform: rotateY(0deg);
  background-color: var(--bg);
}

.flipping > .front {
  opacity: -1;
  -ms-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.flipping > .back {
  opacity: 1;
  z-index: 1;
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.card {
  min-height: 343px;
  border-radius: 12px;
  box-shadow: 7px 0 29px 0 rgba(0, 0, 0, 0.19);
}

.circle {
  border-radius: 50%;
  width: 120px;
  height: 120px;
}

.name {
  font-weight: 700;
}

.position {
  font-style: italic;
  font-size: 15px;
}

.message {
  font-size: 16px;
}

.logo {
  height: 35px;
  width: 35px;
}

svg:hover {
  fill: var(--color-primary-dark);
}
</style>
