<template>
  <div class="search-engines-container">
    <a
      target="_blank"
      v-for="engine in searchEngines"
      :key="engine.name"
      v-b-tooltip.hover
      :title="`${engine.name} : ${query}`"
      :href="getQueryLink(engine.name)"
      class="mr-3 search-engine"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    >
      <img class="icon mt-0 mb-0" :src="`/icons/${engine.icon}`" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      default: '',
    },
  },
  methods: {
    getQueryLink(engine) {
      switch (engine) {
        case 'Duck Duck Go': {
          return `https://duckduckgo.com/?q=${this.query}&kp=-1&kl=us-en`
        }
        case 'Google': {
          return `https://duckduckgo.com/?q=${this.query +
            ' g!'}&kp=-1&kl=us-en`
        }
        case 'Youtube': {
          return `https://duckduckgo.com/?q=${this.query +
            ' yt!'}&kp=-1&kl=us-en`
        }
        case 'Wolfram': {
          return `https://duckduckgo.com/?q=${this.query +
            ' wa!'}&kp=-1&kl=us-en`
        }
      }
    },
  },
  data() {
    return {
      hovered: false,
      searchEngines: [
        {
          name: 'Duck Duck Go',
          icon: 'ddg.svg',
        },
        {
          name: 'Google',
          icon: 'google.svg',
        },
        {
          name: 'Youtube',
          icon: 'youtube.svg',
        },
        {
          name: 'Wolfram',
          icon: 'wolfram.svg',
        },
      ],
    }
  },
}
</script>

<style>
a {
  text-decoration: none !important;
}

.search-engines-container {
  margin-left: auto;
  float: right;
  display: flex;
}

.icon {
  width: 36px;
  height: 36px;
}
</style>
