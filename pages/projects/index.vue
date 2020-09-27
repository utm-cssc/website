<template>
  <div class="container">
    <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
      <CenteredHero
        icon="../../icons/projects.svg"
        title="Projects"
        desc="Discover student and community made projects!"
        arrowLink="#projects"
      />
    </div>
    <a id="projects" />
    <div class="mt-2 cssc-heading">
      DSC
    </div>
    <div class="project-cards-container">
      <ProjectCard
        v-for="(dscProject,id) in dscProjects"
        :key="id"
        :project="dscProject"
      />
    </div>
    <div class="mt-2 mb-3 cssc-heading">
      Student Made
    </div>
    <div class="project-cards-container">
      <ProjectCard
        v-for="(studentProject,id) in studentProjects"
        :key="id"
        :project="studentProject"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const projectsDataStore = await $content('projects').fetch()
    return { dscProjects: projectsDataStore[0].dsc, studentProjects: projectsDataStore[0].students }
  }
}
</script>

<style scoped>
.project-cards-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
