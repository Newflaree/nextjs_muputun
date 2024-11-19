// Components
import { BlogImage } from '@/ui/components';
// Layouts
import { ShopLayout } from '@/ui/layouts';


export const BlogView = ({ blog }) => {
  return (
    <ShopLayout
      pageTitle={ blog.title }
    >
      <div>{ blog.desc }</div>

      <BlogImage />
    </ShopLayout>
  );
}
