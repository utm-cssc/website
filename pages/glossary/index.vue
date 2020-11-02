<template>
  <article class="mt-5 pb-5">
    <nuxt-content
      class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto glossary-content"
      :document="glossary"
    />
  </article>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    const glossary = await $content('glossary').fetch()
    return {glossary}
  },
}
</script>

<style>
.glossary-content p {
  display: inline-flex;
}

.glossary-content h3 {
  display: flex;
}
</style>
