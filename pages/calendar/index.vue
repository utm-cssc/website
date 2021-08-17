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
            <v-autocomplete
              placeholder="Search for Events"
              solo
              prepend-inner-icon="mdi-magnify"
              clearable
              :search-input.sync="searchQuery"
              :items="searchResults"
              :loading="searching"
              @change="handleSelect"
              hide-no-data
              class="pt-8 pl-5 pr-5"
            >
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-content>
                    <v-list-item-title
                      v-html="data.item.text"
                    ></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
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
import {GITHUB_CLUB_FORM_RESPONSES, CALENDAR_COLORS, CLUBS} from '~/constants'
import Fuse from 'fuse.js'
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
    searchQuery: '',
    searching: false,
    searchEntries: [],
  }),
  mounted() {
    this.readEventsData(this.clubEvents)
    this.readCSVData(this.importantDates)
  },
  computed: {
    filteredEvents() {
      return this.monthEvents.filter(event =>
        this.selectedFilters.includes(event.type),
      )
    },
    fuseCollection() {
      return new Fuse(this.filteredEvents, {
        keys: ['name', 'details'],
        ignoreLocation: true,
      })
    },
    searchResults() {
      const searchResults =
        this.searchEntries &&
        this.searchEntries.map(result => {
          let text = result.item.name
          if (text.length > 75) {
            text = text.slice(0, 75) + '...'
          }
          return {
            text: `${text}`,
            value: `${result.item.start}`,
          }
        })
      return searchResults.slice(0, 5)
    },
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.searchEntries = []
        return
      }
      this.searchEntries = this.fuseCollection.search(searchQuery)
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
    handleSelect(e) {
      if (!e) return
      const date = new Date(e)
      this.focus = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .split('T')[0]
      this.type = '4day'
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
      if (Array.isArray(data) & (data.length > 0)) {
        const output = data.map(
          ({
            Description: description,
            Title: title,
            'Start Date': start,
            'End Date': end,
            Tags: tags,
          }) => {
            const event = {
              color: this.colors['Important Dates'],
              name: title,
              type: 'Important Dates',
              details: description,
              start: new Date(`${start} 00:00`.replace(/ /g, 'T')),
              end: new Date(`${end} 23:59`.replace(/ /g, 'T')),
              tags: this.parseImportantDatesTags(tags),
              timed: false,
            }
            return event
          },
        )

        this.monthEvents.push(...output)
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

          const start = new Date(`${startDate} ${startTime}`.replace(/ /g, 'T'))
          const end = new Date(`${endDate} ${endTime}`.replace(/ /g, 'T'))
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
  async asyncData({$axios, $content}) {
    const importantDates = await $content('important-dates')
      .only(['body'])
      .fetch()
    const clubEvents = await $axios
      .$get(GITHUB_CLUB_FORM_RESPONSES)
      .then(res => res?.feed?.entry)
      .catch(err => console.log(err))
    return {importantDates: importantDates?.[0]?.body, clubEvents}
  },
}
</script>

<style scoped>
.calendar_nav {
  color: white !important;
}
</style>
