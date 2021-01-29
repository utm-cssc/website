<template>
  <v-app>
    <cssc-nav></cssc-nav>
    <v-main>
      <nuxt />
      <cssc-footer />
    </v-main>
  </v-app>
</template>

<script>
import CsscNav from '@/components/CsscNav'
import CsscFooter from '@/components/CsscFooter'

export default {
  components: {
    CsscNav,
    CsscFooter,
  },
  data() {
    return {
      drawerOpen: false,
    }
  },
  computed: {
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

.v-application {
  background: var(--bg);
  font-family: 'Open Sans', sans-serif !important;
  color: var(--color-body) !important;
}

/* .v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 16px;
} */
</style>
