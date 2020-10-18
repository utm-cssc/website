<template>
  <article class="mt-5 pb-5">
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
      :document="page"
    />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const page = await $content('resources', params.slug).fetch()
    for (let i = 0; i < page.toc.length; i++) {
      if (page.toc[i].depth === 2) {
        console.log(page.toc[i])
      }
    }
    return { page }
  }
}
</script>
