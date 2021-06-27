<template>
  <div class="mb-3 mt-4 flex-column align-items-center">
    <img
      v-if="icon"
      :class="{'round-photo': rounded}"
      class="mx-auto col-icon"
      :src="icon"
      :alt="alt"
    />
    <h2 class="my-3 title">
      {{ title }}
    </h2>
    <p class="desc">
      {{ desc }}
    </p>
    <div class="d-flex justify-content-center">
      <v-btn
        v-if="button && button.link && button.label"
        :href="button.link"
        large
        color="primary"
      >
        <img v-if="button.icon" class="btn-icon mx-2" :src="button.icon" />
        {{ button.label }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    desc: String,
    rounded: Boolean,
    alt: String,
    button: {
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
}
</script>

<style scoped>
.title {
  font-size: 30px;
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.05;
  text-align: center;
}

.col-icon {
  height: 172px;
}

.round-photo {
  border-radius: 50%;
}

.desc {
  font-size: 20px;
  line-height: 1.5;
}

.btn-cta {
  background-color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
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
</style>
