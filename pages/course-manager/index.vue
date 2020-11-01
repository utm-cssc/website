<template>
  <v-content>
    <v-container>
      <p class="display-1">Grades</p>

      <v-list v-if="courses.length > 0">
        <v-list-item-group v-model="selectedIndex">
          <course-list-item
            v-for="course in courses"
            :key="course"
            :name="course.code"
            :courseMark="course.mark"
            :percentage="course.percentage"
            @click="selectedIndex = index"
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
    removeCourse(courseIndex) {
      if (courseIndex != this.courseToDeleteIndex) {
        this.courseToDeleteIndex = courseIndex
        return
      }
      this.courses.splice(courseIndex, 1)
      if (courseIndex == this.selectedIndex) {
        this.selectedIndex = -1
      }
      this.courseToDeleteIndex = -1
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
