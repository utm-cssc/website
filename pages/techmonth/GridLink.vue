<template>
  <div class="row" id="monthly">
    <span
      v-for="child in children"
      :key="child.title"
      class="col-lg-4"
    >
    <grid-1-x-2 :title="child.title" :desc="child.desc" :link="child.link" button="Check it out!"></grid-1-x-2>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    children: Array
  }
}
</script>
