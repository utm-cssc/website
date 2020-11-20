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
    state.courses[courseCode].assessments = state.courses[
      courseCode
    ].assessments.filter(assessment => {
      assessment.name !== assessmentName
    })
  },
  addAssessment(state, payload) {
    const courseCode = payload.courseCode
    const assessment = payload.assessment
    state.courses[courseCode].assessments.push(assessment)
  },
  editAssessment(state, payload) {
    const courseCode = payload.courseCode
    const assessment = payload.assessment
    const indexToEdit = state.courses[courseCode].assessments.findIndex(
      element => element.name === assessment.name,
    )
    state.courses[courseCode].assessments[indexToEdit] = assessment
  },
}
