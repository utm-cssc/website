---
title: Course Resource
desc: Informs users on how to create Course Resources
icon: /docs/online-course.svg
link: course-resource
---

# Course Resource

Course resources are pages dedicated for courses that are offered at UTM. The
course resource pages include information about the course and resources to help
the students suceed in the course.

### Template for creating course resource pages

**\# Course Code: Class Title**

**\#### Prerequisite**

- Display all the prerequisites courses to this course and properly link them to
  their corresponding course resource page

**Course Website**

- Attach the latest course website that is available using the grid-1-x-2
  component
  - An indepth tutorial on how to use grid components can be found
    [here](./grid-components)

**Display the past exam resource using the ExamText component:**

**ExamText Prop:**

| Name       | Type   | Description | Default |
| ---------- | ------ | ----------- | ------- |
| class-code | String | Course Code | ""      |

Example:

<ExamText class-code="CSC108"\></ExamText\>

**\### What is it about**

- A quick summary that covers the important materials that are taught in the
  class
- A quick description of what students can do after taking this course, for
  example, what kind of problems they can solve, or what kind of programs they
  can create

**\### Topics in the course**

- List out all the topics that are taught in the course
- A good place to look for topics is the course syllabus, or on the latest
  course website

**\### Resources**

- List resources that students can use to improve their skills
  - These resources can be from either youtube videos, or an indepth tutorial
    found online
- DO NOT put any lab or course contents, this includes:
  - Lecture recordings
  - Lecture notes
  - Lecture notes
  - etc
- To display resources, please use either of the options:

  - The grid-1-x-2 component
  - Embed youtube videos
    - To embed a youtube video:
      - On the desired youtube video, select Share
      - Select Embed ![Embed](https://i.imgur.com/76unLt6.png)
      - Copy the given script
      - Paste the code into the desired placement
      - Adjust the width to 100% and height to 500
    - For embed youtube video, please provide a title
  - Example:

  ```
  <iframe
      width="100%"
      height="500"
      src="https://www.youtube.com/embed/SS-9y0H3Si8"
      frameborder="0"
      allow="accelerometer;
      autoplay; clipboard-write;
      encrypted-media; gyroscope;
      picture-in-picture"
      allowfullscreen>
  </iframe>
  ```

**\### Courses available after**

- Use the Accordian component to display the courses available after the current
  course
- Generally a good start to determine what course are available afterward is to
  look at what courses require this current course as a prerequisite

**Accordion Prop:**

| Name | Type  | Description                             | Default |
| ---- | ----- | --------------------------------------- | ------- |
| data | Array | Each item in the array is a course code | []      |

Example:

<Accordion :data="['CSC148']"\></Accordion\>

### Example

![Course Example](https://i.imgur.com/JdgFMIj.png)

For a more detailed example, please visit the
[CSC108 course resource page](/resources/csc108)
