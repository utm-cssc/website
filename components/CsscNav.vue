<template>
  <div class="container nav pt-4 px-2 flex align-center z-30">
    <nuxt-link
      class="flex align-center nav-home mr-5"
      to="/"
      @click.native="checked = false"
    >
      <img class="logo" src="/icons/cssc-logo-without-title.svg" />
      <span class="logo-text">UTM CSSC</span>
    </nuxt-link>
    <div class="nav-internal">
      <nuxt-link @click.native="checked = false" to="/vision" class="nav-link"
        >Resources</nuxt-link
      >
      <nuxt-link
        @click.native="checked = false"
        to="/apprentice"
        class="nav-link"
        v-if="$mq === 'lg' || $mq === 'xl'"
        >Calendar</nuxt-link
      >
    </div>
    <div class="navbar-spacer"></div>
    <div class="nav-external ml-auto">
      <SearchBar class="mx-4" />
      <a href="https://discord.gg/SHwbmVg" class="footer-link">
        <DiscordIcon class="nav-icon" />
      </a>
      <a href="https://www.instagram.com/utm.cssc" class="footer-link ml-4">
        <InstagramIcon class="nav-icon" />
      </a>
      <a href="https://www.facebook.com/utmcssc/" class="footer-link ml-4">
        <FacebookIcon class="nav-icon" />
      </a>
      <a href="https://github.com/utm-cssc" class="footer-link ml-4">
        <GithubIcon class="nav-icon" />
      </a>
      <DarkModeButton class="mx-4 d-none d-lg-block d-xl-block" />
    </div>
  </div>
</template>

<script>
import DiscordIcon from '../static/icons/discord.svg?inline'
import InstagramIcon from '../static/icons/instagram.svg?inline'
import FacebookIcon from '../static/icons/facebook.svg?inline'
import GithubIcon from '../static/icons/github.svg?inline'
export default {
  components: {GithubIcon, DiscordIcon, InstagramIcon, FacebookIcon},

  data() {
    return {
      checked: false,
    }
  },
}
</script>

<style scoped>
.nav {
  height: 12vh;
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
    font-weight: 500;
    font-family: var(--font-heading);
    text-transform: uppercase;
  }
}
</style>
