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
    const assessmentName = payload.assessment.name
    console.log(payload)
    const courseIndex = state.courses.findIndex(
      course => course.code === courseCode,
    )
    if (courseIndex === -1) {
      console.log('Not found')
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
    const courseIndex = state.courses.findIndex(
      course => course.code === courseCode,
    )
    if (courseIndex === -1) {
      return
    }
    state.courses[courseIndex].assessments.push(assessment)
  },
  addCourse(state, payload) {
    state.courses.push(payload.course)
  },
  deleteCourse(state, payload) {
    state.courses = state.courses.filter(
      course => course.code !== payload.courseCode,
    )
  },
}

export const actions = {
  editAssessment: (context, payload) => {
    context.commit('deleteAssessment', payload)
    context.commit('addAssessment', payload)
  },
}
