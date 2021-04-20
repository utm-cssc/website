<template>
  <div class="hero">
    <img class="show-hero-img" src="/the-show/hero.svg" />
  </div>
</template>

<script>
export default {
  name: 'TheShowHero',
}
</script>

<style scoped>
.hero {
  text-align: center !important;
}

.show-hero-img {
  animation: bobble 2.5s ease-out infinite;
  padding: 0px 50px 50px 50px;
  width: 70%;
  margin: auto;
}

@keyframes bobble {
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-out;
  }

  25% {
    transform: translate3d(16px, 24px, 0px);
    animation-timing-function: ease-out;
  }

  50% {
    transform: translate3d(0px, 24px, 0px);
    animation-timing-function: ease-out;
  }

  75% {
    transform: translate3d(16px, 0px, 0px);
    animation-timing-function: ease-out;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-out;
  }
}
</style>
