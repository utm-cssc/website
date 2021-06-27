<template>
  <div class="container">
    <!-- Title -->
    <div class="mt-5 flex flex-column justify-center align-center">
      <CenteredHero
        icon="../icons/cssc-logo-blue.svg"
        alt="CSSC Logo"
        title="Clubs"
        desc="Get involved in the community!"
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
  async asyncData({$content, params, error}) {
    const clubs = await $content('clubs').fetch()
    console.log(clubs)
    return {clubs: clubs[0].clubs}
  },
}
</script>

<style>
.clubs-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
