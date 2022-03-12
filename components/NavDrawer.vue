<template>
  <v-list dense nav>
    <v-list-item v-for="item in navItems" :key="item.title" :to="item.link">
      <v-list-item-content>
        <div class="drawer-link">
          {{ item.title }}
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          title: 'Learn More',
          link: '/learn-more',
        },
        {
          title: 'Resources',
          link: '/resources',
        },
        {
          title: 'Ask Jack',
          link: '/ask-jack/',
        },
        {
          title: 'Open Source',
          link: '/projects',
        },
        {
          title: 'Course Manager',
          link: '/course-manager',
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
          title: 'Past Teams',
          link: '/past-teams',
        },
        {
          title: 'Documentation',
          link: '/docs',
        },
        {
          title: 'Contributing',
          link: '/contributing',
        },
      ],
    }
  },
}
</script>

<style scoped>
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
