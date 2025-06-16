import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/news';

export default function sitemap(): MetadataRoute.Sitemap {
  // 環境変数からサイトのURLを取得。設定されていない場合は仮のURLを使用。
  // .env.localファイルで NEXT_PUBLIC_SITE_URL="https://your-domain.com" のように設定してください。
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-beauty-salon-association.com';

  // 静的ページのルート
  const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/pricing',
    '/news',
    '/faq',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // お知らせ記事の動的ルート
  const posts = getSortedPostsData();
  const postRoutes = posts.map((post) => ({
    url: `${siteUrl}/news/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }));

  return [...staticRoutes, ...postRoutes];
} 