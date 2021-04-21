<template>
  <div>
    <div class="row" v-for="i in rowCount" :key="i">
      <div v-for="j in cols" :key="j">
        <div v-if="itemExists(i, j)" class="card rounded-card project-box">
          <div class="title">{{ getItem(i, j).name }}</div>
          <!--          <img class="event-img" :src="`/the-show/${getItem(i, j).img}`">-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheShowGrid',
  props: {
    cols: {
      type: Number,
      default: 3,
    },
    items: {
      type: Array,
    },
  },
  computed: {
    rowCount() {
      const quotient = Math.floor(this.items.length / this.cols)
      const remainder = this.items.length % this.cols
      return quotient + (remainder === 0 ? 0 : 1)
    },
  },
  methods: {
    itemIndex: function(row, col) {
      return (row - 1) * this.cols + (col - 1)
    },
    getItem: function(row, col) {
      return this.items[this.itemIndex(row, col)]
    },
    itemExists: function(row, col) {
      return this.getItem(row, col) != null
    },
  },
}
</script>

<style scoped>
.project-box {
  padding: 10px 10px;
  margin-right: 20px;
  border-radius: 25px !important;
  background-color: rgba(100, 100, 100, 1) !important;
  color: white !important;
}

.row {
  margin: 1em !important;
}

.title {
  font-size: 24px !important;
  color: white !important;
  height: 48px;
}

.event-img {
  width: 100%;
  height: 200px;
}
</style>
