<template>
  <div class="container">
  <!-- Title -->
    <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
      <CenteredHero
        icon="../icons/cssc-logo-without-title.svg"
        title="Clubs"
        desc="Get involved in the community!"
        arrowLink="#top"
      />
    </div>
    <div id="top"></div>
    <Grid1X2
    v-for="club in clubs[0].clubsData"
    :key="club.name"
    :title="club.name"
    :desc="club.desc"
    :imgSrc="club.imgSrc"
    :button="club.button"
    :link="club.link"
    :reversed="club.reversed"
    />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const clubs = await $content('clubs').fetch()
    return { clubs }
  }
}
</script>
