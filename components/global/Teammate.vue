<template>
  <div
  class="flip
  team-container
  d-flex
  align-items-center
  justify-content-center
  col-12
  col-md-4
  col-xl-3
  my-3">
    <div class="front d-flex flex-col justify-content-between align-items-center">
      <div class="mt-3">
        <img :src="imgSrc" :alt="imgAlt" class="circle">
      </div>
      <div>
        <div class="name">{{ name }}</div>
        <div class="position text-center">{{ position }}</div>
      </div>
      <div class="d-flex mb-4">
        <DiscordIcon @click="copyToClipboard" v-b-tooltip.hover :title="isCopied" class="logo mr-3" />
        <a :href="emailAddress">
          <EmailIcon class="logo" />
        </a>
      </div>
    </div>
    <div class="back message text-center">
      {{ message }}
    </div>
  </div>
</template>

<script>
import DiscordIcon from '../../static/icons/discord.svg?inline'
import EmailIcon from '../../static/icons/email.svg?inline'

export default {
  components: { DiscordIcon, EmailIcon },
  data () {
    return { isCopied: 'Click to copy username' }
  },
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    message: {
      type: String
    },
    email: {
      type: String,
      required: true
    },
    discord: {
      type: String,
      required: true
    }
  },
  computed: {
    imgAlt () {
      return this.name + "'s Img"
    },
    emailAddress () {
      return 'mailto:' + this.email
    }
  },
  methods: {
    copyToClipboard (e) {
      const text = navigator.clipboard
        .writeText(this.discord)
        .then(() => {
          this.isCopied = 'Copied!'
          console.log(this.isCopied)
          setTimeout(() => {
            this.isCopied = 'Click to copy username'
          }, 5000)
        })
        .catch(() => {
          this.isCopied = 'Try Again!'
          setTimeout(() => {
            this.isCopied = 'Click to copy username'
          }, 1000)
        })
      console.log('Copy ' + text)
    }
  }
}
</script>

<style>
.flip {
  position: relative;
}

.front,
.back {
  display: block;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 0.5s;
  transition-property: transform, opacity;
}

.flip > .back {
  position: absolute;
  opacity: 0;
  width: 80%;
  height: 80%;
  transform: rotateY(-180deg);
}

.front {
  position: relative;
  min-height: 300px;
  transform: rotateY(0deg);
}

.flip:hover > .front {
  opacity: -1;
  transform: rotateY(180deg);
}

.flip:hover > .back {
  opacity: 1;
  transform: rotateY(0deg);
}

.team-container {
  min-height: 350px;
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
  line-height: 10px;
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

@media (max-width: 768px) {
  .team-container {
    min-height: auto;
  }
}
</style>
