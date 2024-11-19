import { BlogListItem } from './';


export const BlogList = ({ listItems }) => {
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
