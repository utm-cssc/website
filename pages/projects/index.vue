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
    <div class="container px-5">
      <div class="mt-2 mb-5 cssc-heading resource-tag">
        About Open Source
      </div>
      <p>
        Want to gain development experience while collaborating with other
        students in the community? Try contributing to student-led open source
        projects! Here you can find a collection of projects that are looking
        for contributors. Or, if you have a project that could benefit from
        outside help,
        <a href="https://forms.gle/H3ehZyzNnY87mq1r8"
          >add your project to the directory!</a
        >
      </p>
    </div>
    <div class="container px-5">
      <div class="mt-2 mb-5 cssc-heading resource-tag">
        Student Projects
      </div>
      <div class="project-cards-container">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>
    </div>
    <div class="container px-5">
      <div class="mt-2 mb-5 cssc-heading resource-tag">
        Student Organizations
      </div>
      <div class="project-cards-container">
        <ProjectCard
          v-for="(club, index) in studentOrgs['clubs']"
          :key="index"
          :project="club"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {OPEN_SOURCE_PROJECT_FORM_RESPONSES} from '~/constants'
export default {
  async asyncData({$axios}) {
    const projects = []
    const studentOrgs = require('~/content/student-orgs/student_orgs.json')
    const projectData = await $axios
      .$get(OPEN_SOURCE_PROJECT_FORM_RESPONSES)
      .then(res => res?.['values'].slice(1))
      .catch(err => console.log(err))
    for (const proj of projectData) {
      if (proj[11] === 'Y') {
        const logoID = proj[8].split('id=')
        const project = {
          name: proj[3],
          desc: proj[5],
          repo: proj[4],
          logo: 'https://drive.google.com/uc?export=view&id=' + logoID[1],
          gdsc: proj[10] === 'Yes' ? proj[10] : '',
        }
        projects.push(project)
      }
    }
    return {projects, studentOrgs}
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
