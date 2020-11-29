<template>
  <div>
    <div class="accordion mb-1" v-for="(info, index) in data" :key="index">
      <b-button
        class="info-title"
        block
        v-b-toggle="'accordion-' + index"
        v-if="courses[info]"
      >
        {{ info }}: {{ courses[info].title }}
      </b-button>
      <b-collapse
        :id="'accordion-' + index"
        :visible="false"
        accordion="my-accordion"
      >
        <b-card-body class="info-desc" v-if="courses[info]">
          <b-card-text style="margin-top: 0 !important;">
            {{ courses[info].desc }}
            <div class="mt-2">
              <b-btn
                target="_blank"
                v-if="courses[info].link"
                :href="'./' + info.toString().toLowerCase()"
                class="py-2 px-3 feature-btn"
              >
                Check out the resource page!
              </b-btn>
            </div>
            <div class="mt-2">
              <b-btn
                target="_blank"
                v-if="courses[info].courseId"
                :href="
                  'https\://student.utm.utoronto.ca/CourseInfo/index.php?session_cd=\'\'&department_id=7&hightlight=' +
                    courses[info].courseId +
                    '&download=1'
                "
                class="py-2 px-3 feature-btn"
              >
                Check out the past Syllabi!
              </b-btn>
            </div>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </div>
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
