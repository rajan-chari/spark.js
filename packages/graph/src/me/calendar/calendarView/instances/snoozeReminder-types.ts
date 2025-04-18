// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   * Postpone a reminder for an event in a user calendar until a new time.
   */
  'POST /me/calendar/calendarView/{event-id}/instances/{event-id1}/snoozeReminder': Operation<
    '/me/calendar/calendarView/{event-id}/instances/{event-id1}/snoozeReminder',
    'post'
  >;
}
