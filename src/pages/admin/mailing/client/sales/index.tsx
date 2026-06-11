import type { NextPage } from 'next';
import { AdminEmailClientView } from '@/presentation/admin';

const AdminMailingClientSalesPage: NextPage = () => {
  return <AdminEmailClientView folder='sales' />;
};

export default AdminMailingClientSalesPage;
