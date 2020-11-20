<template>
  <div class="container">
    <div v-for="course in courses" :key="course.code">
      <ManageCourse :course="course" />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState('courseManager', ['courses']),
  },
}
</script>
