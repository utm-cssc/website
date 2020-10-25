<template>
  <div class="ml-4 tableOfContents">
    <div class="heading">
      {{ title }}
    </div>
    <li v-for="tocItem in toc" :key="tocItem.id">
      <NuxtLink
        :to="`#${tocItem.id}`"
        class="block text-sm scrollactive-item transition-transform ease-in-out duration-300 transform hover:translate-x-1"
        :class="{
          'py-2 subheading': tocItem.depth === 2,
          'ml-2 pb-2 innerSubHeading': tocItem.depth === 3
        }"
      >
        {{ tocItem.text }}
      </NuxtLink>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    toc: Array
  }
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

  .innerSubHeading:hover,
  .innerSubHeading:active {
    color: var(--color-primary-dark);
  }

  a:hover {
    text-decoration: none;
  }

  .tableOfContents {
    width: 20%;
    box-sizing: content-box;
    position: fixed;
    z-index: 2;
  }

</style>
