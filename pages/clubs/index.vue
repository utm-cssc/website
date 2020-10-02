<template>
  <div class="container">
  <!-- Title -->
    <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
      <CenteredHero
        icon="../icons/cssc-logo-without-title.svg"
        title="Clubs"
        desc="Representation of all clubs"
        arrowLink="#top"
      />
    </div>
    <div id="top"></div>
    <Grid1X2
    v-for="club in clubsDataStore[0].clubsData"
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
    const clubsDataStore = await $content('clubs').fetch()
    return { clubsDataStore }
  }
}
</script>
