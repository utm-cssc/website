<template>
  <div class="container nav g-header pt-4 px-2 d-flex align-items-center">
    <div class="nav-header">
      <nuxt-link
        class="d-flex align-items-end ml-1"
        to="/"
        @click.native="checked = false"
      >
        <img class="logo mr-2" src="/icons/cssc-logo-without-title.svg" />
        <span class="logo-text">UTM CSSC</span>
      </nuxt-link>
    </div>
    <SearchBar class="mx-3" />

    <button
      class="z-50"
      type="button"
      aria-controls="nav-items"
      @click="toggleDrawer"
    >
      <img src="/icons/close.svg" v-show="drawerOpen" class="close-icon" />
      <img src="/icons/menu.svg" v-show="!drawerOpen" class="menu-icon" />
    </button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    },
  },
  computed: {
    ...mapState(['drawerOpen']),
  },
}
</script>

<style scoped>
.g-header {
  height: 12vh;
}

.logo {
  height: 48px;
  width: 48px;
  margin-right: 16px;
}

.logo-text {
  font-size: 26px;
  color: var(--color-primary);
  font-weight: 500;
  font-family: var(--font-heading);
  text-transform: uppercase;
}

a:hover {
  text-decoration: none;
}

.nav {
  width: 100%;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav-links {
  display: flex;
  align-items: center;
  float: right;
  margin-left: auto;
  font-size: 18px;
}

.nav-link {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  height: fit-content;
  font-size: 1.125rem;
  color: var(--color-body);
  font-weight: 500;
  font-family: var(--font-heading);
  text-transform: uppercase;
  transition: all 0.2s ease-out;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav > #nav-check {
  display: none;
}

@media (max-width: 768px) {
  .nav-link {
    font-size: 15px;
  }
}

@media (max-width: 992px) {
  .nav > .nav-btn {
    margin-left: auto;
    align-self: center;
    justify-self: end;
  }

  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
    border-radius: 8px;
    margin: 0;
  }

  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid var(--color-heading);
  }

  .nav-links {
    position: absolute;
    display: block;
    background: var(--bg);
    border-radius: 6px;
    transition: all 0.2s ease-out;
    overflow-y: hidden;
    top: 12vh;
    right: 8px;
  }

  .nav-link {
    display: block;
    width: 100%;
    padding-left: 16px;
  }

  .nav > #nav-check:not(:checked) ~ .nav-links {
    opacity: 0;
    z-index: -1;
  }

  .nav > #nav-check:checked ~ .nav-links {
    overflow-y: auto;
    opacity: 1;
    z-index: 2;
  }

  .nav-link:hover,
  .nav-link:active {
    letter-spacing: 0;
  }
}

.menu-icon {
  height: 36px;
  width: 36px;
  display: inline-block;
  z-index: 70;
}

.close-icon {
  height: 24px;
  width: 24px;
  display: inline-block;
  z-index: 70;
}
</style>
