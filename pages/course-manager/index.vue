<template>
  <div class="container">
    <v-data-table :headers="headers" :items="tests" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Grades</v-toolbar-title>
          <v-spacer />
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{on, attrs}">
              <v-btn
                color="var(--color-primary)"
                text
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon color="var(--color-primary)">
                  mdi-plus
                </v-icon>
                Add Test
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
                          v-model="editedItem.test_name"
                          label="Test Name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.grade"
                          label="Grade"
                          :rules="scoreRules"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.weightage"
                          label="Weightage"
                          :rules="scoreRules"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    @click="save"
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
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="primary" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{item}">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <v-form
      v-model="validExpectedScore"
      @submit="submit"
      onSubmit="return false;"
    >
      <div class="d-flex flex-wrap justify-content-between my-5">
        <v-text-field
          v-model="expectedScore"
          class="ml-lg-5"
          label="Expected Overall Score"
          :rules="scoreRules"
        />
        <v-btn
          dark
          color="primary"
          :disabled="!validExpectedScore"
          @click="calculateGrades()"
          >Get Grades!</v-btn
        >
      </div>
    </v-form>
    <v-alert
      :value="alert"
      color="pink"
      border="top"
      transition="scale-transition"
    >
      {{ errorMessage }}
    </v-alert>
    <v-dialog v-model="showGrades" max-width="500px">
      <v-card>
        <v-card-title class="headline pb-5">Grade Summary</v-card-title>
        <v-card-subtitle
          >Need to score:
          <span class="font-weight-bold">{{ scoreRequired }}%</span>
          in the rest of
          <span class="font-weight-bold">{{ percentLeft }}%</span>
          to get
          <span class="font-weight-bold">{{ expectedScore }}%</span>
        </v-card-subtitle>
        <v-card-text>
          Scored: {{ currentPercent }}% <br />
          Lost: {{ percentageLost }}% <br />
          Percent of course completed: {{ currentPercent + percentageLost }}%
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="closeGrades">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    validExpectedScore: true,
    validValues: false,
    alert: false,
    errorMessage: '',
    scoreRequired: 0,
    percentLeft: 0,
    percentageLost: 0,
    currentPercent: 0,
    showGrades: false,
    expectedScore: 100,
    scoreRules: [
      value =>
        (!isNaN(value) && parseInt(value) <= 100 && parseInt(value) >= 0) ||
        'You must input a integer between 0 and 100 (inclusive)',
    ],
    dialog: false,
    dialogDelete: false,
    headers: [
      {text: 'Test Name', value: 'test_name'},
      {text: 'Grade', value: 'grade'},
      {text: 'Weightage', value: 'weightage'},
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    tests: [
      {
        test_name: 'Test 1',
        grade: 85,
        weightage: 20,
      },
      {
        test_name: 'Test 2',
        grade: 100,
        weightage: 20,
      },
      {
        test_name: 'Test 3',
        grade: 90,
        weightage: 20,
      },
    ],
    editedIndex: -1,
    editedItem: {
      test_name: 'Test',
      weightage: 0,
      grade: 0,
    },
    defaultItem: {
      test_name: 'Test',
      weightage: 0,
      grade: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Test' : 'Edit Test'
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
    editItem(item) {
      this.editedIndex = this.tests.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      this.editedIndex = this.tests.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm() {
      this.tests.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tests[this.editedIndex], this.editedItem)
      } else {
        this.tests.push(this.editedItem)
      }
      this.close()
    },
    calculateGrades() {
      const scoreWanted = parseInt(this.expectedScore)
      if (!isNaN(this.expectedScore) && (scoreWanted > 100 || scoreWanted < 0))
        this.callToError(
          'Expected Score not a number or is not between 0 to 100. Please remove or change the expected value.',
        )
      else {
        this.currentPercent = 0
        let overallWeightage = 0
        console.log(this.tests)
        this.tests.forEach(test => {
          const grade = parseInt(test.grade)
          const weightage = parseInt(test.weightage)
          if (!(isNaN(grade) || isNaN(weightage))) {
            overallWeightage += weightage
            this.currentPercent += (grade / 100) * weightage
          }
        })
        this.percentLeft = 100 - overallWeightage
        this.percentageLost = overallWeightage - this.currentPercent
        this.scoreRequired =
          (scoreWanted - this.currentPercent) * (100 / this.percentLeft)
        this.showGrades = true
      }
    },
    callToError(errorMessage) {
      console.log('Error')
      this.errorMessage = errorMessage
      this.alert = true
      setTimeout(() => (this.alert = false), 3000)
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
