<template>
  <div>
    <div>
      <h2 class="font-bold mb-4">
        Your current grade is
        {{ calculateGradeData(course, 100).percentScored }}%
      </h2>
      <h3 class="flex align-items-center text-xl font-bold mb-4">
        {{ 100 - calculatePercentageLeft(course) }}% Completed:
        <span class="text-green-500 ml-3"
          ><v-icon>mdi-arrow-up</v-icon>{{ calculatePercentageScored(course) }}%
        </span>
        <span class="text-red-500"
          ><v-icon>mdi-arrow-down</v-icon
          >{{
            (
              100 -
              calculatePercentageLeft(course) -
              calculatePercentageScored(course)
            ).toFixed(2)
          }}%
        </span>
      </h3>
      <div v-if="calculateGradeData(course, 100).percentLeft !== 0">
        <v-row>
          <h3 class="font-weight-bold ml-4 mb-3">What do I need for a</h3>
          <v-select
            v-model="selectedGpaDenom"
            :items="
              gpaDenoms
                .filter(
                  x => calculateGradeData(course, x.minScore).requiredScore > 0,
                )
                .map(x => x.name)
            "
            class="ml-2"
          />?
        </v-row>
        <div v-if="selectedGpaDenom != ''">
          <h3 class="font-weight-bold mb-3">
            In the remaining {{ calculatePercentageLeft(course) }}% of the
            course, you need
          </h3>
          <div
            class="m-3"
            v-for="gpaDenom in gpaDenoms.filter(
              gpaDenom =>
                selectedGpaDenom == gpaDenom.name &&
                calculateGradeData(course, gpaDenom.minScore).requiredScore >
                  0 &&
                calculateGradeData(course, gpaDenom.minScore).requiredScore <=
                  100,
            )"
            :key="gpaDenom.name"
          >
            <p>
              <span class="font-weight-bold"
                >{{
                  calculateGradeData(course, gpaDenom.minScore).requiredScore
                }}
                %
              </span>
              for a
              <span class="font-weight-bold"> {{ gpaDenom.name }} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="course.assessments"
      class="elevation-1 mt-5"
      :sort-by="['name']"
    >
      <template v-slot:top>
        <v-toolbar class="flex align-center" flat>
          <v-toolbar-title> Assessments </v-toolbar-title>
          <v-spacer />
          <v-dialog v-model="editAssessmentDialog" max-width="500px">
            <template v-slot:activator="{on, attrs}">
              <v-btn color="primary" text class="mb-2" v-bind="attrs" v-on="on">
                <v-icon color="primary"> mdi-plus </v-icon>
                Add Assessment
              </v-btn>
            </template>
            <v-card>
              <v-form v-model="valuesValid">
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
                          v-model="assessmentUnderEdit.name"
                          label="Assessment Name"
                          :rules="isDialogEditing ? [] : assessmentNameRules"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="assessmentUnderEdit.grade"
                          label="Grade"
                          :rules="scoreRules"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="assessmentUnderEdit.weight"
                          label="Weight"
                          :rules="scoreRules"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer />
                  <v-btn color="primary" text @click="close"> Cancel </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="save(course)"
                    :disabled="!valuesValid"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
          <v-dialog v-model="deleteAssessmentDialog" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                Are you sure you want to delete this assessment?
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="primary" text @click="deleteAssessment"
                  >Yes</v-btn
                >
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{item}" class="justify-center">
        <v-row>
          <v-checkbox v-model="item.include"></v-checkbox>
          <v-icon small class="mr-2" @click="editAssessment(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="showDeleteDialog(item.name)">
            mdi-delete
          </v-icon>
        </v-row>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
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
      valuesValid: false,
      alert: false,
      scoreRules: [
        value =>
          (!isNaN(value) && parseInt(value) <= 100 && parseInt(value) >= 0) ||
          'You must input a integer between 0 and 100 (inclusive)',
      ],
      assessmentNameRules: [validateAssessmentName],
      editAssessmentDialog: false,
      deleteAssessmentDialog: false,
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
      selectedGpaDenom: '',
      assessmentUnderEditName: '',
      assessmentUnderEdit: {
        include: true,
        name: '',
        weight: 0,
        grade: 0,
      },
      defaultItem: {
        include: true,
        name: '',
        weight: 0,
        grade: 0,
      },
    }
  },
  computed: {
    isDialogEditing() {
      return this.assessmentUnderEdit.name !== ''
    },
    gradeData() {
      return this.gpaDenoms.map(gpaDenom => {
        return {
          gpaDenom: gpaDenom,
          gradeData: this.calculateGradeData(this.course, gpaDenom.minScore),
        }
      })
    },
  },

  watch: {
    editAssessmentDialog(val) {
      val || this.close()
    },
    deleteAssessmentDialog(val) {
      val || this.closeDelete()
    },
    showGrades(val) {
      val || this.closeGrades()
    },
  },

  methods: {
    ...mapMutations('courseManager', {
      commitAddAssessment: 'addAssessment',
      commitDeleteAssessment: 'deleteAssessment',
    }),
    ...mapActions('courseManager', {dispatchEditAssessment: 'editAssessment'}),
    validateAssessmentName(value) {
      return (
        this.course.assessments.findIndex(
          assessment => assessment.name === value,
        ) === -1 || 'An assessment with this name already exists'
      )
    },
    calculateGradeData(courseData, desiredScore) {
      let currentWeight = 0
      let percentScored = 0
      courseData.assessments.forEach(assessment => {
        if (assessment.include) {
          const grade = parseInt(assessment.grade)
          const weight = parseInt(assessment.weight)
          currentWeight += weight
          percentScored += (grade / 100) * weight
        }
      })
      // Overall Percentages
      const percentLeft = 100 - currentWeight
      // const percentLost = currentWeight - percentScored

      const scoreRequired = (
        (desiredScore - percentScored) *
        (100 / percentLeft)
      ).toFixed(2)
      const returnPayload = {
        requiredScore: scoreRequired,
        percentScored: percentScored.toFixed(2),
        percentLeft: percentLeft,
      }

      return returnPayload
    },
    closeGrades() {
      this.showGrades = false
    },
    editAssessment(assessment) {
      Object.assign(this.assessmentUnderEdit, assessment)
      this.assessmentUnderEditName = assessment.name
      this.editAssessmentDialog = true
    },
    showDeleteDialog(assessmentName) {
      this.assessmentUnderEditName = assessmentName
      this.deleteAssessmentDialog = true
    },
    deleteAssessment() {
      const assessmentIndex = this.course.assessments.findIndex(assessment => {
        return assessment.name === this.assessmentUnderEditName
      })
      const assessment = this.course.assessments[assessmentIndex]
      this.commitDeleteAssessment({
        courseCode: this.course.code,
        assessment: assessment,
      })
      this.assessmentUnderEditName = ''
      this.closeDelete()
    },
    close() {
      this.editAssessmentDialog = false
      this.$nextTick(() => {
        this.assessmentUnderEdit = Object.assign({}, this.defaultItem)
      })
    },
    closeDelete() {
      this.deleteAssessmentDialog = false
      this.$nextTick(() => {
        this.assessmentUnderEdit = Object.assign({}, this.defaultItem)
      })
    },
    save(course) {
      if (this.assessmentUnderEditName !== '') {
        // index causing error
        // Ensure data model types are consistent
        this.dispatchEditAssessment({
          courseCode: this.course.code,
          assessment: this.assessmentUnderEdit,
        })
        this.assessmentUnderEditName = ''
      } else {
        this.commitAddAssessment({
          courseCode: this.course.code,
          assessment: this.assessmentUnderEdit,
        })
        this.assessmentUnderEditName = ''
      }
      this.close()
    },
    calculatePercentageLeft(course) {
      let totalPercent = 0
      course.assessments.forEach(assessment => {
        if (assessment.include) {
          totalPercent += parseInt(assessment.weight)
        }
      })
      return 100 - totalPercent
    },
    calculatePercentageScored(course) {
      let totalPercent = 0
      course.assessments.forEach(assessment => {
        if (assessment.include) {
          totalPercent += (assessment.grade / 100) * assessment.weight
        }
      })
      return totalPercent.toFixed(2)
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
