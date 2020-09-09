<template>
  <div>
    <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
      <CenteredHero
        icon="icons/resources.svg"
        title="Resources"
        desc="We curate from across the internet and produce original content for our community!"
        arrowLink="#resourcesGrid"
      />
    </div>
    <a id="resourcesGrid" />
    <ResourcesGrid v-if="resourceGridItems" :items="resourceGridItems" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const resources = await $content('resources').fetch()
    const resourceGridItems = resources.map((resource) => {
      return { title: resource.title, desc: resource.desc, icon: resource.icon, link: `/resources/${resource.title.toLowerCase()}` }
    })
    return { resourceGridItems }
  }
}
</script>
