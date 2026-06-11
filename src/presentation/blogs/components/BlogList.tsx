import { BlogListItem } from './';
import type { BlogListItem as BlogListItemType } from '@/core';

type BlogListProps = {
  listItems: BlogListItemType[];
};

export const BlogList = ({ listItems }: BlogListProps) => {
  return (
    <ul className="mt-6 grid gap-3">
      {
        listItems.map( ( listItem ) => (
          <BlogListItem
            key={ listItem.id }
            text={ listItem.text } 
          />
        ))
      }
    </ul>
  );
}
