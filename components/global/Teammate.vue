<template>
<!-- Precondition: To use this component with responsivity please use a div with class d-flex and flex-wrap -->
  <div
    class="flip
    d-flex
    align-items-center
    justify-content-center
    my-3
    mx-3"
    :class="{flipping: isClicked}"
    >
    <div
      class="front
      card
      d-flex
      flex-col
      justify-content-between
      align-items-center"
    >
      <div class="mt-3 pointer" @click="isClicked = !isClicked">
        <img :src="imgSrc" :alt="imgAlt" class="circle">
      </div>
      <div class="pointer" @click="isClicked = !isClicked">
        <div class="name text-center">{{ name }}</div>
        <div class="position text-center">{{ position }}</div>
      </div>
      <div class="d-flex mb-4">
        <DiscordIcon
          @click="copyToClipboard"
          v-b-tooltip.hover
          :title="isCopied"
          class="logo mr-3 pointer"
        />
        <a :href="emailAddress">
          <EmailIcon class="logo mr-3" />
        </a>
        <a :href="linkedin">
          <LinkedinIcon class="logo" />
        </a>
      </div>
    </div>
    <div
      class="card back message text-center pointer"
      @click="isClicked = !isClicked">
      <p class="px-3 py-2">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import DiscordIcon from '../../static/icons/discord.svg?inline'
import EmailIcon from '../../static/icons/email.svg?inline'
import LinkedinIcon from '../../static/icons/linkedin.svg?inline'

export default {
  components: { DiscordIcon, EmailIcon, LinkedinIcon },
  data () {
    return {
      isCopied: 'Click to copy username',
      isClicked: false
    }
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
    },
    linkedin: {
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
      navigator.clipboard
        .writeText(this.discord)
        .then(() => {
          this.isCopied = 'Copied!'
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
    }
  }
}
</script>

<style>
  .team-container {
    width: 250px;
    min-height: 350px;
  }

  .pointer {
    cursor: pointer;
  }

  .flip {
    position: relative;
  }

  .front,
  .flip > .back {
    display: block;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 0.5s;
    transition-property: transform, opacity;
  }

  .flip > .back {
    position: absolute;
    opacity: 0;
    z-index: -1;
    width: 250px;
    height: 80%;
    transform: rotateY(-180deg);
  }

  .front {
    position: relative;
    width: 250px;
    min-height: 350px;
    transform: rotateY(0deg);
  }

  .flipping > .front {
    opacity: -1;
    transform: rotateY(180deg);
  }

  .flipping > .back {
    opacity: 1;
    z-index: 1;
    transform: rotateY(0deg);
  }

  .card {
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
