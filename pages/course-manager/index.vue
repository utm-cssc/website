<template>
  <v-content>
    <v-container>
      <p class="display-1">Grades</p>

      <v-list v-if="courses.length > 0">
        <v-list-item-group v-model="selectedIndex">
          <course-list-item
            v-for="(course, index) in courses"
            :key="index"
            :name="course.code"
            :courseMark="course.mark"
            :percentage="course.percentage"
            @removeMe="removeCourse(index)"
          />
        </v-list-item-group>
      </v-list>
      <div class="d-flex justify-content-end">
        <v-btn text large color="var(--color-primary)" @click="addCourse">
          <v-icon large>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      courseToDeleteIndex: -1,
      courses: [
        {
          code: 'CSC209',
          mark: 50,
          percentage: 20,
        },
        {
          code: 'CSC263',
          mark: 50,
          percentage: 10,
        },
        {
          code: 'STA256',
          mark: 50,
          percentage: 10,
        },
      ],
      selectedIndex: 0,
    }
  },
  methods: {
    addCourse() {
      this.courses.push({
        code: 'Test',
        mark: 50,
        percentage: 10,
      })
    },
    removeCourse() {
      this.courses.splice(this.selectedIndex, 1)
    },
  },
}
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
}
</style>
