<template>
  <div>
    <h1 class="cssc-heading text-center">Glossary</h1>
    <vue-typed-js :strings="items">
      <p
        class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto text-center"
      >
        What is <span class="typing ml-1"></span>?
      </p>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'an API',
        'a Full Stack Developer',
        'Big Data',
        'a Neural Network',
        'Vue.js',
        'a Data Structure',
      ],
    }
  },
}
</script>
