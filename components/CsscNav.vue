<template>
  <div>
    <v-app-bar app elevate-on-scroll flat>
      <nuxt-link
        class="flex align-center nav-home mr-5"
        to="/"
        @click.native="checked = false"
      >
        <img class="logo" src="/icons/cssc-logo-without-title.svg" />
        <span class="logo-text font-bold">UTM CSSC</span>
      </nuxt-link>
      <div class="nav-internal" v-if="$mq === 'lg' || $mq === 'xl'">
        <nuxt-link
          @click.native="checked = false"
          to="/resources"
          class="nav-link"
          >Resources</nuxt-link
        >
        <nuxt-link
          to="/calendar"
          class="nav-link mr-4"
          @click.native="checked = false"
        >
          Calendar
        </nuxt-link>
      </div>
      <div class="navbar-spacer"></div>
      <SearchBar class="mx-4" />

      <div class="nav-external ml-auto" v-if="$mq === 'lg' || $mq === 'xl'">
        <a href="https://discord.gg/SHwbmVg">
          <DiscordIcon class="nav-icon" />
        </a>
        <a href="https://github.com/utm-cssc" class="ml-4">
          <GithubIcon class="nav-icon" />
        </a>
      </div>
      <DarkModeButton class="mx-4" />
      <v-app-bar-nav-icon
        class="ml-auto"
        x-large
        @click="drawerOpen = !drawerOpen"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer disable-resize-watcher app v-model="drawerOpen" right>
      <nav-drawer />
    </v-navigation-drawer>
  </div>
</template>

<script>
import DiscordIcon from '@/static/icons/discord.svg?inline'
import GithubIcon from '@/static/icons/github.svg?inline'
import NavDrawer from '@/components/NavDrawer'
import SearchBar from '@/components/SearchBar'

export default {
  components: {GithubIcon, DiscordIcon, NavDrawer, SearchBar},

  data() {
    return {
      drawerOpen: false,
    }
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

.nav-link:hover {
  color: var(--color-primary-dark);
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

.nav-link-icon {
  min-width: 24px;
  height: 24px;
  width: 24px;
}

.nav-icon {
  height: 32px;
  width: 32px;
  fill: var(--color-primary);
}

.nav-icon:hover {
  fill: var(--color-primary-dark);
}

@media (max-width: 1200px) {
  .nav-link-icon {
    min-width: 20px;
    height: 20px;
    width: 20px;
  }

  .logo {
    height: 36px;
    width: 36px;
    margin-right: 16px;
  }

  .logo-text {
    font-size: 18px;
    color: var(--color-text);
    font-family: var(--font-heading);
    text-transform: uppercase;
  }
}
</style>
