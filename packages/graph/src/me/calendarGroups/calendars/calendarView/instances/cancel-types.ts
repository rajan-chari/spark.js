// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../../common.ts';

export interface Endpoints {
  /**
   * This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting 
by providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following
error message: &#x27;Your request can&#x27;t be completed. You need to be an organizer to cancel a meeting.&#x27; This action differs from Delete in that Cancel is available to only the organizer, and lets
the organizer send a custom message to the attendees about the cancellation.
   */
  'POST /me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/cancel': Operation<
    '/me/calendarGroups/{calendarGroup-id}/calendars/{calendar-id}/calendarView/{event-id}/instances/{event-id1}/cancel',
    'post'
  >;
}
