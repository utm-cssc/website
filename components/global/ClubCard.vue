<template>
  <div class="club-card p-4 mr-4 mb-4">
    <div class="flex align-center my-3">
      <img class="logo justify-start" :src="club.logo" />
      <div class="ml-3">
        <h5 class="club-heading">{{ club.name }}</h5>
      </div>
    </div>

    <div class="description">
      <p>{{ club.desc }}</p>
    </div>

    <div class="flex mt-2 ml-auto">
      <v-btn
        large
        color="primary"
        :href="club.link"
        v-if="club.link"
        target="_blank"
      >
        <v-icon class="mr-2">mdi-link</v-icon>Links
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    club: {
      name: String,
      desc: String,
      link: String,
      logo: String,
    },
  },
}
</script>

<style scoped>
.club-card {
  width: 343px;
  height: 375px;
  border-radius: 12px;
  background: var(--bg);
  box-shadow: 10px 20px 35px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: column;
}

.logo {
  height: 64px;
  width: auto;
}

.club-heading {
  font-size: 24px;
  line-height: 1.2;
  font-weight: 800;
  color: var(--color-heading);
}

.description {
  font-size: 18px;
  line-height: 1.6;
  height: 263px;
  width: 100%;
  overflow: hidden;
  color: var(--color-body);
}
</style>
