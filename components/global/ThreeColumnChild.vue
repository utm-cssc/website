<template>
  <div class="mb-3">
    <div v-if="icon" class="mb-3 d-flex align-middle icon-size">
      <img :src="icon" class="col-icon">
    </div>
    <p class="mb-2 mt-4 title">
      {{ title }}
    </p>
    <p class="desc">
      {{ desc }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    desc: String
  }
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
  height: 96px;
}

.desc {
  font-size: 20px;
  line-height: 1.5;
}

.icon-size {
  width: 96px;
  height: 96px;
}
</style>
