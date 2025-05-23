import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './unsetReaction-types.ts';

/**
 * /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction
 * Provides operations to call the unsetReaction method.
 */
export class UnsetReactionClient {
  protected baseUrl =
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction';
  protected http: http.Client;

  constructor(
    protected readonly chatMessageId1: string,
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
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction`
   *
   */
  async create(
    body: Endpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['body'],
    params?: Endpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
      [
        { name: 'chat-id', in: 'path' },
        { name: 'chatMessage-id', in: 'path' },
        { name: 'chatMessage-id1', in: 'path' },
      ],
      {
        ...(params || {}),
        'chatMessage-id1': this.chatMessageId1,
      }
    );

    return this.http
      .post(url, body, config)
      .then(
        (res) =>
          res.data as Endpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['response']
      );
  }
}
