<template>
  <div class="container">
    <div class="row d-flex flex-wrap" v-if="responsive">
      <resources-grid-item
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :link="item.link"
        :icon-file-name="item.icon"
        :desc="item.desc"
        :color="color"
      />
    </div>
    <div v-else class="row d-flex flex-wrap">
      <resources-non-responsive-item
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :link="item.link"
        :icon-file-name="item.icon"
        :desc="item.desc"
        :color="color"
      />
    </div>
  </div>
</template>

<script>
import ResourcesGridItem from './ResourcesGridItem'
import ResourcesNonResponsiveItem from './ResourceNonResponsiveItem'
export default {
  class: 'ResourceGrid',
  components: {
    ResourcesGridItem,
    ResourcesNonResponsiveItem,
  },
  props: {
    items: {
      type: Array,
    },
    color: {
      type: String,
      required: false,
      default: '#009b68',
    },
    responsive: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
}
</script>
