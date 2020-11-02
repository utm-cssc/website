<template>
  <div class="nav-drawer p-4 bg-white border-l-2 border-gray-600">
    <div class="nav-internal flex-col pt-5">
      <nuxt-link
        to="/resources"
        class="nav-link mr-4"
        @click.native="checked = false"
      >
        Resources
      </nuxt-link>
      <nuxt-link
        to="/ask-jack"
        class="nav-link mr-4"
        @click.native="checked = false"
      >
        Ask Jack
      </nuxt-link>
      <nuxt-link
        to="/calendar"
        class="nav-link mr-4"
        @click.native="checked = false"
      >
        Calendar
      </nuxt-link>
      <nuxt-link
        to="/clubs"
        class="nav-link mr-4"
        @click.native="checked = false"
      >
        MCS Clubs
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    },
  },
}
</script>

<style>
.nav-drawer {
  height: 100vh;
  z-index: 40;
}

#close-icon {
  width: 24px;
  height: 24px;
}
</style>
