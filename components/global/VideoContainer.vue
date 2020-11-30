<template>
  <div class="div-container">
    <div class="vid-container">
      <iframe
        :src="vidSrc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vidSrc: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.div-container {
  text-align: center;
}

.vid-container {
  padding: 56.25% 0 0 0;
  position: relative;
  margin: 0 10px 0 10px;
}
</style>
