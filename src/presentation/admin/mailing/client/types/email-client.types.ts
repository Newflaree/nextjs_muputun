import type { IconType } from 'react-icons';

export type MailMessage = {
  account: string;
  body: string;
  from: string;
  preview: string;
  status: string;
  subject: string;
  time: string;
};

export type MailFolderKey = 'inbox' | 'sent' | 'drafts' | 'sales' | 'support';

export type MailFolderConfig = {
  count: string;
  description: string;
  eyebrow: string;
  href: string;
  title: string;
};

export type MailFolderNavItem = {
  href: string;
  icon: IconType;
  key: MailFolderKey;
  label: string;
};

export type EmailStat = {
  description: string;
  icon: IconType;
  label: string;
  value: string;
};
