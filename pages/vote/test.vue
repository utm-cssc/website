<template>
  <div
    v-for="childTitle in titles">
    {{ childTitle }}
    <div
      v-for="child in children"
      :key="child.title"
    >
    <input type="radio" :name="childTitle"/>
    <label>{{ child }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    children: Array,
    titles: Array
  }
}
</script>
