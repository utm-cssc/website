<template>
  <div>
    <LightIcon
      class="logo light"
      v-if="isDark"
      @click="$colorMode.preference = 'light'"
    />
    <DarkIcon class="logo" v-else @click="$colorMode.preference = 'dark'" />
  </div>
</template>

<script>
import LightIcon from '@/static/svg/sun.svg?inline'
import DarkIcon from '@/static/svg/moon.svg?inline'

export default {
  computed: {
    isDark() {
      return this.$nuxt.$colorMode.value == 'dark'
    },
  },
  components: {
    LightIcon,
    DarkIcon,
  },
}
</script>

<style scoped>
.logo {
  width: 32px;
  height: 32px;
  fill: var(--color-primary);
  transition: all 0.3s ease;
}

svg:hover {
  fill: var(--color-primary-dark);
}
</style>
