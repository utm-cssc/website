<template>
  <div class="nav">
    <a
      v-for="navItem in navItems"
      :key="navItem"
      class="navItem"
      :href="`${navItem.link}`"
      >{{ navItem.name }}</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawerOpen: false,
      navItems: [
        {name: 'About', link: '#about'},
        {name: 'Schedule', link: '/the-show/schedule.pdf'},
        {name: 'Competitions', link: '#competitions'},
        {name: 'Workshops', link: '#workshops'},
        {name: 'Activities', link: '#activities'},
        {name: 'Prizes', link: '#prizes'},
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
  margin-bottom: 15px;
  padding: 15px;
}

.navItem {
  color: white;
  font-weight: 700;
  font-size: 20px;
}

.navItem:hover {
  color: #3e3e3e;
}

@media (max-width: 950px) {
  .nav {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
