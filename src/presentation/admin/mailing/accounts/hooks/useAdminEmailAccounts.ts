import {
  emailAccountBacklog,
  emailAccounts,
  emailAccountStats,
  getEmailAccountStatusTone,
} from '../data/email-accounts.mock';

export const useAdminEmailAccounts = () => ({
  accounts: emailAccounts,
  backlog: emailAccountBacklog,
  getStatusTone: getEmailAccountStatusTone,
  stats: emailAccountStats,
});

