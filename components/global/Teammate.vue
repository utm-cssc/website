<template>
  <div
    class="flip flex align-center justify-center my-3 mx-3"
    :class="{flipping: isClicked}"
  >
    <div
      class="front card flex flex-col justify-between align-center"
      @click="isClicked = !isClicked"
    >
      <div class="mt-5 pointer mb-4">
        <v-tooltip bottom v-if="website">
          <template v-slot:activator="{on, attrs}">
            <a :href="website" target="_blank" v-bind="attrs" v-on="on">
              <img
                :src="imgSrc"
                :alt="imgAlt"
                class="circle"
                @click="clickPersonalSite"
              />
            </a>
          </template>
          <span>{{ websiteTooltip }}</span>
        </v-tooltip>
        <a :href="website" target="_blank" v-else>
          <img
            :src="imgSrc"
            :alt="imgAlt"
            class="circle"
            @click="clickPersonalSite"
          />
        </a>
      </div>
      <div class="pointe mb-5">
        <div class="name text-center">{{ name }}</div>
        <div class="position text-center">{{ position }}</div>
      </div>
      <div class="flex mb-4">
        <v-tooltip v-if="discord !== undefined" top>
          <template v-slot:activator="{on, attrs}">
            <DiscordIcon
              v-bind="attrs"
              v-on="on"
              aria-label="Copy Discord name"
              :id="appendName('-discord-icon')"
              @click="copyToClipboard"
              class="logo mr-3 pointer"
            />
          </template>
          <span>{{ isCopied }}</span>
        </v-tooltip>
        <span>
          <a :aria-label="appendName('Email')" :href="emailAddress">
            <EmailIcon class="logo mr-3" :id="appendName('-email-icon')" />
          </a>
        </span>
        <span>
          <a
            v-if="linkedin"
            :aria-label="appendName('Linkedin')"
            :href="linkedin"
          >
            <LinkedinIcon class="logo" :id="appendName('-linkedin-icon')" />
          </a>
        </span>
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
      websiteTooltip: 'Click to visit personal website',
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
    },
    linkedin: {
      type: String,
    },
    website: {
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
    appendName() {
      return suffix => {
        return `${this.name}${suffix}`
      }
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
      e.stopPropagation()
    },
    clickPersonalSite(e) {
      e.stopPropagation()
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
  height: 100%;
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
  transition: transform 0.3s;
  cursor: pointer;
}

.front:hover {
  transform: perspective(600px) rotateY(30deg);
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
