<template>
  <div>
    <v-list-item class="center-block">
      <v-spacer />
      <v-list-item-content class="col-xs-12 col-sm-3">
        <input type="text" class="form-control" v-model="name" />
      </v-list-item-content>

      <v-spacer />
      <v-list-item-content class="col-xs-12 col-sm-3">
        Mark: <input type="text" class="form-control" v-model="courseMark" />
      </v-list-item-content>

      <v-spacer />
      <v-list-item-content class="col-xs-12 col-sm-4">
        Percentage:
        <input type="text" class="form-control" v-model="percentage" />
      </v-list-item-content>

      <v-spacer />
      <v-list-item-content class="col-xs-12">
        <v-list-item-action v-on:click="removeCourse()">
          <v-icon>mdi-delete</v-icon>
        </v-list-item-action>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    courseMark: {
      type: Number,
    },
    percentage: {
      type: Number,
    },
  },
  data() {
    return {
      key: 'value',
    }
  },
  methods: {
    removeCourse() {
      this.$emit('removeMe')
    },
  },
}
</script>

<style scoped>
input {
  max-width: 100px;
  margin-left: 5px;
}
</style>
