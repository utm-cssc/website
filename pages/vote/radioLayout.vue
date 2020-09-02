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
    onChange (className, title) {
      // document.getElementById(test).checked = false
      // document.getElementById(test).disabled = true
      // const radiosByName = document.getElementsByName(name)
      // for (let j = 0; j < radiosByName.length; j++) {
      //   radiosByName[j].disabled = false
      // }
      let disabledStatus = true
      if (this.previouslySelected[title] === className) {
        document.getElementById(className + title).checked = false
        disabledStatus = false
        this.previouslySelected[title] = ''
      } else if (this.previouslySelected[title] !== className && this.previouslySelected[title] !== '') {
        this.disableButtions(this.previouslySelected[title], title, false)
        this.previouslySelected[title] = className
      } else {
        this.previouslySelected[title] = className
      }

      this.disableButtions(className, title, disabledStatus)
      // Setting other radio buttons status enable/disable

      // alert(JSON.stringify(this.previouslySelected))
    }
  }
}
</script>
