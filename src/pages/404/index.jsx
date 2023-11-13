// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { NotFoundView } from '@/views';


const NotFoundPage = () => {
  return (
    <MainLayout
      pageTitle="404"
      pageDesc="La página requerida no existe en nuestro sitio"
    >
      <NotFoundView />
    </MainLayout>
  );
}

export default NotFoundPage;
