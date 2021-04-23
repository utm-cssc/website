<template>
  <div class="nav">
    <a
      v-for="navItem in navItems"
      :key="navItem"
      class="navItem"
      :href="`#${navItem.toLowerCase()}`"
      >{{ navItem }}</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawerOpen: false,
      navItems: [
        'About',
        'Event Schedule',
        'Competitions',
        'Workshops',
        'Activities',
        'Prizes',
      ],
    }
  },
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
  border-radius: 25px !important;
  background-color: rgba(113, 112, 112, 1) !important;
  margin-bottom: 20px;
  padding: 20px;
}

.navItem {
  color: white;
  font-weight: 700;
  font-size: 20px;
}

.navItem:hover {
  color: #3e3e3e;
}
</style>
