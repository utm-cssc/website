<template>
  <div class="container">
    <!-- Title -->
    <div
      class="mt-5 d-flex flex-column justify-content-center align-items-center"
    >
      <CenteredHero
        icon="../icons/cssc-logo-without-title.svg"
        title="Clubs"
        desc="Get involved in the community!"
        arrowLink="#top"
      />
    </div>
    <div id="top"></div>
    <div class="clubs-cards-container">
      <ClubCard v-for="club in clubs" :key="club.name" :club="club" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const clubs = await $content('clubs').only('body').fetch()
    return { clubs: clubs[0].body }
  }
}
</script>

<style>
.clubs-cards-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
