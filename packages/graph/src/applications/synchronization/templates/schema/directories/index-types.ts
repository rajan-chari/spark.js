// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}',
    'delete'
  >;
  /**
   * Contains the collection of directories and all of their objects.
   */
  'GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories',
    'get'
  >;
  /**
   * Contains the collection of directories and all of their objects.
   */
  'GET /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}',
    'get'
  >;
  /**
   */
  'PATCH /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories/{directoryDefinition-id}',
    'patch'
  >;
  /**
   */
  'POST /applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories': Operation<
    '/applications/{application-id}/synchronization/templates/{synchronizationTemplate-id}/schema/directories',
    'post'
  >;
}
