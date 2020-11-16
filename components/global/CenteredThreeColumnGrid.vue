<template>
  <div class="row">
    <div
      v-for="child in children"
      :key="child.title"
      class="col-lg-4 flex justify-center"
    >
      <CenteredThreeColumnChild
        :title="child.title"
        :desc="child.desc"
        :icon="child.icon"
        :rounded="rounded"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    children: Array,
    rounded: Boolean,
  },
}
</script>
