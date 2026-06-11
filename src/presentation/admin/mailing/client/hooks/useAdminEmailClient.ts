import { useState } from 'react';
import {
  emailClientStats,
  emailFolders,
  folderConfig,
  folderMessages,
  getMailStatusTone,
} from '../data/email-client.mock';
import type {
  MailFolderKey,
  MailMessage,
} from '../types/email-client.types';

type UseAdminEmailClientOptions = {
  folder: MailFolderKey;
};

export const useAdminEmailClient = ({ folder }: UseAdminEmailClientOptions) => {
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<MailMessage | null>(null);

  return {
    activeFolder: folderConfig[folder],
    activeMessages: folderMessages[folder],
    closeCompose: () => setIsComposeOpen(false),
    closeMessage: () => setSelectedMessage(null),
    folder,
    folders: emailFolders,
    getStatusTone: getMailStatusTone,
    isComposeOpen,
    openCompose: () => setIsComposeOpen(true),
    openMessage: setSelectedMessage,
    selectedMessage,
    stats: emailClientStats,
  };
};

