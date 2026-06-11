import type { NextPage } from 'next';
import { AdminEmailClientView } from '@/presentation/admin';

const AdminMailingClientSentPage: NextPage = () => {
  return <AdminEmailClientView folder='sent' />;
};

export default AdminMailingClientSentPage;
