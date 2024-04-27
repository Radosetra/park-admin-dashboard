import { EventInput } from '@fullcalendar/core/index.js';
import { EventDto } from '../../_type/event.dto';
import { convertToStr } from '../dateUtils';

export function formatEvent(prevEvents: EventDto[]): EventInput[] {
  if (!prevEvents) {
    console.log('No events to format');
    return [];
  }

  const events = prevEvents.map((prevEvent) => ({
    id: prevEvent.event_id,
    title: prevEvent.event_name,
    start: convertToStr(prevEvent.event_start_date),
    end: convertToStr(prevEvent.event_end_date),
    allDays: true
  }));

  return events;
}
