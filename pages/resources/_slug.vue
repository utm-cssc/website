<template>
  <div
    class="resource-article-container flex justify-center container mt-5 pb-5"
  >
    <table-of-contents
      class="pr-5"
      :toc="toc"
      :title="page.title"
    ></table-of-contents>
    <article class="w-full md:w-3/5">
      <nuxt-content class="markdown-body mx-auto" :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    const page = await $content('resources', params.slug).fetch()
    return {page, toc: page.toc}
  },
}
</script>

<style scoped>
.resource-article-container {
  display: flex;
}

@media (max-width: 800px) {
  .resource-article-container {
    display: flex;
    flex-direction: column;
  }

  .pr-5 {
    padding-right: 0 !important;
  }
}
</style>
