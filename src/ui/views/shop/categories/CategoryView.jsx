// Components
import {
  ProductGrid,
  Title,
  SubTitle
} from '../../../components';
// Layouts
import { ShopLayout } from '../../../layouts';


export const CategoryView = ({
  products = [],
  category = '',
  title = '',
  subtitle = '',
  description = ''
}) => {
  return (
    <ShopLayout
      pageTitle={ category }
    >
      <div className='mt-10'>
        <Title
          label={ title }
          className='text-mupu text-start text-6xl font-bold mx-2 sm:mx-0'
        />

        <div>
          <p className='py-4 font-light mx-2 sm:mx-0'>
            { description }
          </p>
        </div>

        <div className='mt-4 mx-2 sm:mx-0'>
          <SubTitle
            label={ subtitle }
          />


          <div className=''>
            <ProductGrid products={ products } />
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}
