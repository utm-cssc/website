---
sidebar: false
home: true
heroText: UTM Courses
tagline:
  We encourage students to supplement the learning materials from class with
  resources from the wider internet.
---

<ResourcesGrid :items="courses" color="#103667"/>

<script>
export default {
  data() {
    return {
      courses: [
        {
          title: "CSC207",
          icon: "csc207.svg",
          link: "/resources/csc207/",
          desc: "Intro to Software Design"
        },{
          title: "CSC358",
          icon: "csc358.svg",
          link: "/resources/csc358/",
          desc: "Principles of Computer Networks"
        },{
          title: "MAT102",
          icon: "mat102.svg",
          link: "/resources/mat102/",
          desc: "Intro to Mathematical Proofs"
        },{
          title: "CSC148",
          icon: "csc148.svg",
          link: "/resources/csc148/",
          desc: "Intro to Computer Science"
        },,{
          title: "STA256",
          icon: "sta256.svg",
          link: "/resources/sta256/",
          desc: "Probability and Statistics I"
        },
      ]
    }
  }
}
</script>
