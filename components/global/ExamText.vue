<template>
  <div>
    Check out the past exams!
    <div class="exam-icon-container">
      <a
        target="_blank"
        v-b-tooltip.hover
        :title="'Past Exam For: ' + classCode"
        :href="
          'https\:\/\/exams-library-utoronto-ca.myaccess.library.utoronto.ca/simple-search?query=title:' +
            classCode
        "
        class="mr-3 search-engine"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
      >
        <img class="icon mt-0 mb-0" :src="`/icons/exams.svg`" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    classCode: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
a {
  text-decoration: none !important;
}

.exam-icon-container {
  margin-left: auto;
  float: right;
  display: flex;
}

.icon {
  width: 36px;
  height: 36px;
}
</style>
