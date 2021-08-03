<template>
  <v-container>
    <v-row class="fill-height">
      <template v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs">
        <v-card-title> Filters </v-card-title>
        <template v-for="filter in filters">
          <v-checkbox
            :key="filter"
            :value="filter"
            v-model="selectedFilters"
            :label="filter"
            :color="colors[filter]"
          />
        </template>
      </template>
      <template v-else>
        <v-card class="p-3" max-width="400">
          <v-card-title> Filters </v-card-title>
          <template v-for="filter in filters">
            <v-checkbox
              :key="filter"
              :value="filter"
              v-model="selectedFilters"
              :label="filter"
              :color="colors[filter]"
            />
          </template>
        </v-card>
      </template>
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
            :events="filteredEvents"
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
import {
  IMPORTANT_DATES_CSV,
  GITHUB_CLUB_FORM_RESPONSES,
  CALENDAR_COLORS,
  CLUBS,
} from '~/constants'

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
    colors: CALENDAR_COLORS,
    filters: ['Important Dates', ...CLUBS],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    monthEvents: [],
    allEvents: [],
    selectedFilters: [
      'CSSC',
      'UTM DSC',
      'MCSS',
      'WiSC',
      'UTM Robotics',
      'UTMSAM',
    ],
  }),
  mounted() {
    this.readCSVData(this.importantDates)
    this.readEventsData(this.clubEvents)
  },
  computed: {
    filteredEvents() {
      return this.monthEvents.filter(event =>
        this.selectedFilters.includes(event.type),
      )
    },
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
            let name =
              current[0]?.[0] == '"'
                ? current[0].slice(1, current[0].length - 1)
                : current[0]
            const event = {
              color: this.colors['Important Dates'],
              name: name,
              type: 'Important Dates',
              details: name,
              start: new Date(`${current[2]} 00:00`),
              end: new Date(`${current[3]} 23:59`),
              tags: this.parseImportantDatesTags(current.slice(4)),
              timed: false,
            }
            return event
          }

          return {}
        })
        this.monthEvents.push(...output.slice(0, output.length - 1))
      }
    },
    readEventsData(data) {
      /**
       *  club, name, description, start date, end date,
       *  start time, end time, [...] <- tags
       */

      // checks if the event data is returned properly
      if (typeof data === 'object' && data.length > 0) {
        const mappedEvents = data.map(entry => {
          const startTime = entry?.gsx$starttime?.$t
          const endTime = entry?.gsx$endtime?.$t
          const startDate = entry.gsx$startdate?.$t
          const endDate = entry.gsx$enddate?.$t
          const clubName = entry.gsx$club?.$t
          const eventName = entry.gsx$eventname?.$t
          const description = entry.gsx$description.$t

          const start = new Date(`${startDate} ${startTime}`)
          const end = new Date(`${endDate} ${endTime}`)
          const allDay = startTime === '' && endTime === ''
          const endIsAfterStart = start < end || (!(end < start) && allDay)

          // Checks for errors in the event
          if (
            !endIsAfterStart ||
            (startTime === '' && endTime !== '') ||
            (startTime !== '' && endTime === '')
          ) {
            return null
          }

          return {
            color: this.colors[clubName],
            name: eventName,
            details: description,
            start: start,
            end: end,
            type: clubName,
            tags: this.parseClubTags(entry.gsx$searchtags.$t),
            timed: !allDay,
          }
        })
        const output = mappedEvents.filter(event => event !== null)
        this.monthEvents.push(...output)
      }
    },
    parseImportantDatesTags(tags) {
      /**
       * Takes in list of tags, returns cleaned data
       * eg: "Summer" -> ["Summer"]
       * ["Summer, Financial"] -> ["Summer", "Financial"]
       */
      return []
    },
    parseClubTags(tags) {
      /**
       * Takes in a list of tags, returns cleaned data
       * "Web" -> ["Web"]
       * "Web, React" -> ["Web", "React"]
       */
      return []
    },
  },
  async asyncData({$axios}) {
    const importantDates = await $axios
      .$get(IMPORTANT_DATES_CSV)
      .then(res => res)
    const clubEvents = await $axios
      .$get(GITHUB_CLUB_FORM_RESPONSES)
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
