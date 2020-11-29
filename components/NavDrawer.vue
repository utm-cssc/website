<template>
  <v-list dense nav>
    <v-list-item v-for="item in navItems" :key="item.title" link>
      <v-list-item-content>
        <v-list-item-title>
          <nuxt-link
            @click.native="toggleDrawer"
            :to="item.link"
            class="drawer-link mr-1"
            >{{ item.title }}</nuxt-link
          >
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
  <!-- <div class="nav-drawer p-5 bg-white">
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
        >MCS Clubs</nuxt-link
      >
      <nuxt-link @click.native="toggleDrawer" to="/ask-jack" class="drawer-link"
        >Ask Jack</nuxt-link
      >
      <nuxt-link
        @click.native="toggleDrawer"
        to="/course-manager"
        class="drawer-link"
        >Course Manager</nuxt-link
      >
      <nuxt-link @click.native="toggleDrawer" to="/faq" class="drawer-link"
        >FAQ</nuxt-link
      >
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          title: 'Resources',
          link: '/resources',
        },
        {
          title: 'Calendar',
          link: '/calendar',
        },
        {
          title: 'Clubs',
          link: '/clubs',
        },
        {
          title: 'Ask Jack',
          link: '/ask-jack',
        },
        {
          title: 'Course Manager',
          link: '/course-manager',
        },
        {
          title: 'FAQ',
          link: '/faq',
        },
      ],
    }
  },
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
  padding: 10px 0;
  transition: all 0.2s ease-out;
  font-size: 18px;
}

.drawer-link:hover {
  display: flex;
  padding: 12px 6px;
  color: var(--color-primary-light);
}

.drawer-link:hover .drawer-icon {
  fill: var(--bg);
}
</style>
