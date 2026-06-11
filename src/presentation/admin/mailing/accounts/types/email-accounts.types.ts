import type { IconType } from 'react-icons';

export type EmailAccountStat = {
  description: string;
  icon: IconType;
  label: string;
  value: string;
};

export type EmailAccountRow = {
  email: string;
  protocol: string;
  quota: string;
  status: string;
  use: string;
};

export type EmailAccountBacklogItem = {
  description: string;
  title: string;
};

