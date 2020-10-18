<template>
  <article class="mt-5 pb-5">
    <SideBar :toc="toc" :title="page.title"/>
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
    return { page, toc: page.toc }
  }
}
</script>
