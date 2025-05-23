// DO NOT EDIT THIS FILE
import type { Operation } from './../common.ts';

export interface Endpoints {
  /**
   * Retrieve a list of applicationTemplate objects from the Microsoft Entra application gallery.
   */
  'GET /applicationTemplates': Operation<'/applicationTemplates', 'get'>;
  /**
   * Retrieve the properties of an applicationTemplate object.
   */
  'GET /applicationTemplates/{applicationTemplate-id}': Operation<
    '/applicationTemplates/{applicationTemplate-id}',
    'get'
  >;
}
