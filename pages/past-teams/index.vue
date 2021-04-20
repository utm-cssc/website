<template>
  <div class="container">
    <!-- Tech Team -->
    <div class="my-5">
      <div class="cssc-heading">
        Past Teams
      </div>
      <div v-for="team in pastTeam" :key="team.year">
        <div class="cssc-subheadings">
          {{ team.year }}
        </div>
        <div class="teams">
          <Teammate
            v-for="mate in team.members"
            :key="mate.name"
            :imgSrc="mate.imgSrc"
            :name="mate.name"
            :position="mate.position"
            :message="mate.message"
            :discord="mate.discord"
            :email="mate.email"
            :linkedin="mate.linkedin"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {}
  },
  async asyncData({$axios, $content, params, error}) {
    const teamDataStore = await $content('team').fetch()
    const pastTeam = teamDataStore[0].teams
    return {pastTeam}
  },
}
</script>

<style scoped>
.teams {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .teams {
    justify-content: center;
  }
}

@media (min-width: 1904px) {
  .teams {
    justify-content: initial;
  }
}
</style>
