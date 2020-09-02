<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="on"
      placeholder="Search Resources"
      class="form-control"
    />
    <ul
    v-if="articles.length"
    class="z-10 absolute w-full flex-1 bg-white dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden search-dropdown">
      <li
      @click="clearSearchQuery"
      v-for="article of articles"
      :key="article.slug"
      >
        <NuxtLink :to="article.path">
        {{ article.slug }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      articles: [],
      focusIndex: -1
    }
  },
  methods: {
    clearSearchQuery () {
      this.searchQuery = ''
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('resources')
        .limit(4)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>

<style scoped>
.search-dropdown {
  list-style-position: inside;
  width: 200px;
}
</style>
