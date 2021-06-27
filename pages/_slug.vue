<template>
  <article class="mt-5 pb-5">
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-dark mx-auto"
      :document="page"
    />
  </article>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    const page = await $content('', params.slug).fetch()

    return {page}
  },
}
</script>
