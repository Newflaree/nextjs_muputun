// Store
import { MupuButton } from '@/presentation/shared';
import { useProductStore } from '@/presentation/shop/contact';
import type { HomeProduct, Product } from '@/core';

type ProductToContactBtnProps = {
  className?: string;
  product: Product | HomeProduct;
};

export const ProductToContactBtn = ({ className = '', product }: ProductToContactBtnProps) => {
  const { setProductName } = useProductStore();

  const handleContactClick = () => {
    setProductName( product.name );
  }

  return (
    <MupuButton
      href='/contacto'
      className={ className }
      onClick={ handleContactClick }
      size='lg'
      variant='solid'
    >
      Cotizar producto
    </MupuButton>
  );
}
