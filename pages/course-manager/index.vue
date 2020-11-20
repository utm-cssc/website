<template>
  <div>
    <div class="container" v-if="loaded">
      <v-dialog v-model="addCourseDialog" max-width="500px">
        <template v-slot:activator="{on, attrs}">
          <v-btn color="primary" text class="mb-2" v-bind="attrs" v-on="on">
            <v-icon color="primary"> mdi-plus </v-icon>
            Add Course
          </v-btn>
        </template>
        <v-card>
          <v-form v-model="valuesValid">
            <v-card-title>
              <span class="headline">New Course</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="courseToAdd.name"
                      label="Course Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="courseToAdd.code"
                      label="Course Code"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" text @click="newCourseDialog = false">
                Cancel
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="addCourse()"
                :disabled="!valuesValid"
              >
                Add
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
      <v-dialog v-model="deleteCourseDialog" max-width="500px">
        <v-card>
          <v-card-title class="headline">
            Delete {{ courseToDelete.code }}?
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" text @click="deleteCourseDialog = false"
              >Cancel</v-btn
            >
            <v-btn color="primary" text @click="deleteCourse()"> Yes </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div v-for="course in courses" :key="course.code"></div>
      <v-list>
        <v-list-group
          v-for="(course, index) in courses"
          :key="course.code"
          v-model="courseStates[index].expanded"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content
              >{{ course.code }}: {{ course.name }}</v-list-item-content
            >
            <v-list-item-icon
              @click="
                courseToDelete = course
                deleteCourseDialog = true
              "
            >
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
          </template>

          <v-list-item>
            <v-list-item-content>
              <ManageCourse :course="course" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </div>
    <div class="w-100 flex justify-center" v-else>
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  created() {
    console.log('created')
  },
  data() {
    return {
      loaded: false,
      valuesValid: false,
      addCourseDialog: false,
      deleteCourseDialog: false,
      courseToAdd: {
        code: '',
        name: '',
        assessments: [],
      },
      courseToDelete: {},
    }
  },
  mounted() {
    console.log('mounted')
    this.loaded = true
  },
  computed: {
    ...mapState('courseManager', ['courses']),
    courseStates() {
      return this.courses.map(course => {
        return {courseCode: course.code, expanded: false}
      })
    },
  },
  methods: {
    ...mapMutations('courseManager', {
      commitAddCourse: 'addCourse',
      commitDeleteCourse: 'deleteCourse',
    }),
    addCourse() {
      this.commitAddCourse({course: this.courseToAdd})
      this.addCourseDialog = false
    },
    deleteCourse() {
      this.commitDeleteCourse({courseCode: this.courseToDelete.code})
      this.deleteCourseDialog = false
    },
  },
}
</script>
