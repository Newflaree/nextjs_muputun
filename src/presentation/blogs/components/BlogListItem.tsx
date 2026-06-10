// React Icons
import { IoRadioButtonOnOutline } from 'react-icons/io5';

type BlogListItemProps = {
  text?: string;
};

export const BlogListItem = ({ text = '' }: BlogListItemProps) => {
  const content = text ? text : 'Test text';

  return (
    <li className='list-none'>
      <p className='flex flex-row items-center'>
        <div>
          <IoRadioButtonOnOutline size={ 22 } className='text-mupu mr-2' />
        </div>

        <div>
          { content }
        </div>
      </p>
    </li>
  );
}
