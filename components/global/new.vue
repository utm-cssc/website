<template>
  <div>
    <grid-1-x-2
      v-for="block in titles"
      :key="block.id"
      :title="block.title"
      :desc="block.description"
      :img-src="''"
      :link="'https://simpledoc.utm.utoronto.ca/#/DocumentView/' + block.id"
      :button="'Try it out!'"
    ></grid-1-x-2>
  </div>
</template>

<script>
export default {
  props: {
    data: String,
  },
  async asyncData({$axios, error}) {
    const titles = []
    await $axios
      .$get('https://simpledoc.utm.utoronto.ca:8000/api/documents/')
      .then(res => {
        for (const c of res) {
          const t = {
            id: c.id,
            title: c.title,
            description: c.description,
          }
          titles.push(t)
        }
      })
      .catch(e => {
        console.log(e.message)
        console.log({statusCode: 404, message: 'Something went wrong'})
      })
    return {titles}
  },
}
</script>

<style scoped>
.feature-btn {
  background-color: #3273dc;
  border-color: transparent;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  text-align: left;
  border-radius: 8px;
}

.feature-btn:hover {
  background-color: #378dff;
}

.feature-img {
  width: 100%;
  border-radius: 16px;
  max-height: 250px;
}

.right-padded-desc {
  padding-right: 48px;
}

.left-padded-desc {
  padding-left: 48px;
}
</style>
