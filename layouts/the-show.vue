<template>
  <v-app class="bg pg-layout">
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
@import '@/assets/styles/customize-vuetify.css';

.bg {
  background: url('/the-show/background.svg') !important;
  background-size: cover !important;
}

.pg-layout {
  margin-left: auto;
  margin-right: auto;
}
</style>
