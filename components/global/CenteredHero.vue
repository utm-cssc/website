<template>
  <div class="container hero grid place-items-center">
    <div class="mt-3 mt-md-4 mt-lg-5 row flex flex-column align-center">
      <img :src="icon" alt="CSSC Icon" class="hero-img" />
      <div class="text-center">
        <h1 class="cssc-heading">
          {{ title }}
        </h1>
        <p class="hero-tag">
          {{ desc }}
        </p>
        <p class="hero-tag hero-additional">
          {{ additionalInfo }}
        </p>
      </div>
    </div>
    <div class="mt-4 flex justify-center flex-wrap">
      <v-btn
        v-if="button1 && button1.link && button1.label"
        :href="button1.link"
        class="mr-4 btn-cta-alt mb-3"
        x-large
      >
        <img v-if="button1.icon" class="btn-icon mx-2" :src="button1.icon" />
        {{ button1.label }}
      </v-btn>
      <v-btn
        v-if="button2 && button2.link && button2.label"
        :href="button2.link"
        variant="outline-primary"
        class="mr-4 btn-cta mb-3"
        x-large
      >
        <img v-if="button2.icon" class="btn-icon mx-2" :src="button2.icon" />
        {{ button2.label }}
      </v-btn>
      <v-btn
        v-if="button3 && button3.link && button3.label"
        :href="button3.link"
        variant="outline-primary"
        class="mr-4 btn-cta-alt mb-3"
        x-large
      >
        <img v-if="button3.icon" class="btn-icon mx-2" :src="button3.icon" />
        {{ button3.label }}
      </v-btn>
      <v-btn
        v-if="button4 && button4.link && button4.label"
        :href="button4.link"
        variant="outline-primary"
        class="mr-4 btn-cta mb-3"
        x-large
      >
        <img v-if="button4.icon" class="btn-icon mx-2" :src="button4.icon" />
        {{ button4.label }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    desc: String,
    additionalInfo: String,
    title: String,
    button1: {
      label: {
        type: String,
        default: '',
      },
      link: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
    },
    button2: {
      label: {
        type: String,
        default: '',
      },
      link: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
    },
    button3: {
      label: {
        type: String,
        default: '',
      },
      link: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
    },
    button4: {
      label: {
        type: String,
        default: '',
      },
      link: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
    },
  },
  computed: {
    gtmd() {
      if (this.$mq === 'sm' || this.$mq === 'xs' || this.$mq === 'md') {
        return 'md'
      }
      return 'lg'
    },
  },
}
</script>

<style scoped>
.hero {
  min-height: 88vh;
}

.btn-cta {
  background-color: #5d7493 !important;
  border-color: #5d7493 !important;
  outline: none;
  font-size: 1.42rem;
  color: #fff;
}

.btn-cta:active {
  background-color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
}

.btn:hover,
.btn-cta:hover {
  color: var(--color-primary-light) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-primary) !important;
}

.btn-cta-alt {
  color: var(--color-heading) !important;
  background-color: var(--bg) !important;
  border-color: var(--color-heading) !important;
  outline: none;
  font-size: 1.42rem;
}

.g-btn-cta-alt:hover {
  background-color: var(--color-primary) !important;
  color: #fff !important;
}

.hero-tag {
  font-size: 40px;
  color: var(--color-text);
  letter-spacing: -0.032em;
  line-height: 1.5;
}

.hero-additional {
  font-size: 30px;
}

.btn-icon {
  width: 24px;
  height: 24px;
}

.hero-img {
  height: 148px;
}

#arrow {
  bottom: 50px;
  width: 75px;
}

@media screen and (max-width: 992px) {
  .hero-tag {
    font-size: 25px;
  }

  .hero-img {
    width: 100px;
  }

  .btn-cta-alt {
    font-size: 16px;
  }

  .btn-cta {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .hero-tag {
    font-size: 20px;
  }

  #arrow {
    width: 50px;
    bottom: 25px;
  }
}
</style>
