<template>
  <div>
    <v-app-bar app elevate-on-scroll flat>
      <nuxt-link
        class="flex align-center nav-home mr-5"
        to="/"
        @click.native="checked = false"
      >
        <img class="logo" src="/icons/cssc-logo-without-title.svg" />
        <span class="logo-text font-bold">GET TICKETS</span>
      </nuxt-link>
      <div class="nav-internal" v-if="$mq === 'lg' || $mq === 'xl'">
        <a>About</a>
        <a>Competitions</a>
        <a>Workshops</a>
        <a>Activities</a>
        <a>Contests</a>
        <a>Prizes</a>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
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
