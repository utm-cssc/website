<template>
  <v-container>
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat color="var(--color-primary)">
            <v-btn outlined class="calendar_nav mr-4" @click="setToday">
              Today
            </v-btn>
            <v-btn fab text small class="calendar_nav" @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small class="calendar_nav" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title class="pl-3 calendar_nav"  v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  color="#ffffff"
                  v-bind="attrs"
                  v-on="on"
                >
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
            color="var(--color-primary-light)"
            :events="monthEvents"
            :event-color="getEventColor"
            event-text-color="#ffffff"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"/>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="var(--color-primary)"
                  @click="selectedOpen = false"
                >
                  Cancel
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
  // async asyncData ({ $content, params, error }) {
  //   const calendarData = await $content('calendar').fetch()
  //   console.log(calendarData)
  //   let allEvents = calendarData.map((club) => {
  //     return club.body.map((event) => {
  //       return { name: event.name, club_name: club.slug, start: `${event.start_date} ${event.start_time}:00`, end: `${event.end_date} ${event.end_time}:00` }
  //     })
  //   })
  //   allEvents = allEvents.flat()
  //   return { allEvents }
  // },
  data: () => ({
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days'
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    monthEvents: [],
    allEvents: [],
    colors: { CSSC: 'var(--color-primary)', MCSS: 'var(--color-mcss)', UTMSAM: 'var(--color-utmsam)', DSC: 'var(--color-dsc)', WISC: 'var(--color-wisc)', Robotics: 'var(--color-robotics)' },
    names: ['CSSC', 'MCSS', 'UTMSAM', 'DSC', 'WISC', 'Robotics'],
    combinedStr: ''
  }),
  mounted () {
    this.$refs.calendar.checkChange()
    this.readCSVData(this.combinedStr)
  },
  methods: {
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
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
    readCSVData (data) {
      const introLine = 'name, description, start_date, start_time, end_date, end_time\n'
      const lines = data.split('\n')
      const fields = lines[0].split(', ')
      const output = []
      for (let i = 1; i < lines.length; i++) {
        if (lines !== introLine) {
          const current = lines[i].split(', ')
          const doc = {}
          for (let j = 0; j < fields.length; j++) {
            doc[fields[j]] = current[j]
          }
          output.push(doc)
        }
      }
      console.log(output)
    },
    updateRange ({ start, end }) {
      console.log(start)
      console.log(end)
      const events = []

      // const min = new Date(`${start.date}T00:00:00`)
      // const max = new Date(`${end.date}T23:59:59`)

      for (let i = 0; i < this.allEvents.length; i++) {
        const event = this.allEvents[i]
        events.push({
          name: event.name,
          start: event.start,
          end: event.end,
          color: this.colors[event.club_name]
        })
      }
      this.monthEvents = events
    }
  },
  async asyncData ({ $axios }) {
    const cssc = await $axios.$get('https://raw.githubusercontent.com/utm-cssc/unified-calendar-data/master/CSSC.csv')
    const mcss = await $axios.$get('https://raw.githubusercontent.com/utm-cssc/unified-calendar-data/master/MCSS.csv')
    const combinedStr = cssc + mcss
    return { combinedStr }
  }
}
</script>

<style scoped>
  .calendar_nav {
    color: white;
  }
</style>
