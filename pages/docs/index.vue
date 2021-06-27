<template>
  <div class="pb-5">
    <div
      class="mt-5 d-flex flex-column justify-content-center align-items-center"
    >
      <CenteredHero
        icon="../../docs/configuration.svg"
        title="Documentation"
        desc="Contribute to our website!"
        arrow-link="#docs-grid"
      />
    </div>
    <a id="docs-grid" />
    <ResourcesGrid :items="docs" />
  </div>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    const docsDataStore = await $content('docs').fetch()
    let docs = []
    for (const docsData of docsDataStore) {
      const doc = {
        title: docsData.title,
        desc: docsData.desc,
        icon: docsData.icon,
        link: `/docs/${docsData.link}`,
        tags: docsData.tags,
      }
      docs.push(doc)
    }
    return {docs}
  },
}
</script>
