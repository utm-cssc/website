<template>
  <div class="container nav g-header pt-4 px-2 flex align-items-center">
    <input id="nav-check" v-model="checked" type="checkbox"></input>
    <div class="nav-header">
      <nuxt-link
        class="d-flex align-items-center ml-1"
        to="/"
        @click.native="checked = false"
      >
        <img class="logo mr-2" src="/svg/cssc-logo-without-title.svg"></img>
        <span class="logo-text">UTM CSSC</span>
      </nuxt-link>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span />
        <span />
        <span />
      </label>
    </div>

    <div class="nav-links">
      <form class="form-inline my-2 my-lg-0">
        <ContentSearchBar />
      </form>
      <nuxt-link
        to="/resources"
        class="g-nav-link nav-link mr-4"
        @click.native="checked = false"
      >
        Resources
      </nuxt-link>
      <nuxt-link
        to="/blog"
        class="g-nav-link nav-link mr-4"
        @click.native="checked = false"
      >
        Blog
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false
    }
  }
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
</style>

<style>
.nav {
  width: 100%;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: var(--color-body);
  padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
  display: none;
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
  color: var(--color-primary-dark);
}

.nav > #nav-check {
  display: none;
}

@media (max-width: 768px) {
  .nav > .nav-btn {
    float: right;
    align-self: end;
    margin-left: auto;
  }

  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
    border-radius: 8px;
  }

  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }

  .nav-links {
    position: absolute;
    display: block;
    width: 42%;
    background-color: #333;
    border-radius: 6px;
    transition: all 0.2s ease-out;
    overflow-y: hidden;
    top: 50px;
    right: 50px;
  }

  .nav-link {
    display: block;
    width: 100%;
    padding-left: 16px;
  }

  .nav > #nav-check:not(:checked) ~ .nav-links {
    opacity: 0;
  }

  .nav > #nav-check:checked ~ .nav-links {
    overflow-y: auto;
    opacity: 1;
  }
}
</style>
