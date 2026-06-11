// Components
import { ProductCard } from './';
import type { HomeProduct, Product } from '@/core';

type ProductGridProps = {
  products: Array<Product | HomeProduct>;
};

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {
          products.map( product => (
            <ProductCard
              key={ product.slug }
              product={ product }
            />
          ))
        }
      </div>
    </div>
  );
}
