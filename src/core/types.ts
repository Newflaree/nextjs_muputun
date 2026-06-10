import type { ReactNode } from "react";

export type ProductImage = {
  name: string;
  url: string;
};

export type ProductMainAdvantage = {
  advItem: string;
};

export type ProductTechSpecItem = {
  spec: string;
};

export type ProductTechSpec = {
  primary: string;
  secondary: ProductTechSpecItem[];
};

export type ProductDoc = {
  name: string;
  path: string;
};

export type ProductInclude = {
  name: string;
};

export type Product = {
  id: string;
  name: string;
  cate: string;
  desc: string;
  banner: string;
  bannerM: string;
  mainAdv: ProductMainAdvantage[];
  techSpecs: ProductTechSpec[];
  includes: ProductInclude[];
  imgs: ProductImage[];
  price: number;
  slug: string;
  doc: ProductDoc[];
};

export type HomeProduct = Pick<Product, "id" | "name" | "imgs" | "price" | "slug">;

export type Blog = {
  id: string;
  title: string;
  desc: string;
  img: string;
  slug: string;
};

export type BlogListItem = {
  id: string;
  blog: string;
  text: string;
};

export type BlogArticleLists = {
  firstList: BlogListItem[];
  secondList?: BlogListItem[];
  thirdList?: BlogListItem[];
  fourthList?: BlogListItem[];
};

export type ContactMessageDto = {
  name: string;
  lastName: string;
  emailAddress: string;
  subject: string;
  message: string;
};

export type StaticPageMenuItem = {
  id: string;
  name: string;
  external: boolean;
  path: string;
};

export type HeaderInfo = {
  id: string;
  title: string;
  desc: string;
  btn: string;
  path: string;
  imgd: string;
  imgm: string;
  png: string;
};

export type WithChildren = {
  children: ReactNode;
};
