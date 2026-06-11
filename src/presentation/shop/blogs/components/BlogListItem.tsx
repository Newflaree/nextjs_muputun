// React Icons
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

type BlogListItemProps = {
  text?: string;
};

export const BlogListItem = ({ text = '' }: BlogListItemProps) => {
  const content = text ? text : 'Test text';

  return (
    <li className='list-none'>
      <div className='flex items-start gap-3 rounded-2xl bg-white/50 px-4 py-4 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_12px_36px_rgba(15,23,42,0.06)] backdrop-blur-2xl'>
        <IoCheckmarkCircleOutline
          size={ 20 }
          className='mt-1 shrink-0 text-cyan-600'
        />
        <p className='m-0 text-base leading-7'>
          { content }
        </p>
      </div>
    </li>
  );
}
