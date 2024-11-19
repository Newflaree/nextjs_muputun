// React Icons
import { IoRadioButtonOnOutline } from 'react-icons/io5';


export const ProductTableSubitems = ({ subitems }) => {
  return (
    <div
      className='flex flex-col'
    >
      {
        subitems.map( ( item ) => (
          <div
            key={ item.spec }
            className='inline mb-2'
          >
            <IoRadioButtonOnOutline
             className='text-mupu mr-2 inline'
              size={ 12 }
            />

            <span className='inline'>{ item.spec }</span>
          </div>
        ))
      }
    </div>
  );
}
