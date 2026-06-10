// Views
import { BlogTwoView, useCalibrationArticle } from '@/presentation';


const BlogTwoPage = () => {
  const article = useCalibrationArticle();

  return <BlogTwoView
    firstList={ article.firstList }
    secondList={ article.secondList ?? [] }
    thirdList={ article.thirdList ?? [] }
    fourthList={ article.fourthList ?? [] }
  />
}

export default BlogTwoPage;
