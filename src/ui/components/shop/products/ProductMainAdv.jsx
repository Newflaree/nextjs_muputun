// React Icons
import { IoRadioButtonOnOutline } from 'react-icons/io5';
// Components
import { Title } from '../../';


export const ProductMainAdv = ({ mainAdv }) => {
  return (
    <div className='w-full'>
      <Title
        label='Principales ventajas'
        className='font-semibold text-start text-2xl'
      />

      {
        mainAdv.map( ( item ) => (
          <div
            key={ item.advItem }
            className='w-full'
          >
            <IoRadioButtonOnOutline
              className='text-mupu mr-2 inline'
            />
            <span className='inline text-xl font-semibold'>{ item.advItem }</span>
          </div>
        ))
      }
    </div>
  );
}
