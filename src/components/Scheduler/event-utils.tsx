import { EventInput } from '@fullcalendar/core'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T11:15:30'
  },
  {
    id: createEventId(),
    title: 'Test',
    start: "2024-04-24"
  }
]

export function createEventId() {
  return String(eventGuid++)
}