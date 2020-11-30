<template>
  <div>
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="(info, index) in data" :key="index">
        <v-expansion-panel-header
          >{{ info }}: {{ courses[info].title }}</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          {{ courses[info].desc }}
          <div class="mt-2">
            <v-btn
              target="_blank"
              large
              color="primary"
              v-if="courses[info].link"
              :href="'./' + info.toString().toLowerCase()"
            >
              Check out the resource page!
            </v-btn>
          </div>
          <div class="mt-2">
            <v-btn
              target="_blank"
              color="primary"
              large
              v-if="courses[info].courseId"
              :href="
                'https\://student.utm.utoronto.ca/CourseInfo/index.php?session_cd=\'\'&department_id=7&hightlight=' +
                  courses[info].courseId +
                  '&download=1'
              "
            >
              Check out the past Syllabi!
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import coursesDataStore from '~/assets/courses.json'
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      courses: {},
    }
  },
  created() {
    const courses = {}
    for (const courseData of coursesDataStore) {
      if (this.data.includes(courseData.code)) {
        courses[courseData.code] = {
          title: courseData.title,
          desc: courseData.desc,
          link: courseData.link,
          courseId: courseData.courseId,
        }
      }
    }
    this.courses = courses
  },
}
</script>

<style scoped>
.info-title {
  font-size: 20px;
  color: var(--color-heading);
  background-color: rgba(0, 0, 0, 0.04);
  outline: none !important;
  border: none;
  text-align: left;
}

.info-title:hover,
.info-title:active {
  background-color: rgba(0, 0, 0, 0.1) !important;
  color: var(--color-body) !important;
}

.info-desc {
  font-size: 20px;
  text-align: left;
}

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
</style>
