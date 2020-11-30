<template>
  <div class="container nav pt-4 px-4 flex align-center">
    <nuxt-link
      class="flex align-center nav-home mr-5"
      to="/"
      @click.native="checked = false"
    >
      <img class="logo" src="/icons/cssc-logo-without-title.svg" />
    </nuxt-link>
    <SearchBar class="mx-auto search" />
    <dark-mode-button class="mx-4" />

    <div class="toggle-icon ml-5">
      <close-icon v-if="drawerOpen" class="close-icon"></close-icon>
      <menu-icon v-if="!drawerOpen" class="menu-icon"></menu-icon>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import MenuIcon from '@/static/icons/menu.svg?inline'
import CloseIcon from '@/static/icons/close.svg?inline'
import DarkModeButton from '@/components/global/DarkModeButton'

export default {
  components: {
    MenuIcon,
    CloseIcon,
    DarkModeButton,
  },
  data() {
    return {
      checked: false,
    }
  },
  computed: {
    ...mapState(['drawerOpen']),
  },
}
</script>

<style scoped>
.nav {
  color: #efefef;
  position: relative;
}

.nav-home {
  max-width: max-content;
}

.navbar-spacer {
  flex-grow: 1;
  max-width: 72px;
}

.logo {
  height: 48px;
  width: 48px;
  margin-right: 16px;
}

.logo-text {
  font-size: 22px;
  color: var(--color-text);
  font-weight: 500;
  font-family: var(--font-heading);
  text-transform: uppercase;
}

.nav-link {
  display: inline-block;
  text-decoration: none;
  height: fit-content;
  font-size: 22px;
  padding: 8px;
}

@media (max-width: 1200px) {
  .nav-link {
    font-size: 18px;
  }
}

.nav-internal {
  display: flex;
}

.icon-label-link {
  display: inline-flex;
  align-items: center;
}

.nav-external {
  display: flex;
  align-items: center;
  position: relative;
}

.donate-menu {
  right: 0;
  top: 6vh;
  transition: all 1s ease-out;
  opacity: 0;
  width: min-content;
}

.donate-link {
  background: #efefef;
  color: var(--color-bg);
  fill: var(--color-bg);
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 232px;
}

.donate-link:hover {
  background: var(--color-bg);
  color: #efefef;
  fill: #efefef;
  cursor: pointer;
}

#donate:hover {
  cursor: pointer;
}

#donate:hover .donate-menu {
  display: block;
  opacity: 1;
}

.donate-icon {
  height: 24px;
  width: 24px;
}

.donate-link:hover .donate-icon {
  fill: #fff;
}

.nav-link-icon {
  min-width: 24px;
  height: 24px;
  width: 24px;
}

.nav-icon {
  height: 32px;
  width: 32px;
}
</style>

<style scoped>
.menu-icon {
  height: 36px;
  width: 36px;
  display: inline-block;
  z-index: 70;
}

.close-icon {
  height: 24px;
  width: 24px;
  z-index: 70;
  display: inline-block;
}

.toggle-icon {
  width: max-content;
  height: max-content;
  z-index: 50;
}

button:focus {
  outline: none;
}
</style>
