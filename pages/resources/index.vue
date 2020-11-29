<template>
  <div class="pb-5">
    <div class="mt-5 flex flex-column justify-center align-center">
      <CenteredHero
        icon="../../icons/resources.svg"
        title="Resources"
        desc="We curate from across the internet and produce original content for our community!"
        arrow-link="#resources-grid"
      />
    </div>
    <a id="resources-grid" />
    <v-container>
      <v-combobox
        v-model="selected"
        :items="sortedTags"
        chips
        clearable
        label="Search for resources!"
        multiple
        prepend-icon="mdi-filter-variant"
        solo
        class="resource-tag"
      >
        <template v-slot:selection="{attrs, item, select, selected}">
          <v-chip
            v-bind="attrs"
            :input-value="selected"
            close
            @click="select"
            @click:close="removeFilterOption(item)"
          >
            <strong class="resource-tag" :class="{caps: containsUTM(item)}">{{
              item
            }}</strong>
          </v-chip>
        </template>
      </v-combobox>
      <div
        v-for="tag in selected.length === 0 ? sortedTags : selected"
        :key="tag"
        class="container px-5"
      >
        <div
          class="mt-2 mb-3 ml-3 cssc-heading resource-tag"
          :class="{caps: containsUTM(tag)}"
        >
          {{ tag.replace('-', ' ') }}
        </div>
        <ResourcesGrid :items="resourcesForTag(tag)" />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    const resourcesDataStore = await $content('resources').fetch()
    const tags = new Set()
    const resources = []
    for (const resourceData of resourcesDataStore) {
      const resource = {
        title: resourceData.title,
        desc: resourceData.desc,
        icon: resourceData.icon,
        link: `/resources/${resourceData.link}`,
        tags: resourceData.tags,
      }
      resource.tags.forEach(tag => {
        tags.add(tag)
      })
      resources.push(resource)
    }
    return {resources, tags}
  },
  data() {
    return {
      selected: [],
    }
  },
  computed: {
    sortedTags() {
      const sortedTags = Array.from(this.tags).sort()
      // Resources with more items should show up higher.
      sortedTags.sort(
        (a, b) =>
          this.resourcesForTag(b).length - this.resourcesForTag(a).length,
      )
      return sortedTags
    },
  },
  methods: {
    resourcesForTag(tag) {
      const filteredResources = this.resources.filter(resource =>
        resource.tags.includes(tag),
      )
      return filteredResources
    },
    removeFilterOption(item) {
      this.selected.splice(this.selected.indexOf(item), 1)
      this.selected = [...this.selected]
    },
    containsUTM(item) {
      if (item.replace('-', ' ').search('utm') === -1) return false
      return true
    },
  },
}
</script>

<style scoped>
.resource-tag {
  text-transform: capitalize;
}

.caps {
  text-transform: uppercase;
}
</style>
