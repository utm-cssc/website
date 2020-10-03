<template>
  <div>
    <h1 v-for="c in collabrators" :key="c.login">{{ c.login }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collabrators: {}
    }
  },
  async asyncData ({ $axios }) {
    console.log('Working')
    const { collabrators } = await $axios.$get('https://api.github.com/repos/utm-cssc/website/contributors')
    console.log(collabrators)
    return { collabrators }
  }
}
</script>
