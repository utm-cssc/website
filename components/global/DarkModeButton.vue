<template>
  <div>
    <LightIcon
      class="btn-dark-mode light"
      v-if="isDark"
      id="light-mode-icon"
      @click="$colorMode.preference = 'light'"
    />
    <DarkIcon
      class="btn-dark-mode"
      v-else
      id="dark-mode-icon"
      @click="$colorMode.preference = 'dark'"
    />
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
.btn-dark-mode {
  width: 32px;
  height: 32px;
  fill: var(--color-primary);
  transition: all 0.2s ease;
}

svg:hover {
  fill: var(--color-primary-dark);
}
</style>
