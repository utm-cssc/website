const args = process.argv.slice(2)
const fs = require('fs')

async function updateCalendar() {
  console.log('myArgs: ', args)
  console.log(args[0])
  const event = JSON.parse(args[0])
  const currentCalendarData = await fs.promises.readFile(
    'content/calendar.json',
  )
  console.log(currentCalendarData)
  const currentCalendarModel = JSON.parse(currentCalendarData)
  console.log(currentCalendarModel)
  currentCalendarModel.push(event)
}

updateCalendar()
