<template>
  <div class="container">
    <div v-for="course in courses" :key="course.code">
      <h1>{{ course.code }}: {{ course.name }}</h1>
      <br />
      <h3>
        In the remaining
        <span class="font-weight-bold"
          >{{ calculatePercentageLeft(course) }}%</span
        >
      </h3>
      <div v-for="gpaDenom in gpaDenoms" :key="gpaDenom.name">
        <div
          v-if="calculateGradeData(course, gpaDenom.minScore).requiredScore > 0"
        >
          <p>
            You need a
            <span class="font-weight-bold"
              >{{
                calculateGradeData(course, gpaDenom.minScore).requiredScore
              }}
              % </span
            >the course to score a {{ gpaDenom.name }}
          </p>
        </div>
      </div>
      <v-data-table
        :headers="headers"
        :items="course.assessments"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>
              Assessments
            </v-toolbar-title>
            <v-spacer />
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{on, attrs}">
                <v-btn
                  color="primary"
                  text
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="primary">
                    mdi-plus
                  </v-icon>
                  Add Assessment
                </v-btn>
              </template>
              <v-card>
                <v-form v-model="validValues">
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="itemUnderEdit.name"
                            label="Assessment Name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="itemUnderEdit.grade"
                            label="Grade"
                            :rules="scoreRules"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="itemUnderEdit.weight"
                            label="Weight"
                            :rules="scoreRules"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn
                      color="primary"
                      text
                      @click="save(course)"
                      :disabled="!validValues"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline">
                  Are you sure you want to delete this item?
                </v-card-title>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="primary" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="primary" text @click="deleteItemConfirm">
                    OK
                  </v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{item}">
          <v-icon small class="mr-2" @click="editItem(course, item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(course, item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    validExpectedScore: true,
    validValues: false,
    alert: false,
    scoreRules: [
      value =>
        (!isNaN(value) && parseInt(value) <= 100 && parseInt(value) >= 0) ||
        'You must input a integer between 0 and 100 (inclusive)',
    ],
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Assessment Name',
        value: 'name',
      },
      {
        text: 'Grade',
        value: 'grade',
      },
      {
        text: 'Weight',
        value: 'weight',
      },
      {
        text: 'Actions',
        value: 'actions',
        sortable: false,
      },
    ],
    gpaDenoms: [
      {
        name: '4.0',
        minScore: 85,
      },
      {
        name: '3.7',
        minScore: 80,
      },
      {
        name: '3.3',
        minScore: 77,
      },
      {
        name: '3.0',
        minScore: 73,
      },
      {
        name: '2.7',
        minScore: 70,
      },
      {
        name: '2.3',
        minScore: 67,
      },
      {
        name: '2.0',
        minScore: 63,
      },
      {
        name: '1.7',
        minScore: 60,
      },
      {
        name: '1.3',
        minScore: 57,
      },
      {
        name: '1.0',
        minScore: 53,
      },
      {
        name: '0.7',
        minScore: 50,
      },
      {
        name: '0.0',
        minScore: 0,
      },
    ],
    courses: [
      {
        name: 'Introduction to Computer Science',
        code: 'CSC148',
        assessments: [
          {
            name: 'Peerwise',
            weight: 6,
            grade: 100,
          },
          {
            name: 'Preps',
            weight: 9,
            grade: 100,
          },
          {
            name: 'Exercise 1',
            weight: 5,
            grade: 100,
          },
          {
            name: 'Test 1',
            weight: 10,
            grade: 80,
          },
          {
            name: 'Assignment 1',
            weight: 15,
            grade: 100,
          },
          {
            name: 'Exercise 2',
            weight: 5,
            grade: 100,
          },
          {
            name: 'Test 2',
            weight: 10,
            grade: 84,
          },
          {
            name: 'Assignment 2',
            weight: 15,
            grade: 90,
          },
        ],
      },
    ],
    editedIndex: -1,
    itemUnderEdit: {
      name: '',
      weight: 0,
      grade: 0,
    },
    defaultItem: {
      name: '',
      weight: 0,
      grade: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Assessment' : 'Edit Assessment'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
    showGrades(val) {
      val || this.closeGrades()
    },
  },

  methods: {
    closeGrades() {
      this.showGrades = false
    },
    editItem(course, item) {
      this.editedIndex = course.assessments.indexOf(item)
      this.itemUnderEdit = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(course, item) {
      this.editedIndex = course.assessments.indexOf(item)
      this.itemUnderEdit = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm() {
      this.courses.assessments.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.itemUnderEdit = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.itemUnderEdit = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save(course) {
      if (this.editedIndex > -1) {
        // Ensure data model types are consistent
        Object.assign(course.assessments[this.editedIndex], this.itemUnderEdit)
      } else {
        course.assessments.push(this.itemUnderEdit)
      }
      this.close()
    },
    /*
      courseData: {
        code:
        name
        assessments:
      }

      return {
        requiredScore:
        percentageLost:
        percentageScored:
        percentageLeft:
        percentageComplete:
      }
    */
    calculateGradeData(courseData, desiredScore) {
      let currentWeight = 0
      let currentPercentage = 0
      courseData.assessments.forEach(assessment => {
        const grade = parseInt(assessment.grade)
        const weight = parseInt(assessment.weight)
        currentWeight += weight
        currentPercentage += (grade / 100) * weight
      })
      // Overall Percentages
      const percentLeft = 100 - currentWeight
      const percentageLost = currentWeight - currentPercentage

      const scoreRequired = (
        (desiredScore - currentPercentage) *
        (100 / percentLeft)
      ).toFixed(2)
      return {
        requiredScore: scoreRequired,
        percentageLost: percentageLost,
        percentageScored: currentPercentage,
        percentageLeft: percentLeft,
        percentageComplete: percentageLost + currentPercentage,
      }
    },
    calculatePercentageLeft(course) {
      const totalPercent = course.assessments.reduce((total, assessment) => {
        console.log(assessment.weight)
        return total + parseInt(assessment.weight)
      }, 0)
      console.log('totalPercent ' + totalPercent)
      return 100 - totalPercent
    },
  },
}
</script>

<style scoped>
.v-text-field {
  margin: 0;
  padding: 0;
  max-width: 200px;
}
</style>
