<template>
  <div class="toc-container">
    <div class="tableOfContents mb-4">
      <div class="heading">
        {{ title }}
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

.heading {
  font-weight: bold;
  font-size: 30px;
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

.tableOfContents {
  max-width: 370px;
  position: sticky;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 80vh;
  top: 0;
}

@media (max-width: 1200px) {
  .tableOfContents {
    max-width: 600px;
    max-height: 100%;
    margin: 0 30px 0 30px;
    overflow-y: none;
    overflow-x: hidden;
  }
}
</style>
