import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './extensions-types.ts';

/**
 * /me/calendarView/{event-id}/instances/{event-id1}/extensions
 * Provides operations to manage the extensions property of the microsoft.graph.event entity.
 */
export class ExtensionsClient {
  protected baseUrl = '/me/calendarView/{event-id}/instances/{event-id1}/extensions';
  protected http: http.Client;

  constructor(
    protected readonly eventId1: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `DELETE /me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
        { name: 'extension-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) =>
          res.data as Endpoints['DELETE /me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}']['response']
      );
  }

  /**
   * `GET /me/calendarView/{event-id}/instances/{event-id1}/extensions`
   *
   * The collection of open extensions defined for the event. Nullable.
   */
  async list(
    params?: Endpoints['GET /me/calendarView/{event-id}/instances/{event-id1}/extensions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarView/{event-id}/instances/{event-id1}/extensions',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendarView/{event-id}/instances/{event-id1}/extensions']['response']
      );
  }

  /**
   * `GET /me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}`
   *
   * The collection of open extensions defined for the event. Nullable.
   */
  async get(
    params?: Endpoints['GET /me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
        { name: 'extension-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}']['response']
      );
  }

  /**
   * `PATCH /me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}']['body'],
    params?: Endpoints['PATCH /me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}',
      [
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
        { name: 'extension-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['PATCH /me/calendarView/{event-id}/instances/{event-id1}/extensions/{extension-id}']['response']
      );
  }

  /**
   * `POST /me/calendarView/{event-id}/instances/{event-id1}/extensions`
   *
   */
  async create(
    body: Endpoints['POST /me/calendarView/{event-id}/instances/{event-id1}/extensions']['body'],
    params?: Endpoints['POST /me/calendarView/{event-id}/instances/{event-id1}/extensions']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/calendarView/{event-id}/instances/{event-id1}/extensions',
      [
        { name: 'event-id', in: 'path' },
        { name: 'event-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'event-id1': this.eventId1,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/calendarView/{event-id}/instances/{event-id1}/extensions']['response']
      );
  }
}
