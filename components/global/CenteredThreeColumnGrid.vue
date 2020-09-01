<template>
  <div class="row">
    <div
      v-for="child in children"
      :key="child.title"
      class="col-lg-4 d-flex justify-content-center"
    >
      <CenteredThreeColumnChild
        :title="child.title"
        :desc="child.desc"
        :icon="child.icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    children: Array
  }
}
</script>
