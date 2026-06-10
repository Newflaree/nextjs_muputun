// Views
import { HomeView, useHomePage } from '@/presentation';


const HomePage = () => {
  const homePage = useHomePage();

  return <HomeView { ...homePage } />
}

export default HomePage;
