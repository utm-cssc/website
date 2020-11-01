<template>
  <div>
    <Light class="logo light" v-if="isDark" @click="$colorMode.preference = 'light'" />
    <Dark class="logo" v-else @click="$colorMode.preference = 'dark'" />
  </div>
</template>

<script>
import Light from '../../static/svg/sun.svg?inline'
import Dark from '../../static/svg/moon.svg?inline'

export default {
  data() {
      return {
        colors: ['light', 'system', 'dark']
      }
  },
  computed: {
    isDark() {
      return this.$nuxt.$colorMode.value == 'dark'
    }
  },
  components: {
    Light,
    Dark
  }
}
</script>

<style scoped>
.logo {
  width: 35px;
  height: 35px;
  fill: var(--color-body);
  transition: all 0.3s ease;
}

svg:hover {
  fill: var(--color-primary-dark);
}
</style>