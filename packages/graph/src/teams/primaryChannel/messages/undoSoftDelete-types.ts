// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  'POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
}
