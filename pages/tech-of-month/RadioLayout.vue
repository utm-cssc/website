<template>
  <div style="padding-left: 10px;">
  <!-- Row title -->
    <div
      v-for="childTitle in titles"
      :key="childTitle"
    >
      <h3
        class="my-3 title"
        data-v-16201546=""
        style="color: #606f7b; margin-bottom: 1rem !important;"
      >
        {{ childTitle }}
      </h3>
      <!-- Radio button layout -->
      <div align="center" style="padding-bottom: 30px;">
        <span
          v-for="child in children"
          :key="child"
          style="padding-left: 10px; padding-right: 10px;"
        >
        <!-- Individual radio button -->
          <input
            :id="child+childTitle"
            type="radio"
            :name="childTitle"
            :class="child"
            :value="child+childTitle"
            @click="onChange(child, childTitle)"
          ></input>
          <label class="desc" style="color: #606f7b;">{{ child }}</label>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    children: {
      type: Array,
      default: () => []
    },
    titles: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      // Using a dictionary so it is easier to check what was previously selected for each row
      previouslySelected: {}
    }
  },
  created () {
    this.convertDictionary()
  },
  methods: {
    convertDictionary () {
      // Convery an array to a dictionary
      const dictLen = Object.keys(this.titles).length
      const tempDict = {}
      for (let i = 0; i < dictLen; i++) {
        tempDict[this.titles[i]] = ''
      }
      this.previouslySelected = tempDict
    },
    disableButtions (className, title, status) {
      // Disables/Enables all other radio buttons of the same class name
      const radiosByClass = document.getElementsByClassName(className)
      for (let i = 0; i < radiosByClass.length; i++) {
        if (radiosByClass[i].id !== className + title) {
          radiosByClass[i].disabled = status
        }
      }
    },
    addVote (title) {
      // Checks to see the rankings of the selections (If the user votes 'a' as 'First choice', then it will return 3 for 'a')
      if (title === this.titles[0]) {
        return 3
      } else if (title === this.titles[1]) {
        return 2
      } else if (title === this.titles[2]) {
        return 1
      } else {
        return 0
      }
    },
    onChange (className, title) {
      // Function runs when the user clicks on any of the radio buttons
      let disabledStatus = true
      if (this.previouslySelected[title] === className) {
        // Checks to see if the user selected a radio button that is already checked
        // It will then uncheck the button and enable all the buttons of the same class name
        document.getElementById(className + title).checked = false
        disabledStatus = false
        this.previouslySelected[title] = ''
        this.$parent.vote[className] = 0
      } else if (this.previouslySelected[title] !== className && this.previouslySelected[title] !== '') {
        // Checks to see if the user clicks on a radio button of the same row
        // It will then enable all the buttons with previously checked class name and disable the newly checked button
        this.disableButtions(this.previouslySelected[title], title, false)
        this.previouslySelected[title] = className
        this.$parent.vote[className] = this.addVote(title)
      } else {
        // If the user clicks an unchecked radio button
        this.previouslySelected[title] = className
        this.$parent.vote[className] = this.addVote(title)
      }
      // Will either disable/enable radio buttons of the same class name
      this.disableButtions(className, title, disabledStatus)
    }
  }
}
</script>
