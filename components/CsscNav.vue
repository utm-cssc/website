<template>
  <div>
    <v-app-bar app elevate-on-scroll flat>
      <nuxt-link
        class="flex align-center nav-home mr-5"
        to="/"
        @click.native="checked = false"
      >
        <img
          class="logo"
          src="/logos/cssc-logo-blue-no-text.png"
          alt="CSSC Logo"
        />
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
        <a aria-label="discord" href="https://cssc.utm.utoronto.ca/discord">
          <DiscordIcon id="header-discord" class="nav-icon" />
        </a>
        <a
          aria-label="cssc github"
          href="https://github.com/utm-cssc"
          class="ml-4"
        >
          <GithubIcon class="nav-icon" />
        </a>
        <a
          aria-label="instagram"
          href="https://www.instagram.com/utm.cssc"
          class="ml-4"
        >
          <InstagramIcon class="nav-icon" />
        </a>
      </div>
      <DarkModeButton class="mx-4" />
      <v-app-bar-nav-icon
        class="ml-auto"
        x-large
        aria-label="Toggle Drawer"
        @click="drawerOpen = !drawerOpen"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      temporary
      disable-resize-watcher
      v-model="drawerOpen"
      fixed
      right
    >
      <nav-drawer />
    </v-navigation-drawer>
  </div>
</template>

<script>
import DiscordIcon from '~/static/icons/discord.svg?inline'
import GithubIcon from '~/static/icons/github.svg?inline'
import InstagramIcon from '~/static/icons/instagram.svg?inline'
import NavDrawer from '~/components/NavDrawer'

export default {
  components: {GithubIcon, DiscordIcon, NavDrawer, InstagramIcon},

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
  color: var(--color-secondary);
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
