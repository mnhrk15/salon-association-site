import { getPostData, getAllPostSlugs } from '@/lib/news';
import { notFound } from 'next/navigation';
import { PageHeader } from "@/components/common/PageHeader";

type Props = {
    params: Promise<{ slug: string }>;
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

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
        <PageHeader 
            title={post.title}
            subtitle={`公開日: ${post.date}`}
            imageUrl={post.coverImage || "/images/placeholder-1920x600.png"}
        />
      <div className="container mx-auto px-6 max-w-4xl py-24">
        <article className="prose dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
        </article>
      </div>
    </div>
  );
} 