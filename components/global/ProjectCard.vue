<template>
  <div class="project-card pl-4 p-2 mr-4 mb-4 pb-3">
    <div class="flex align-center my-3">
      <img class="logo justify-start" :alt="project.name" :src="project.logo" />
      <div class="ml-3">
        <h2 class="project-heading">{{ project.name }}</h2>
      </div>
    </div>

    <div class="description">
      <p>{{ project.desc }}</p>
    </div>

    <div class="flex mt-2 ml-auto">
      <v-btn
        large
        color="primary"
        class="mr-2"
        :href="project.repo"
        v-if="project.repo"
        target="_blank"
      >
        <svg
          class="mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            fill="#FFFFFF"
            d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"
          />
          <path
            fill="#FFFFFF"
            d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"
          />
        </svg>
        <div>
          Repo
        </div>
      </v-btn>
      <v-btn
        large
        color="primary"
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
      >
        <svg
          class="mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#FFFFFF"
            d="M9.5 15.584V8.416a.5.5 0 01.77-.42l5.576 3.583a.5.5 0 010 .842l-5.576 3.584a.5.5 0 01-.77-.42z"
          />
          <path
            fill-rule="evenodd"
            fill="#FFFFFF"
            d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
          />
        </svg>
        <div>Demo</div>
      </v-btn>
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
      demo: String,
    },
  },
}
</script>

<style scoped>
.project-card {
  width: 343px;
  height: 263px;
  border-radius: 12px;
  background: var(--bg);
  box-shadow: 10px 20px 35px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
}

.logo {
  height: 48px;
}

.project-heading {
  font-size: 24px;
  line-height: 1.2;
  font-weight: 800;
  color: var(--color-heading);
}

.description {
  font-size: 18px;
  line-height: 1.6;
  height: 108px;
  width: 309px;
  overflow: hidden;
  color: var(--color-body);
}
</style>
