<template>
  <div class="nav-drawer p-5 bg-white">
    <div class="nav-internal flex-col pt-5 mt-5">
      <nuxt-link
        @click.native="toggleDrawer"
        to="/resources"
        class="drawer-link mr-1"
        >Resources</nuxt-link
      >
      <nuxt-link @click.native="toggleDrawer" to="/calendar" class="drawer-link"
        >Calendar</nuxt-link
      >
      <nuxt-link @click.native="toggleDrawer" to="/clubs" class="drawer-link"
        >Clubs</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    },
  },
}
</script>

<style>
.nav-drawer {
  height: 100vh;
  z-index: 40;
  border-left: solid 2px var(--color-primary);
}

.drawer-header {
  font-size: 22px;
  font-weight: 600;
}

#close-icon {
  width: 24px;
  height: 24px;
}

.drawer-icon {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.drawer-link {
  display: flex;
  padding: 12px 0;
  transition: all 0.3s ease-out;
}

.drawer-link:hover {
  display: flex;
  padding: 12px 6px;
  background: #fff;
  color: var(--color-primary-light);
}

.drawer-link:hover .drawer-icon {
  fill: var(--bg);
}
</style>
