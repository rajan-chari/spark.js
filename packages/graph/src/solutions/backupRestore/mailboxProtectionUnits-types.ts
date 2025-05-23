// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    'delete'
  >;
  /**
   * The list of mailbox protection units in the tenant.
   */
  'GET /solutions/backupRestore/mailboxProtectionUnits': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits',
    'get'
  >;
  /**
   * The list of mailbox protection units in the tenant.
   */
  'GET /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    'get'
  >;
  /**
   */
  'PATCH /solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits/{mailboxProtectionUnit-id}',
    'patch'
  >;
  /**
   */
  'POST /solutions/backupRestore/mailboxProtectionUnits': Operation<
    '/solutions/backupRestore/mailboxProtectionUnits',
    'post'
  >;
}
