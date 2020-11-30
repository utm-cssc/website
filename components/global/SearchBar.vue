<template>
  <div class="relative flex flex-col justify-between">
    <div
      class="relative"
      @keydown.down="increment"
      @keydown.up="decrement"
      @keydown.enter="go"
    >
      <label for="search" class="sr-only">Search</label>
      <div class="search-container flex align-items-center py-1 px-2">
        <img src="/icons/search.svg" class="icon-search mr-2" />
        <input
          id="search"
          ref="search"
          v-model="searchQuery"
          class="search-input pb-1"
          :class="{'rounded-b-none': focus && (searching || articles.length)}"
          placeholder="Search Resources"
          type="search"
          autocomplete="off"
          @focus="onFocus"
          @blur="onBlur"
        />
      </div>
    </div>
    <ul
      v-show="focus && (searching || articles.length)"
      class="search-results-container z-10 w-100 absolute top-0 overflow-hidden"
      :class="{'rounded-t-none': focus && (searching || articles.length)}"
      style="margin-top: 37px; list-style-position: inside;"
    >
      <li v-if="searching && !articles.length" class="px-2">Searching...</li>
      <li
        class="search-item text-capitalize"
        :class="{'focused-search-item': focusIndex == index}"
        v-for="(result, index) of articles"
        :key="result.path"
        @mouseenter="focusIndex = index"
        @mousedown="go"
      >
        <NuxtLink
          :to="result.path"
          class="flex px-2 py-2 items-center leading-5 transition ease-in-out duration-150 search-item"
          @click="focus = false"
        >
          <span v-if="result.category" class="font-bold">{{
            result.category
          }}</span>
          <IconChevronRight v-if="result.category" class="w-3 h-3 mx-1" />
          {{ result.slug }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      focus: false,
      focusIndex: -1,
      open: false,
      searching: false,
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      console.log(searchQuery)
      this.focusIndex = -1
      if (!searchQuery) {
        this.searching = false
        this.articles = []
        return
      }
      this.searching = true
      this.articles = await this.$content('resources')
        .limit(8)
        .search('title', searchQuery)
        .fetch()
      console.log(this.articles)

      this.searching = false
    },
  },
  mounted() {
    window.addEventListener('keyup', this.keyup)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyup)
  },
  methods: {
    onFocus() {
      this.focus = true
      this.$emit('focus', true)
    },
    onBlur() {
      this.focus = false
      this.$emit('focus', false)
    },
    keyup(e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    },
    increment() {
      if (this.focusIndex < this.articles.length - 1) {
        this.focusIndex++
      }
    },
    decrement() {
      if (this.focusIndex >= 0) {
        this.focusIndex--
      }
    },
    go() {
      if (this.articles.length === 0) {
        return
      }
      const result =
        this.focusIndex === -1
          ? this.articles[0]
          : this.articles[this.focusIndex]
      this.$router.push(result.path)
      // Unfocus the input and reset the query.
      this.$refs.search.blur()
      this.searchQuery = ''
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

.search-container {
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
