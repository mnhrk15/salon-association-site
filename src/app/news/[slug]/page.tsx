import { type Metadata } from 'next';
import { getPostData, getAllPostSlugs } from '@/lib/news';
import { notFound } from 'next/navigation';
import { PageHeader } from "@/components/common/PageHeader";
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';

  const breadcrumbItems = [
    { label: 'ホーム', href: '/' },
    { label: 'お知らせ', href: '/news' },
    { label: post.title, href: `/news/${slug}` },
  ];

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
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <article className="prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
        </article>
      </div>
    </>
  );
} 