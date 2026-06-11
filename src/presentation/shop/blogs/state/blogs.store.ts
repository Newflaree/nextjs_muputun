import { create } from "zustand";
import type { Blog, BlogArticleLists } from "@/core";
import {
  blogsDatabase,
  firtListBlogOne,
  firtListBlogTwo,
  fourthListBlogTwo,
  secondListBlogTwo,
  thirtListBlogTwo,
} from "@/infrastructure/blogs";

type BlogsState = {
  blogs: Blog[];
  canalesGnssLists: BlogArticleLists;
  calibrationLists: BlogArticleLists;
  setBlogs: (blogs: Blog[]) => void;
  hydrateBlog: (blog: Blog) => void;
  getBlogs: () => Promise<Blog[]>;
  getBlogBySlug: (slug: string) => Promise<Blog | undefined>;
  getCanalesGnssLists: () => Promise<BlogArticleLists>;
  getCalibrationLists: () => Promise<BlogArticleLists>;
};

const canalesGnssLists: BlogArticleLists = {
  firstList: firtListBlogOne,
};

const calibrationLists: BlogArticleLists = {
  firstList: firtListBlogTwo,
  secondList: secondListBlogTwo,
  thirdList: thirtListBlogTwo,
  fourthList: fourthListBlogTwo,
};

export const getBlogsFromBackend = async (): Promise<Blog[]> => blogsDatabase;

export const getBlogBySlugFromBackend = async (
  slug: string,
): Promise<Blog | undefined> => {
  return blogsDatabase.find((blog) => blog.slug === slug);
};

export const useBlogsStore = create<BlogsState>((set, get) => ({
  blogs: blogsDatabase,
  canalesGnssLists,
  calibrationLists,

  setBlogs: (blogs) => set({ blogs }),

  hydrateBlog: (blog) =>
    set((state) => {
      const blogExists = state.blogs.some((storedBlog) => storedBlog.slug === blog.slug);

      if (blogExists) return state;

      return {
        blogs: [...state.blogs, blog],
      };
    }),

  getBlogs: async () => {
    const blogs = await getBlogsFromBackend();
    set({ blogs });
    return blogs;
  },

  getBlogBySlug: async (slug) => {
    const blog = get().blogs.find((storedBlog) => storedBlog.slug === slug);

    if (blog) return blog;

    const backendBlog = await getBlogBySlugFromBackend(slug);

    if (backendBlog) {
      get().hydrateBlog(backendBlog);
    }

    return backendBlog;
  },

  getCanalesGnssLists: async () => {
    set({ canalesGnssLists });
    return canalesGnssLists;
  },

  getCalibrationLists: async () => {
    set({ calibrationLists });
    return calibrationLists;
  },
}));
