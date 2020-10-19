<template>
  <div class="club-card pl-4 p-2 mr-4 mb-4 pb-3">
    <div class="flex align-items-center my-3">
      <img
        class="logo justify-start"
        :src="club.logo"
      >
      <div class="ml-3">
        <h5 class="club-heading">{{ club.name }}</h5>
      </div>
    </div>

    <div class="description">
      <p>{{ club.desc }}</p>
    </div>

    <div class="flex mt-2 ml-auto">
      <b-button
        size="lg"
        class="button mr-2 flex align-content-center"
        :href="club.link"
        v-if="club.link"
        target="_blank"
      >
      <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" fill="#FFFFFF" d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"/><path fill="#FFFFFF" d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"/></svg>
      <div>
        LinkTree
        </div>
      </b-button>
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
      logo: String
    }
  }
}

</script>

<style scoped>

.button {
  background: var(--color-primary);
  border: none;
  color: white;
}

.button:hover,
.button:active {
  background: var(--color-primary-dark) !important;
}

.club-card {
  width: 420px;
  height: 369px;
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
  width: 384px;
  overflow: hidden;
  color: var(--color-body);
}
</style>
