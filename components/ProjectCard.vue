<template>
  <div class="project-card pl-4 p-2 mr-4 mb-4">
    <div class="flex align-items-center mb-4 mt-4">
      <img
        class="logo justify-start"
        :src="project.logo"
      >
      <div class="ml-3">
        <h5 class="project-heading">{{ project.name }}</h5>
      </div>
    </div>

    <div class="description">
      <p>{{ project.desc }}</p>
    </div>

    <div class="d-flex mt-4 justify-content-center">
      <b-button
        size="lg"
        class="button mr-2 d-flex"
        :href="project.repo"
        target="_blank"
      >
        Repo
      </b-button>
      <b-button
        size="lg"
        class="button mr-2"
        :href="project.demo"
        target="_blank"
      >Demo
      </b-button>
      <b-button
        size="lg"
        class="button"
        :href="project.demo"
        target="_blank"
      >
        <fa-icon
          class="mr-2"
          :icon="['fas', 'play']"
        />Docs
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      name: String,
      desc: String,
      repo: String,
      logo: String,
      demo: String
    }
  }
}

</script>

<style scoped>

.button {
  background: var(--color-primary);
  border: none;
}

.button:hover,
.button:active {
  background: var(--color-primary-dark) !important;
}

.project-card {
  width: 369px;
  height: 309px;
  border-radius: 12px;
  background: var(--bg);
  box-shadow: 10px 20px 35px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
}

.logo {
  height: 72px;
}

.icon {
  height: 10px;
}

.project-heading {
  font-size: 32px;
  line-height: 1.2;
  font-weight: 800;
}

.description {
  font-size: 18px;
  line-height: 1.6;
  height: 72px;
  width: 335px;
  overflow: hidden;
}
</style>
