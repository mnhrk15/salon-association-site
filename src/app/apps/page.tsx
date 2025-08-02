import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { AppCard } from "@/components/apps/AppCard";
import { getAllApps } from "@/lib/data/apps-data";

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

        {/* アプリ一覧 - カード型グリッドレイアウト */}
        <AnimatedSection delay={0.2}>
          <div className="container mx-auto px-4">
            <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {apps.map((app, index) => (
                <AppCard key={app.id} app={app} index={index} />
              ))}
            </div>
          </div>
        </AnimatedSection>


      </main>
    </>
  );
}