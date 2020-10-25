<template>
  <div class="tableOfContents d-flex mb-4">
    <div class="heading">
      {{ title }}
    </div>
    <li v-for="tocItem in toc" :key="tocItem.id">
      <NuxtLink
        :to="`#${tocItem.id}`"
        class="block mt-1 text-sm scrollactive-item transition-transform ease-in-out duration-300 transform hover:translate-x-1"
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
    width: 220px;
    position: fixed;
    overflow-y: scroll;
    z-index: 1;
    flex-direction: column;
    margin-left: 50px;
    top: 150px;
    bottom: 50px;
  }

  @media (max-width: 1200px) {
    .tableOfContents {
      width: auto;
      z-index: 0;
      position: static;
      align-items: center;
      margin: 0 30px 0 30px;
    }
  }

</style>
