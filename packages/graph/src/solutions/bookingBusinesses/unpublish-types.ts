// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Make the scheduling page of this business not available to external customers. Set the isPublished property to false, and the publicUrl property to null.
   */
  'POST /solutions/bookingBusinesses/{bookingBusiness-id}/unpublish': Operation<
    '/solutions/bookingBusinesses/{bookingBusiness-id}/unpublish',
    'post'
  >;
}
