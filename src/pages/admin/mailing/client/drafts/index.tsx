import type { NextPage } from 'next';
import { AdminEmailClientView } from '@/presentation/admin';

const AdminMailingClientDraftsPage: NextPage = () => {
  return <AdminEmailClientView folder='drafts' />;
};

export default AdminMailingClientDraftsPage;
