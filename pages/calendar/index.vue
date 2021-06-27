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
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    monthEvents: [],
    allEvents: [],
    colors: {
      CSSC: 'var(--color-primary)',
      MCSS: 'var(--color-mcss)',
      UTMSAM: 'var(--color-utmsam)',
      DSC: 'var(--color-dsc)',
      WISC: 'var(--color-wisc)',
      Robotics: 'var(--color-robotics)',
    },
    names: ['CSSC', 'MCSS', 'UTMSAM', 'DSC', 'WISC', 'Robotics'],
  }),
  mounted() {
    this.readCSVData(this.mcss, 'MCSS')
    this.readCSVData(this.wisc, 'WISC')
    this.readCSVData(this.utmsam, 'UTMSAM')
    this.readCSVData(this.dsc, 'DSC')
    this.readCSVData(this.cssc, 'CSSC')
    this.readCSVData(this.robotics, 'Robotics')
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
    readCSVData(data, clubName) {
      // checks if the event data is returned properly
      if (typeof data === 'string' && data.length > 0) {
        const lines = data.split('\n')
        const output = []
        for (let i = 1; i < lines.length - 1; i++) {
          const current = lines[i].split(', ')
          // checks for error in the event
          if (current.length === 6) {
            const event = {
              color: this.colors[clubName],
              name: current[0],
              details: current[1],
              start: `${current[2]} ${current[3]}:00`,
              end: `${current[4]} ${current[5]}:00`,
            }
            output.push(event)
          }
        }
        this.monthEvents.push(...output)
      }
    },
  },
  async asyncData({$axios}) {
    let wisc = ''
    let mcss = ''
    let utmsam = ''
    let cssc = ''
    let robotics = ''
    let dsc = ''
    await Promise.all([
      $axios
        .$get(
          'https://raw.githubusercontent.com/utm-cssc/unified-calendar-data/master/WISC.csv',
        )
        .then(res => {
          wisc = res
        })
        .catch(() => {
          wisc = ''
        }),
      $axios
        .$get(
          'https://raw.githubusercontent.com/utm-cssc/unified-calendar-data/master/MCSS.csv',
        )
        .then(res => {
          mcss = res
        })
        .catch(() => {
          mcss = ''
        }),
      $axios
        .$get(
          'https://raw.githubusercontent.com/utm-cssc/unified-calendar-data/master/UTMSAM.csv',
        )
        .then(res => {
          utmsam = res
        })
        .catch(() => {
          utmsam = ''
        }),
      $axios
        .$get(
          'https://raw.githubusercontent.com/utm-cssc/unified-calendar-data/master/CSSC.csv',
        )
        .then(res => {
          cssc = res
        })
        .catch(() => {
          cssc = ''
        }),
      $axios
        .$get(
          'https://raw.githubusercontent.com/utm-cssc/unified-calendar-data/master/Robotics.csv',
        )
        .then(res => {
          robotics = res
        })
        .catch(() => {
          robotics = ''
        }),
      $axios
        .$get(
          'https://raw.githubusercontent.com/utm-cssc/unified-calendar-data/master/DSC.csv',
        )
        .then(res => {
          dsc = res
        })
        .catch(() => {
          dsc = ''
        }),
    ])
    return {wisc, mcss, utmsam, cssc, robotics, dsc}
  },
}
</script>

<style scoped>
.calendar_nav {
  color: white !important;
}
</style>
