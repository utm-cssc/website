<template>
  <div class="container">
    <div class="mt-5 flex flex-column justify-center align-center">
      <CenteredHero
        icon="../../icons/projects.svg"
        title="Open Source Directory"
        desc="Discover student and community made projects!"
      />
    </div>
    <a id="projects" />
    <div v-for="tag in tags" :key="tag" class="container px-5">
      <div class="mt-2 mb-5 cssc-heading resource-tag">
        {{ tag.replace('-', ' ') }}
      </div>
      <div class="project-cards-container">
        <ProjectCard
          v-for="(project, index) in projectsForTag(tag)"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {OPEN_SOURCE_PROJECT_FORM_RESPONSES} from '~/constants'
export default {
  async asyncData({$axios}) {
    const projects = await $axios
      .$get(OPEN_SOURCE_PROJECT_FORM_RESPONSES)
      .then(res => console.log(res?.['values'].slice(1)))
      .catch(err => console.log(err))
    return {projects}
  },
}
</script>

<style scoped>
.project-cards-container {
  display: flex;
  flex-wrap: wrap;
}

.resource-tag {
  text-transform: capitalize;
}
</style>
