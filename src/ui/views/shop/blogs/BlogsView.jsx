// Components
import {
  BlogGrid,
  Title
} from '@/ui/components';
// Layouts
import { ShopLayout } from '@/ui/layouts';


export const BlogsView = ({ blogs }) => {
  return (
    <ShopLayout
      pageTitle='Blogs'
    >
      <div className='mt-10 mx-2'>
        <Title label='Nuestros artículos' />

        <BlogGrid blogs={ blogs } />
      </div>
    </ShopLayout>
  );
}
