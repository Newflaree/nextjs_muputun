import NextLink from 'next/link';
import { BlogArticleLayout } from '@/presentation';
import type { Blog } from '@/core';

type BlogViewProps = {
  blog: Blog;
};

export const BlogView = ({ blog }: BlogViewProps) => {
  return (
    <BlogArticleLayout
      title={ blog.title }
      description={ blog.desc }
      image={ blog.img }
    >
      <p>
        Este artículo forma parte de la biblioteca técnica de Müpütun. En las siguientes iteraciones integraremos el contenido extendido con el mismo sistema visual.
      </p>
      <NextLink href='/contacto'>
        Conversar con un especialista
      </NextLink>
    </BlogArticleLayout>
  );
}
