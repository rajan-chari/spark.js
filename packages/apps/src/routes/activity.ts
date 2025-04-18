import { Activity } from '@microsoft/teams.api';

import { RouteHandler } from '../types';
import { IActivityContext } from '../contexts';

export type ActivityRoutes = {
  [K in Activity['type']]?: RouteHandler<IActivityContext<Extract<Activity, { type: K }>>>;
};
