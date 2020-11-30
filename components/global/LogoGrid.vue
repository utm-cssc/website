<template>
  <div>
    <div class="flex flex-wrap horizontal-grid">
      <span v-for="logo in logos" :key="logo">
        <v-icon size="65px" color="var(--color-primary)">mdi-{{ logo }}</v-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logos: Array,
  },
}
</script>

<style scoped>
.image-property {
  position: relative;
  padding-right: 5px;
}
</style>
