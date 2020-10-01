<template>
  <div class="team-container col-12 col-md-6 col-xl-4">
    <div class="pt-4 d-flex align-items-center mb-2">
      <img :src="imgSrc" :alt="imgAlt" class="circle mr-4">
      <div>
        <div class="name">{{ name }}</div>
        <div class="position">{{ position }}</div>
        <div class="d-flex mt-2">
          <DiscordIcon @click="copyToClipboard" v-b-tooltip.hover :title="isCopied" class="logo mr-1" />
          <a :href="emailAddress">
            <EmailIcon class="logo" />
          </a>
        </div>
      </div>
    </div>
    <div class="message pb-4 pb-md-0">
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
  height: 30px;
  width: 30px;
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
