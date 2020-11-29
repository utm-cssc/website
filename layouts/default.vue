<template>
  <v-app class="myFonts">
    <cssc-nav></cssc-nav>
    <v-navigation-drawer v-model="drawerOpen" app right> </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
    <!-- 
    <div v-else>
      <cssc-nav-mobile></cssc-nav-mobile>
      <aside
        class="drawer transform top-0 right-0 fixed h-full overflow-auto z-40"
        :class="drawerOpen ? 'drawer-open' : 'drawer-closed'"
      >
        <nav-drawer />
      </aside>
    </div> -->
    <cssc-footer />
  </v-app>
</template>

<script>
import CsscNav from '@/components/CsscNav'
// import CsscNavMobile from '@/components/CsscNavMobile'
import CsscFooter from '@/components/CsscFooter'
// import NavDrawer from '@/components/NavDrawer.vue'

export default {
  components: {
    CsscNav,
    CsscFooter,
    // NavDrawer,
    // CsscNavMobile,
  },
  computed: {
    drawerOpen: {
      get() {
        return this.$store.state.drawerOpen
      },
      set(value) {
        this.$store.commit('setDrawerOpen', {drawerOpen: value})
      },
    },
    nuxtColorMode() {
      return this.$nuxt.$colorMode.value
    },
  },
  watch: {
    nuxtColorMode(value) {
      this.$nuxt.$vuetify.theme.dark = value == 'dark'
    },
  },
}
</script>

<style>
@import '@/assets/styles/customize-vuetify.css';

.drawer {
  width: 256px;
  transition: all 0.2s ease-out;
}

.drawer-open {
  margin-left: 0;
  opacity: 1;
}

.drawer-closed {
  margin-right: -343px;
  opacity: 0;
}

.theme--light.v-application {
  background: inherit;
}

.myFonts {
  font-family: 'Open Sans', sans-serif !important;
  color: var(--color-body) !important;
}

.v-application {
  background: var(--bg);
}

/* .v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 16px;
} */
</style>
