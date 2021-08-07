<template>
  <v-autocomplete
    solid
    solo
    hide-details="true"
    prepend-inner-icon="mdi-magnify"
    hide-no-data
    append-icon=""
    label="Explore Our Resources & Glossary"
    :search-input.sync="searchQuery"
    :items="searchResults"
    :loading="searching"
    no-filter
    @change="handleSelect"
    clearable
  >
    <template v-slot:item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>
      <template v-else>
        <v-list-item-content>
          <v-list-item-title v-html="data.item.text"></v-list-item-title>
        </v-list-item-content>
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searching: false,
      selectedSearchEntry: null,
      searchEntries: [],
    }
  },
  computed: {
    searchResults() {
      const searchResults =
        this.searchEntries &&
        this.searchEntries.map(result => {
          return {
            text: `${result.title}`,
            value: result.url,
          }
        })
      return searchResults
    },
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      if (this.articles.length > 0) return
      if (this.searching) return
      this.searching = true
      const searchParams = [
        {title: {$regex: [searchQuery, 'i']}},
        {tags: {$contains: searchQuery}},
        {keywords: {$contains: searchQuery}},
      ]
      const navResults = await this.fetchContent('navigation', searchParams)
      const resourceResults = await this.fetchContent('resources', searchParams)
      const docsResults = await this.fetchContent('docs', [searchParams[0]])
      this.formatResults('Resources', resourceResults)
      this.formatResults('Docs', docsResults)
      this.searchEntries = navResults.concat(resourceResults, docsResults)
      this.searching = false
    },
  },
  methods: {
    handleSelect(e) {
      if (!e) return
      this.$router.push(`/${e}/`)
    },
    async fetchContent(store, params) {
      return await this.$content(store)
        .where({
          $or: params,
        })
        .fetch()
    },
    formatResults(prefix, results) {
      results.forEach(v => {
        v.title = `${prefix} > ${v.title}`
        v.url = v.path.slice(1) // have to remove leading slash otherwise push will 404
      })
    },
  },
}
</script>

<style scoped>
.v-application ul,
.v-application ol {
  padding: 0;
}

.search-item {
  color: var(--color-body);
  background: var(--bg);
  display: block;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  transition: font-weight 0.3ms ease-out;
}

.focused-search-item {
  color: var(--color-primary-dark);
  background-color: rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 700;
}

.icon-search {
  height: 24px;
}

.search-input-container {
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
}

.search-input {
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 190px;
}

input:focus {
  outline: none;
}

.search-results-container {
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
}
</style>
