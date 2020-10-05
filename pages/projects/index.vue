<template>
  <div class="container">
    <div
      class="mt-5 d-flex flex-column justify-content-center align-items-center"
    >
      <CenteredHero
        icon="../../icons/projects.svg"
        title="Projects"
        desc="Discover student and community made projects!"
        arrowLink="#projects"
      />
    </div>
    <a id="projects" />
      <div v-for="tag in tags" :key="tag" class="container px-5">
        <div class="mt-2 mb-5 cssc-heading resource-tag">
          {{ tag.replace("-", " ") }}
        </div>
        <div class="project-cards-container" >
          <ProjectCard v-for="(project, index) in projectsForTag(tag)" :key="index" :project="project" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const projectsDataStore = await $content('projects').fetch()
    console.log(projectsDataStore)
    const tags = new Set()
    const projects = []
    for (const projectData of projectsDataStore[0].projects) {
      const project = {
        name: projectData.name,
        desc: projectData.desc,
        repo: projectData.repo,
        logo: projectData.logo,
        demo: projectData.demo,
        tags: projectData.tags
      }
      project.tags.forEach((tag) => {
        tags.add(tag)
      })
      projects.push(project)
    }
    return { projects, tags }
  },
  methods: {
    projectsForTag (tag) {
      const filteredProjects = this.projects.filter(project => project.tags.includes(tag))
      console.log(filteredProjects)
      return filteredProjects
    }
  }
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
