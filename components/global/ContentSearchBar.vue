<template>
  <div>
    <b-form-input
      v-model="searchQuery"
      type="search"
      autocomplete="on"
      placeholder="Search Resources"
      class="form-control"
      list="my-list-id"
    />
    <datalist
    id="my-list-id"
    v-if="articles.length"
    class="z-10 absolute w-full flex-1 bg-white dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden search-dropdown">
      <option
      class="px-2 search-item"
      @click="clearSearchQuery(article)"
      v-for="article of articles"
      :key="article.path"
      >
        <NuxtLink :to="article.path">
        {{ article.slug }}
        </NuxtLink>
      </option>
    </datalist>
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
    clearSearchQuery (article) {
      this.$router.push(article.path)
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

.search-item {
  color: var(--color-primary);
  display: block;
  cursor: pointer;
}

.search-item:hover {
  color: var(--color-primary-dark);
  background-color: rgba(0, 0, 0, 0.2);
  text-decoration: none;
}

</style>
