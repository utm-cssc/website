---
title: Course Manager
desc: Allows users to calculate and to keep track of their course marks
icon: /docs/best.svg
link: course-manager
---

# Course Manager

The course manager is used to calculate the percentage of multiple courses you
are currently taking. It gives you the percentage required to get a certain GPA
in a course.

## Major Components

### Vuex

Vuex is a state management pattern + library for Vue.js applications. It serves
as a centralized store for all the components in an application, with rules
ensuring that the state can only be mutated in a predictable fashion.

It is used to store courses and their associated grades.

<grid-1-x-2
img-src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.onlinecode.org%2Fwp-content%2Fuploads%2F2017%2F05%2Fflow-of-vuejs-vuex.png"
link="https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance" 
desc="In this course, you will learn the fundamentals of Vue as you build a product page!"
button="Check it out!"></grid-1-x-2>

### Script

The following script is used to get the grade that you'll need to get a desired
score.

```
calculateGradeData(courseData, desiredScore) {
      let currentWeight = 0
      let percentScored = 0
      courseData.assessments.forEach(assessment => {
        const grade = parseInt(assessment.grade)
        const weight = parseInt(assessment.weight)
        currentWeight += weight
        percentScored += (grade / 100) * weight
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
    }
```

### Vuex Persist

We use the vuex persist library to store your current session by using cookies
and the local storage. (i.e. When you visit the website again, you'll be able to
view all your previous course entries from your last session.)

<grid-1-x-2
img-src="https://octref.gallerycdn.vsassets.io/extensions/octref/vetur/0.24.0/1583367754374/Microsoft.VisualStudio.Services.Icons.Default"
link="https://championswimmer.in/vuex-persist/"
desc="This is the documentation of vuex persist"
button="Check it out!"></grid-1-x-2>
