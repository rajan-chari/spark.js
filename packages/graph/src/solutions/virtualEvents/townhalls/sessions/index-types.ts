// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    'delete'
  >;
  /**
   * The sessions for the virtual event.
   */
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions',
    'get'
  >;
  /**
   * The sessions for the virtual event.
   */
  'GET /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    'get'
  >;
  /**
   */
  'PATCH /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions/{virtualEventSession-id}',
    'patch'
  >;
  /**
   */
  'POST /solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions': Operation<
    '/solutions/virtualEvents/townhalls/{virtualEventTownhall-id}/sessions',
    'post'
  >;
}
