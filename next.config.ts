import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // すべての画像をローカルで扱うため、remotePatternsは不要になりました。
  
  // セキュリティヘッダーの設定
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ],
      },
    ];
  },

  // 画像の最適化設定
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30日
  },

  // 実験的機能の有効化
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
