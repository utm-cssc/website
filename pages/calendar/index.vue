<template>
  <v-container>
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat color="primary">
            <v-btn outlined class="calendar_nav mr-4" @click="setToday">
              Today
            </v-btn>
            <v-btn fab text small class="calendar_nav" @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small class="calendar_nav" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title class="pl-3 calendar_nav" v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{on, attrs}">
                <v-btn outlined color="#ffffff" v-bind="attrs" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="var(--color-primary-dark)"
            :events="monthEvents"
            :event-color="getEventColor"
            event-text-color="#ffffff"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
          />
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card color="grey lighten-4" min-width="350px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <span
                  style="font-size: 16px; color: #525151;"
                  v-html="selectedEvent.details"
                ></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  :color="selectedEvent.color"
                  @click="selectedOpen = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    colors: {
      'Important Dates': '#2a9bd5',
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    monthEvents: [],
    allEvents: [],
  }),
  mounted() {
    this.readCSVData(this.importantDates)
    //this.parseData(this.clubEvents); <- TODO: add colors and parse
  },
  methods: {
    viewDay({date}) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({nativeEvent, event}) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => (this.selectedOpen = true), 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    readCSVData(data) {
      // title, description, start, end, [...] <- tags
      // checks if the event data is returned properly
      if (typeof data === 'string' && data.length > 0) {
        const lines = data.split('\n').slice(1)
        const output = lines.map(line => {
          const current = line.split('|')
          // checks for error in the event
          if (current.length >= 4) {
            const event = {
              color: this.colors['Important Dates'],
              name: current[0],
              details: current[1],
              start: `${current[2]} 00:00`,
              end: `${current[3]} 24:00`,
              tags: this.parseTags(current.slice(4)),
              timed: true,
            }
            return event
          }
          return {}
        })
        this.monthEvents.push(...output.slice(0, output.length - 1))
      }
    },
    parseTags(tags) {
      /**
       * Takes in list of tags, returns cleaned data
       * eg: "Summer" -> ["Summer"]
       * ["Summer, Financial"] -> ["Summer", "Financial"]
       */
      return []
    },
  },
  async asyncData({$axios}) {
    const importantDates = await $axios
      .$get(
        'https://raw.githubusercontent.com/utm-cssc/website/integrate-calendar/content/important-dates/important_dates.csv',
      )
      .then(res => res) //Todo: change develop to master
    const clubEvents = await $axios
      .$get(
        'https://spreadsheets.google.com/feeds/list/1KxxUGm1z_w0lDFkDbFhdSY2coxIGeZQMQbAwqzPA-4o/1/public/values?alt=json',
      )
      .then(res => res.feed.entry)
    return {importantDates, clubEvents}
  },
}
</script>

<style scoped>
.calendar_nav {
  color: white !important;
}
</style>
