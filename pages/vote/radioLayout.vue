<template>
  <div>
    <div
      v-for="childTitle in titles"
      :key="childTitle"
      >
      {{ childTitle }}
      <br>
      <span
        v-for="child in children"
        :key="child"
      >
      <input
      type="radio"
      :name="childTitle"
      :id="child+childTitle"
      :class="child"
      :value="child+childTitle"
      v-model="selected"
      @click="onChange(child, childTitle)"/>
      <label>{{ child }}</label>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    children: Array,
    titles: Array
  },
  data () {
    return {
      previouslySelected: {
        'First choice': '',
        'Second choice': '',
        'Third choice': ''
      }
    }
  },
  methods: {
    disableButtions (className, title, status) {
      const radiosByClass = document.getElementsByClassName(className)
      for (let i = 0; i < radiosByClass.length; i++) {
        if (radiosByClass[i].id !== className + title) {
          radiosByClass[i].disabled = status
        }
      }
    },
    addVote (title) {
      if (title === this.titles[0]) {
        return 1
      } else if (title === this.titles[1]) {
        return 2
      } else if (title === this.titles[2]) {
        return 3
      } else {
        return 0
      }
    },
    onChange (className, title) {
      let disabledStatus = true
      if (this.previouslySelected[title] === className) {
        document.getElementById(className + title).checked = false
        disabledStatus = false
        this.previouslySelected[title] = ''
        this.$parent.vote[className] = 0
      } else if (this.previouslySelected[title] !== className && this.previouslySelected[title] !== '') {
        this.disableButtions(this.previouslySelected[title], title, false)
        this.previouslySelected[title] = className
        this.$parent.vote[className] = this.addVote(title)
      } else {
        this.previouslySelected[title] = className
        this.$parent.vote[className] = this.addVote(title)
      }
      this.disableButtions(className, title, disabledStatus)
    }
  }
}
</script>
