import { getPostData, getAllPostSlugs } from '@/lib/news';
import { notFound } from 'next/navigation';
import { PageHeader } from "@/components/common/PageHeader";
import { ArticleJsonLd } from '@/components/seo/JsonLd';

type Props = {
    params: { slug: string };
};

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = await getPostData(slug);
    if (!post) {
      return notFound();
    }
    return {
      title: post.title,
      description: post.excerpt,
    };
}

export default async function PostPage({ params }: { params: { slug: string }}) {
  const { slug } = params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  return (
    <>
        <ArticleJsonLd
            url={`${siteUrl}/news/${post.slug}`}
            title={post.title}
            description={post.excerpt}
            publishedDate={post.date}
            imageUrl={post.coverImage ? `${siteUrl}${post.coverImage}` : undefined}
        />
        <PageHeader 
            title={post.title}
            description={`公開日: ${post.date}`}
            imageUrl={post.coverImage || "/images/page-header-1920x600.png"}
        />
      <div className="container mx-auto px-6 max-w-4xl py-24">
        <article className="prose dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
        </article>
      </div>
    </>
  );
} 