<template>
  <div class="container">
    <v-combobox
      v-model="chips"
      :items="items"
      chips
      clearable
      label="Your favorite hobbies"
      multiple
      prepend-icon="mdi-filter-variant"
      solo
    >
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected"
          close
          @click="select"
          @click:close="remove(item)"
        >
          <strong>{{ item }}</strong>&nbsp;
          <span>(interest)</span>
        </v-chip>
      </template>
    </v-combobox>
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
  },
  data: () => {
    return {
      chips: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
      items: ['Streaming', 'Eating']
    }
  },
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    }
  }
}
</script>

<style scoped>
.project-cards-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
