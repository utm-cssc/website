<template>
  <v-app class="myFonts">
    <cssc-nav v-if="$mq === 'lg' || $mq === 'xl'"></cssc-nav>
    <div v-else>
      <cssc-nav-mobile></cssc-nav-mobile>
      <aside
        class="drawer transform top-0 right-0 fixed h-full overflow-auto z-40"
        :class="drawerOpen ? 'drawer-open' : 'drawer-closed'"
      >
        <nav-drawer />
      </aside>
    </div>
    <nuxt />
    <cssc-footer />
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
import CsscNav from '@/components/CsscNav'
import CsscNavMobile from '@/components/CsscNavMobile'
import CsscFooter from '@/components/CsscFooter'
import NavDrawer from '@/components/NavDrawer.vue'

export default {
  components: {
    CsscNav,
    CsscFooter,
    NavDrawer,
    CsscNavMobile,
  },
  data() {
    return {
      nav: false,
    }
  },
  computed: {
    ...mapState(['drawerOpen']),
    nuxtColorMode() {
      return this.$nuxt.$colorMode.value
    },
  },
  watch: {
    nuxtColorMode(value) {
      console.log(value)
      this.$nuxt.$vuetify.theme.dark = value == 'dark'
      console.log(this.$nuxt.$vuetify.theme.dark)
    },
  },
}
// /* eslint-disable */
// export default {
//   created () {
//     // eslint-disable-next-line
//     document.addEventListener('keyup', (e) => {
//       if (e.key === 'd') {
//         // eslint-disable-next-line
//         [].forEach.call(document.querySelectorAll('*'), function (a) {
//           a.style.outline =
//             '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
//         })
//       }
//     })
//   }
// }
</script>

<style>
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

.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 16px;
}
</style>
