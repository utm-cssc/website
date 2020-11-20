<template>
  <div>
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
              <v-btn color="primary" text class="mb-2" v-bind="attrs" v-on="on">
                <v-icon color="primary">
                  mdi-plus
                </v-icon>
                Add Assessment
              </v-btn>
            </template>
            <v-card>
              <v-form v-model="validValues">
                <v-card-title>
                  <span class="headline">{{
                    isDialogEditing ? 'Edit Assessment' : 'New Assessment'
                  }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="itemUnderEdit.name"
                          label="Assessment Name"
                          :rules="isDialogEditing ? [] : assessmentNameRules"
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
                <v-btn color="primary" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="primary" text @click="deleteItem">
                  OK
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{item}">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="showDeleteDialog(item.name)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {gpaDenoms} from './constants.js'

export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  data() {
    const validateAssessmentName = this.validateAssessmentName
    return {
      validExpectedScore: true,
      validValues: false,
      alert: false,
      scoreRules: [
        value =>
          (!isNaN(value) && parseInt(value) <= 100 && parseInt(value) >= 0) ||
          'You must input a integer between 0 and 100 (inclusive)',
      ],
      assessmentNameRules: [validateAssessmentName],
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
      gpaDenoms: gpaDenoms,
      assessmentUnderEditName: '',
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
    }
  },
  computed: {
    isDialogEditing() {
      return this.itemUnderEdit.name !== ''
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
    ...mapMutations('courseManager', [
      'addAssessment', //also supports payload `this.nameOfMutation(amount)`
      'deleteAssessment', //also supports payload `this.nameOfMutation(amount)`
      'editAssessment', //also supports payload `this.nameOfMutation(amount)`
    ]),
    validateAssessmentName(value) {
      return (
        this.course.assessments.findIndex(
          assessment => assessment.name === value,
        ) === -1 || 'An assessment with this name already exists'
      )
    },
    closeGrades() {
      this.showGrades = false
    },
    editItem(item) {
      console.log(this.course)
      Object.assign(this.itemUnderEdit, item)
      this.assessmentUnderEditName = item.name
      this.dialog = true
    },
    showDeleteDialog(assessmentName) {
      this.assessmentUnderEditName = assessmentName
      this.dialogDelete = true
    },
    deleteItem() {
      this.deleteAssessment({
        courseCode: this.course.code,
        assessmentName: this.assessmentUnderEditName,
      })
      this.assessmentUnderEditName = ''
      this.closeDelete()
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.itemUnderEdit = Object.assign({}, this.defaultItem)
      })
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.itemUnderEdit = Object.assign({}, this.defaultItem)
      })
    },
    save(course) {
      if (this.assessmentUnderEditName !== '') {
        // index causing error
        // Ensure data model types are consistent
        console.log('editing')
        this.editAssessment({
          courseCode: this.course.code,
          assessment: this.itemUnderEdit,
        })
        this.assessmentUnderEditName = ''
      } else {
        console.log('adding')
        course.assessments.push(this.itemUnderEdit)
      }
      this.close()
    },
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
