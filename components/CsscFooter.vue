<template>
  <div class="container mt-5">
    <hr />
    <div class="g-header d-flex justify-content-between align-items-center">
      <div>
        <nuxt-link to="/">
          <img class="logo" src="/icons/cssc-logo-without-title.svg" />
        </nuxt-link>
      </div>
      <div class="location">
        UTM Hacklab DH2014
      </div>
      <div class="footer-links">
        <a href="https://discord.gg/SHwbmVg" class="footer-link">
          <DiscordIcon class="logo" />
        </a>
        <a href="https://www.instagram.com/utm.cssc" class="footer-link ml-2">
          <InstagramIcon class="logo" />
        </a>
        <a href="https://www.facebook.com/utmcssc/" class="footer-link ml-2">
          <FacebookIcon class="logo" />
        </a>
        <a href="https://github.com/utm-cssc" class="footer-link ml-2">
          <GithubIcon class="logo" />
        </a>
      </div>
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
}
</script>

<style scoped>
.g-header {
  height: 12vh;
  width: 100%;
}

.logo {
  height: 30px;
  width: 30px;
}

svg:hover {
  fill: var(--color-primary-dark);
}

.nav-link {
  font-size: 14px;
}

.footer-links {
  display: flex;
  font-size: 17px;
  justify-content: space-evenly;
}

hr {
  border-color: var(--color-body);
}

@media (max-width: 576px) {
  .location {
    font-size: 16px;
    margin-left: 20px;
  }

  .logo {
    height: 20px;
    width: 20px;
  }
}
</style>
