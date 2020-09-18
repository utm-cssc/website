<template>
  <div style="padding-left: 10px;">
  <!-- Row title -->
    <div
      v-for="(childTitle, index) in titles"
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
      <div class="container" align="center">
        <span
          v-for="child in children"
          :key="child"
          style="padding-left: 20px; padding-right: 20px;"
        >
        <!-- Individual radio button -->
          <label class="descContainers" style="color: #606f7b;">{{ child }}
              <input
              :id="child+childTitle"
              type="radio"
              :name="childTitle"
              :class="child"
              :value="3 - index"
              @click="onChange(child, childTitle)"
            ></input>
            <span class="radioBtn"></span>
          </label>
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
    reset () {
      // Resets all radio butotons
      const allRadios = document.getElementsByTagName('input')
      for (let i = 0; i < allRadios.length; i++) {
        allRadios[i].disabled = false
        allRadios[i].checked = false
      }
      let index = 0
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
    onChange (className, title) {
      // Function runs when the user clicks on any of the radio buttons
      const clickedItem = document.getElementById(className + title)
      let disabledStatus = true
      // Checks to see if the user selected a radio button that is already checked
      if (this.previouslySelected[title] === className) {
        // It will then uncheck the button and enable all the buttons of the same class name
        clickedItem.checked = false
        disabledStatus = false
        this.previouslySelected[title] = ''
        this.$parent.vote[className] = 0
      // Checks to see if the user clicks on a radio button of the same row
      } else if (this.previouslySelected[title] !== className && this.previouslySelected[title] !== '') {
        // It will then enable all the buttons with previously checked class name and disable the newly checked button
        this.disableButtions(this.previouslySelected[title], title, false)
        this.previouslySelected[title] = className
        this.$parent.vote[className] = clickedItem.value
      // If the user clicks an unchecked radio button
      } else {
        this.previouslySelected[title] = className
        this.$parent.vote[className] = clickedItem.value
      }
      // Will either disable/enable radio buttons of the same class name
      this.disableButtions(className, title, disabledStatus)
    }
  }
}
</script>

</script>
<style scoped>
.container {
  padding-top: 40px;
  padding-bottom: 40px;
}

/* Customize the container */
.descContainers {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.descContainers input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.radioBtn {
  position: absolute;
  top: 10px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* Hover effects */
.descContainers:hover input ~ .radioBtn {
  background-color: #00d097;
  transition-duration: 1s;
}

/* Checked radio button */
.descContainers input:checked ~ .radioBtn {
  background-color: #009b68;
  transition-duration: 1s;
}

/* disabled radio button */
.descContainers input:disabled ~ .radioBtn {
  opacity: 50%;
  background-color: gray;
  transition-duration: 1s;
}

/* Create the indicator for when the button is checked */
.radioBtn::after {
  content: "";
  position: absolute;
  display: none;
}

/* Style the indicator  */
.descContainers .radioBtn::after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

/* Show the indicator when checked */
.descContainers input:checked ~ .radioBtn::after {
  display: block;
}

@media (max-width: 576px) {
  .descContainers {
    display: block;
  }

  .container {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
  }
}
</style>
