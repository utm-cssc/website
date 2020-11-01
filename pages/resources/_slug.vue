<template>
  <div class="flex mt-5 pb-5 toc-display">
    <SideBar class="pr-5" :toc="toc" :title="page.title" />
    <article>
      <nuxt-content
        class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
        :document="page"
      />
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
.toc-display {
  justify-content: center;
}

@media (max-width: 1200px) {
  .toc-display {
    flex-direction: column;
    align-items: center;
  }

  .pr-5 {
    padding-right: 0 !important;
  }
}
</style>
