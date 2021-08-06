<template>
  <div class="row" style="margin-top: 230px; margin-bottom: 230px;">
    <div
      v-for="child in children"
      :key="child.title"
      class="w-full md:w-1/3 flex justify-center"
    >
      <CenteredThreeColumnChild
        :title="child.title"
        :desc="child.desc"
        :icon="child.icon"
        :alt="child.alt"
        :rounded="rounded"
        :button="child.button"
        class="px-2"
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
