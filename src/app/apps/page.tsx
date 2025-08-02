import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ImageCarousel } from "@/components/common/ImageCarousel";
import { getAllApps, type App } from "@/lib/data/apps-data";

export const metadata: Metadata = {
  title: "アプリ紹介 | AIビューティーサロン推進協会",
  description: "AIビューティーサロン推進協会が提供する革新的なアプリケーションをご紹介します。サロン経営の効率化と顧客満足度向上を実現するAI技術を活用したソリューション。",
  keywords: ["AI", "美容サロン", "アプリ", "Google投稿", "診断", "管理システム"],
  openGraph: {
    title: "アプリ紹介 | AIビューティーサロン推進協会",
    description: "AIビューティーサロン推進協会が提供する革新的なアプリケーションをご紹介します。",
    type: "website",
  },
};

function AppCard({ app, index }: { app: App; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection delay={index * 0.2} className="mb-16 lg:mb-24">
      <div className="container mx-auto px-4">
        <div className={`grid gap-8 lg:gap-12 items-center ${
          isEven ? "lg:grid-cols-2" : "lg:grid-cols-2 lg:grid-flow-col-reverse"
        }`}>
          {/* テキストコンテンツ */}
          <div className={isEven ? "lg:pr-8" : "lg:pl-8"}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {app.name}
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {app.description}
            </p>

            {app.detailedDescription && (
              <p className="text-gray-700 mb-6 leading-relaxed">
                {app.detailedDescription}
              </p>
            )}

            {app.features && app.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  主な機能
                </h3>
                <div className="grid gap-2">
                  {app.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                AI技術活用
              </span>
              <span className="px-3 py-1 border border-gray-300 text-gray-700 text-sm font-medium rounded-full">
                効率化ソリューション
              </span>
            </div>
          </div>

          {/* スライドショー */}
          <div className={isEven ? "lg:pl-8" : "lg:pr-8"}>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <ImageCarousel 
                  slides={app.slides.map(slide => ({
                    imageUrl: slide.imageUrl,
                    altText: slide.altText
                  }))}
                  autoPlay={app.slides.length > 1}
                  autoPlayInterval={4000}
                />
              </div>
              
              {/* 装飾要素 */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function AppsPage() {
  const apps = getAllApps();

  return (
    <>
      <PageHeader
        title="アプリ紹介"
        description="AIビューティーサロン推進協会が提供する革新的なアプリケーションで、サロン経営を次のレベルへ"
        imageUrl="/images/page-header-1920x600.png"
      />

      <main className="py-16 bg-gray-50">
        {/* イントロダクション */}
        <AnimatedSection className="mb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                AI技術で実現する、新しいサロン体験
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                私たちが開発したアプリケーションは、最新のAI技術を活用してサロン経営の課題を解決し、
                お客様により良いサービスを提供することを可能にします。
                以下のアプリケーションをぜひご覧ください。
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* アプリ一覧 */}
        <div className="space-y-16 lg:space-y-24">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>

        {/* CTA セクション */}
        <AnimatedSection delay={0.4} className="mt-16 lg:mt-24">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                アプリの導入をご検討ですか？
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                各アプリケーションの詳細な機能説明やデモンストレーション、
                料金プランについては、お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  お問い合わせ
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  料金プランを見る
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </>
  );
}