import { useEffect, useState } from "react";
import type { Blog } from "@/core";
import { useBlogsStore } from "../state";

type UseBlogDetailOptions = {
  initialBlog: Blog;
};

export const useBlogDetail = ({ initialBlog }: UseBlogDetailOptions) => {
  const hydrateBlog = useBlogsStore((state) => state.hydrateBlog);
  const getBlogBySlug = useBlogsStore((state) => state.getBlogBySlug);
  const blogFromStore = useBlogsStore((state) =>
    state.blogs.find((blog) => blog.slug === initialBlog.slug),
  );
  const [blog, setBlog] = useState<Blog>(blogFromStore ?? initialBlog);

  useEffect(() => {
    hydrateBlog(initialBlog);
  }, [hydrateBlog, initialBlog]);

  useEffect(() => {
    let isMounted = true;

    getBlogBySlug(initialBlog.slug).then((backendBlog) => {
      if (backendBlog && isMounted) {
        setBlog(backendBlog);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [getBlogBySlug, initialBlog.slug]);

  return {
    blog,
  };
};
