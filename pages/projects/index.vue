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
    <v-app>
      <v-combobox
        v-model="chips"
        :items="items"
        chips
        clearable
        label="Filter projects by categories"
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
          v-for="(studentProject,id) in searching"
          :key="id"
          :project="studentProject"
        />
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      chips: [],
      items: ['Docker', 'AI', 'CSC492', 'CSC398']
    }
  },
  async asyncData ({ $content, params, error }) {
    const projectsDataStore = await $content('projects').fetch()
    return { dscProjects: projectsDataStore[0].dsc, studentProjects: projectsDataStore[0].students }
  },
  computed: {
    searching () {
      if (this.chips.length === 0) {
        return this.studentProjects
      }
      const projects = []
      for (let i = 0; i < this.studentProjects.length; i++) {
        if (this.chips.includes(this.studentProjects[i].type)) {
          projects.push(this.studentProjects[i])
        }
      }
      return projects
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

.v-application .pl-4 {
  padding-left: 1.5rem !important;
}

.v-application .mb-4 {
  margin-bottom: 1.5rem !important;
}

.v-application .mr-4 {
  margin-right: 1.5rem !important;
}

</style>
