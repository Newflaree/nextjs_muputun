import { CanalesGNSSView, useCanalesGnssArticle } from '@/presentation';


const CanalesGNSSPage = () => {
  const article = useCanalesGnssArticle();

  return <CanalesGNSSView firstList={ article.firstList } />
    
}

export default CanalesGNSSPage;
