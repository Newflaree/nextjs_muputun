// Layouts
import { MainLayout } from '@/components/layouts';
// Views
import { HomeView } from '@/views';
// Database
import { seoDatabase } from '@/database';


const HomePage = () => {

  const {
    pageTitle,
    pageDesc,
    pageKeywords,
    pageImage
  } = seoDatabase.homePage;

  return (
    <MainLayout
      pageTitle={ pageTitle }
      pageDesc={ pageDesc }
      pageKeywords={ pageKeywords }
      pageImage={ pageImage }
    >
      <HomeView />
    </MainLayout>
  );
}

export default HomePage;
