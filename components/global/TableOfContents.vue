<template>
  <div class="toc-container">
    <div class="table-of-contents mb-4">
      <div class="text-xl font-bold">
        On this page
      </div>
      <li v-for="tocItem in toc" :key="tocItem.id">
        <NuxtLink
          :to="`#${tocItem.id}`"
          class="block mt-1 mr-3 text-sm scrollactive-item transition-transform ease-in-out duration-300 transform hover:translate-x-2"
          :class="{
            'py-2 subheading': tocItem.depth === 2,
            'ml-2 pb-2 innerSubheading': tocItem.depth === 3,
          }"
        >
          {{ tocItem.text }}
        </NuxtLink>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    toc: Array,
  },
}
</script>

<style scoped>
li {
  list-style-type: none;
}

.subheading {
  font-weight: bold;
}

.subheading:hover,
.subheading:active {
  color: var(--color-primary);
}

.innerSubheading:hover,
.innerSubheading:active {
  color: var(--color-primary-dark);
}

a:hover {
  text-decoration: none;
}

.toc-container {
  position: relative;
}

.table-of-contents {
  max-width: 370px;
  position: sticky;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 88vh;
  top: 100px;
}

@media (max-width: 1200px) {
  .table-of-contents {
    max-width: 600px;
    max-height: 100%;
    margin: 0 30px 0 30px;
    overflow-y: none;
    overflow-x: hidden;
  }
}
</style>
