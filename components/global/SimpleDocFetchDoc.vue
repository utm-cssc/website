<template>
  <div>
    <grid-1-x-2-noimage
      v-for="block in titles"
      :key="block.id"
      :title="block.title"
      :desc="block.description"
      :img-src="''"
      :link="'https://simpledoc.utm.utoronto.ca/#/DocumentView/' + block.id"
      :button="'Check it out on SimpleDoc'"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    tag: {
      type: String,
      default: '',
    },
  },
  methods: {
    getDoc() {
      const titles = []
      axios({
        method: 'GET',
        url:
          'https://simpledoc.utm.utoronto.ca:8000/api/documents/category/' +
          this.$props.tag +
          '/',
      }).then(
        res => {
          for (const c of res.data) {
            const t = {
              id: c.id,
              title: c.title,
              description: c.definition,
            }
            titles.push(t)
          }
        },
        error => {
          console.log(error.message)
          console.log({statusCode: 404, message: 'Something went wrong'})
        },
      )
      return titles
    },
  },
  data() {
    return {
      titles: this.getDoc(),
    }
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
