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
          style="padding-left: 10px; padding-right: 10px;"
        >
        <!-- Individual radio button -->
          <b-form-group>
            <b-form-radio-group
              :id="childTitle"
              v-model="selected[childTitle]"
              :options="children"
              :name="childTitle"
              @input="onChange(childTitle)"
            ></b-form-radio-group>
          </b-form-group>
          {{ selected }}
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
      previouslySelected: {},
      selected: {}
    }
  },
  created () {
    this.convertDictionary()
    console.log(JSON.stringify(this.previouslySelected))
  },
  methods: {
    reset () {
      const allRadios = document.getElementsByTagName('input')
      console.log(this.children)
      let index = 0
      for (let i = 0; i < allRadios.length; i++) {
        allRadios[i].disabled = false
        allRadios[i].checked = false
      }
      for (const key in this.previouslySelected) {
        this.previouslySelected[key] = ''
        this.$parent.vote[this.children[index]] = 0
        index += 1
      }
    },
    convertDictionary () {
      // Convery an array to a dictionary
      const dictLen = Object.keys(this.titles).length
      for (let i = 0; i < dictLen; i++) {
        this.$set(this.previouslySelected, this.titles[i], '')
      }
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
    onChange (title) {
      // console.log(JSON.stringify(this.previouslySelected))
      console.log(title)
      console.log(this.selected[title])
    }
  }
}
</script>
