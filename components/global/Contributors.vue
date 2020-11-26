<template>
  <!-- Preconditions:
  Whereever you use this component we need to includ this following script
  in the page for get all the contributors.

  Note: This call is not included in this coponent as nuxt doesn't all to call async functions
        on components.

  async asyncData ({ $axios }) {
    const contributors = []
    await $axios
      .$get('https://api.github.com/repos/utm-cssc/website/contributors')
      .then((res) => {
        for (const c of res) {
          const contributor = {
            login: c.login,
            imgSrc: c.avatar_url,
            url: c.html_url
          }
          contributors.push(contributor)
        }
        console.log(contributors)
      })
      .catch((e) => {
        console.log(e.message)
        console.log({ statusCode: 404, message: 'Something went wrong' })
      })
    console.log('Final Contributors')
    console.log(contributors)
    return { contributors }
  }
  } -->
  <div class="d-flex flex-wrap">
    <div class="ml-5 mr-5" v-for="c in contributors" :key="c.login">
      <a target="_blank" :href="c.url">
        <div class="d-flex flex-col align-items-center">
          <img class="profile-pic" :src="c.imgSrc" :alt="imgAlt(c.login)" />
          <p>{{ c.login }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contributors: {
      type: Array,
      required: true,
    },
  },
  methods: {
    imgAlt(login) {
      return login + "'s Image"
    },
  },
}
</script>

<style scoped>
p {
  font-size: 16px;
}

a {
  text-emphasis: none;
  text-decoration: none;
  color: var(--color-primary);
}

img:hover {
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.25);
}

.profile-pic {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>
