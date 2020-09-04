<template>
  <div class="container nav g-header pt-4 flex">
    <div class="nav-footer">
      <nuxt-link
        class="d-flex pr-3 pt-1"
        to="/"
      >
        <img class="logo" src="/svg/cssc-logo-without-title.svg"></img>
      </nuxt-link>
    </div>
    <div class="footer-links mt-2">
      <a href="https://discord.gg/SHwbmVg" class="footer-link ml-2">Discord</a>
      <a href="https://www.instagram.com/utm.cssc" class="footer-link ml-2 mr-2">Instagram</a>
      <a href="https://www.facebook.com/utmcssc/" class="footer-link mr-2">Facebook</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollToTop: true
    }
  }
}
</script>
<style scoped>
.nav-footer {
  display: flex;
  justify-content: center;
}

.g-header {
  height: 12vh;
}

.nav {
  display: flex;
  flex-direction: column;
  align-content: center;
}

a:hover {
  text-decoration: none;
}

.logo {
  height: 30px;
  width: 30px;
}

.nav-link {
  font-size: 14px;
}

.footer-links {
  display: flex;
  font-size: 16px;
  justify-content: space-evenly;
}

.footer-link:hover {
  color: var(--color-primary);
}
</style>
