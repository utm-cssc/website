export const state = () => ({
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
          weight: 7,
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
          weight: 13,
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
})

export const mutations = {
  deleteAssessment(state, payload) {
    const courseCode = payload.courseCode
    const assessmentName = payload.assessmentName
    const courseIndex = state.courses.findIndex(
      course => course.code === courseCode,
    )
    if (courseIndex === -1) {
      return
    }
    const indexToDelete = state.courses[courseIndex].assessments.findIndex(
      element => element.name === assessmentName,
    )
    console.log(indexToDelete)
    state.courses[courseIndex].assessments.splice(indexToDelete, 1)
  },
  addAssessment(state, payload) {
    const courseCode = payload.courseCode
    const assessment = payload.assessment
    state.courses[courseCode].assessments.push(assessment)
  },
  editAssessment(state, payload) {
    const courseCode = payload.courseCode
    const assessment = payload.assessment
    console.log(courseCode)
    console.log(assessment)
    const courseIndex = state.courses.findIndex(
      course => course.code === courseCode,
    )
    if (courseIndex === -1) {
      return
    }
    const indexToEdit = state.courses[courseIndex].assessments.findIndex(
      element => element.name === assessment.name,
    )
    console.log(indexToEdit)
    state.courses[courseIndex].assessments[indexToEdit] = assessment
  },
}
