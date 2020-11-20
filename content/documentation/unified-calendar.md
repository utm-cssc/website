---
title: Unified Calendar
desc: Informs you about the implementation of unified calendar.
link: unified-calendar
---

# Unified Calendar

This is a unified calendar for all Computer Science clubs to showcase their
events.

It consists of 2 major sections:

- UI/UX
- Data

## UI/UX

It uses a vuetify component for creating a calendar UI. You can read more about
this component [here](https://vuetifyjs.com/en/components/calendars/#calendars).

## Data

We have created an unified-calendar-data repo
[here](https://github.com/utm-cssc/unified-calendar-data) where each club can
push their event data in CSV format.

Using async axios calls we get all the data from the CSVs in the repo mentioned
above.

### Event Data (CSV)

```
name, description, start_date, start_time, end_date, end_time
CSSC's Games & Tips for First Years, A series of games and fun puzzles for our first years!, 2020-09-10, 19:00, 2020-09-10, 20:00
```

**Note:** Please follow this format for editting CSV files. | Data | Format |
|------|------------| | Date | YYYY-MM-DD | | Time | hh-mm |

### Calendar Event Data

The events data required by the vuetify calendar is in following format:

```
{
  color: string,
  name: string,
  details: string,
  start: date,
  end: date,
}
```

### Parsing [CSV to Calendar Event Data]

We are using readCSVData method that parses the events in csv to vuetify
calendar format. This data is then reflected by the vuetify calendar component.
