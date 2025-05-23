// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../../common.ts';

export interface Endpoints {
  /**
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
    'post'
  >;
}
