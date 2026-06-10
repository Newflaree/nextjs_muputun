import { useEffect, useState } from "react";
import type { Blog } from "@/core";
import { useBlogsStore } from "../state";

export const useBlogs = () => {
  const getBlogs = useBlogsStore((state) => state.getBlogs);
  const blogsFromStore = useBlogsStore((state) => state.blogs);
  const [blogs, setBlogs] = useState<Blog[]>(blogsFromStore);

  useEffect(() => {
    let isMounted = true;

    getBlogs().then((backendBlogs) => {
      if (isMounted) {
        setBlogs(backendBlogs);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [getBlogs]);

  return {
    blogs,
  };
};
