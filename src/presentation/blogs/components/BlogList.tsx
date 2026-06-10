import { BlogListItem } from './';
import type { BlogListItem as BlogListItemType } from '@/core';

type BlogListProps = {
  listItems: BlogListItemType[];
};

export const BlogList = ({ listItems }: BlogListProps) => {
  return (
    <ul className="list-disc list-inside mt-4 space-y-4">
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
