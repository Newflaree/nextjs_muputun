import type { NextPage } from 'next';
import { AdminEmailClientView } from '@/presentation/admin';

const AdminMailingClientSupportPage: NextPage = () => {
  return <AdminEmailClientView folder='support' />;
};

export default AdminMailingClientSupportPage;
