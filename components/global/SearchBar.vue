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
    clearable
  >
    <template v-slot:item="data">
      <template v-if="typeof data.item !== 'object'">
        <v-list-item-content v-text="data.item"></v-list-item-content>
      </template>
      <template v-else>
        <v-list-item-content
          @click="$router.push(`/resources/${data.item.value}`)"
        >
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
      searchEntries: [],
    }
  },
  computed: {
    searchResults() {
      const searchResults = this.searchEntries.map(result => {
        return {
          text: `Resources > ${result.title}`,
          value: result.slug,
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
      // const titleSearchResults = this.getTitleSearchResults(searchQuery)
      // const tagsSearchResults = this.getTagsSearchResults(searchQuery)

      this.searchEntries = await this.$content('resources')
        .where({tags: {$contains: searchQuery}})
        .fetch()

      this.searching = false
    },
  },
  methods: {
    async getTagsSearchResults(searchQuery) {
      const tagsSearchResults = await this.$content('resources')
        .where({tags: {$contains: searchQuery}})
        .fetch()

      return tagsSearchResults
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
