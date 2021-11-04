export const state = () => ({
  courses: [
    {
      name: 'Introduction to Computer Programming',
      code: 'CSC108',
      assessments: [
        {
          include: true,
          name: 'Labs',
          weight: 30,
          grade: 80,
        },
        {
          include: true,
          name: 'PCRS',
          weight: 15,
          grade: 100,
        },
        {
          include: true,
          name: 'Test 1',
          weight: 10,
          grade: 80,
        },
        {
          include: true,
          name: 'Test 2',
          weight: 10,
          grade: 85,
        },
        {
          include: true,
          name: 'Test - Floating Weight',
          weight: 5,
          grade: 100,
        },
        {
          include: true,
          name: 'Final Exam',
          weight: 30,
          grade: 85,
        },
      ],
    },
  ],
})

export const mutations = {
  deleteAssessment(state, payload) {
    const courseCode = payload.courseCode
    const assessmentName = payload.assessment.name
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
