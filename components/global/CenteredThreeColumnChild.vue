<template>
  <div class="mb-3 mt-4 flex-column align-items-center">
    <img
      v-if="icon"
      :class="{'round-photo': rounded}"
      class="mx-auto col-icon"
      :src="icon"
    />
    <h3 class="my-3 title">
      {{ title }}
    </h3>
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
    desc: String,
    rounded: Boolean,
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
</style>
