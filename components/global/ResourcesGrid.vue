<template>
  <div class="resources-grid">
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
</template>

<script>
import ResourcesGridItem from './ResourcesGridItem'
export default {
  class: 'ResourceGrid',
  components: {
    ResourcesGridItem
  },
  props: {
    items: {
      type: Array
    },
    color: {
      type: String,
      required: false,
      default: '#009b68'
    }
  }
}
</script>

<style scoped>
.resources-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
