---
title: Unified Calendar
desc: Learn about the implementation of our unified calendar
icon: /docs/calendar.svg
link: unified-calendar
---

# Unified Calendar

This is a unified calendar for all Computer Science clubs to showcase their
events.

It consists of 2 major sections:

- UI/UX
- Data

## UI/UX

It uses a Vuetify component for creating a calendar UI. You can read more about
this component [here](https://vuetifyjs.com/en/components/calendars/#calendars).

## Data

We have created an unified-calendar-data repo where each club can add their
events! For more information about the unified-calendar-data event format, you
can check it out [here](https://github.com/utm-cssc/unified-calendar-data)!

Using async axios calls, we can get all of the data from the CSVs in the repo
mentioned above.

### Event Data (CSV)

```
name, description, start_date, start_time, end_date, end_time
CSSC's Games & Tips for First Years, A series of games and fun puzzles for our first years!, 2020-09-10, 19:00, 2020-09-10, 20:00
```

**Note:** Please follow this format for editting CSV files.

| Data | Format     |
| ---- | ---------- |
| Date | YYYY-MM-DD |
| Time | hh-mm      |

### Calendar Event Data

The event data required by the Vuetify calendar is in following format:

```
{
  color: string,
  name: string,
  details: string,
  start: date,
  end: date,
}
```

### Parsing CSVs to Calendar Event Data

We are using the readCSVData method which parses and then converts the events in
our CSV format to the Vuetify calendar format. This data is then reflected by
the Vuetify calendar component.
