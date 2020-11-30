---
title: Course Resources
desc: Guidelines when creating course resource pages
icon: /docs/online-course.svg
link: course-resources
---

# Course Resource

Course resources are pages dedicated for courses that are offered at UTM. The
course resource pages include information about the course and additional
resources to help the students succeed in the course.

### Template for creating course resource pages

**Course Code: Class Name**

**Prerequisite**

- Display all the prerequisite courses and properly link them to their
  corresponding course resource page

**Course Website**

- Attach the latest course website by using the grid-1-x-2 component
  - An in-depth tutorial on how to use the grid components can be found
    [here](./grid-components)

**Display the past exam resource using the ExamText component:**

**ExamText Props:**

| Name       | Type   | Description | Default |
| ---------- | ------ | ----------- | ------- |
| class-code | String | Course Code | ""      |

Example:

<ExamText class-code="CSC108"\></ExamText\>

**What is it about**

- A quick summary that covers the important materials that are taught in the
  class
- A quick description of what students can do after taking this course, for
  example, what kind of problems they can solve, or what kind of programs they
  can create

**Topics in the course**

- List out all the topics that are taught in the course
- A good place to look for the course topics is the course syllabus, or on the
  latest course website

**Resources**

- List resources that students can use to improve their skills
  - These resources can either be from youtube videos or an in-depth online
    tutorial
- DO NOT put any lab or course content material, this includes:
  - Lecture recordings
  - Lecture notes
  - etc
- To display resources, please use either of the options:

  - The [grid-1-x-2](./grid-components) component
  - The [VideoContainer](./video-container) component

**Courses available after**

- Use the Accordian component to display the courses available after the current
  course
- Generally, a good start to determine what course are available afterwards is
  to look at what courses require this current course as a prerequisite

**Accordion Prop:**

| Name | Type          | Description                             | Default |
| ---- | ------------- | --------------------------------------- | ------- |
| data | Array[String] | Each item in the array is a course code | []      |

Example:

<Accordion :data="['CSC148']"\></Accordion\>

### Example

![Course Example](https://i.imgur.com/JdgFMIj.png)

For a more detailed example, you can check out the
[CSC108 course resource page](/resources/csc108)
