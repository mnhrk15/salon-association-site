import { PageHeader } from "@/components/common/PageHeader";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const corporateProfile = {
  "法人名": "一般社団法人AIビューティーサロン推進協会",
  "略称": "ABP / ABPA",
  "設立日": "2025年6月3日（予定）",
  "本社所在地": "東京都豊島区東池袋1-32-2 小泉ビル4F",
  "目的": "理美容業界におけるAI技術とDXを駆使し、人口減少下でも一人ひとりのスタイリストが本業に集中できる環境を創出、美容師平均年収500万円以上を実現する社会を目指すこと。",
  "主たる事業内容": [
    "集客ツール・求人ツールの開発・提供・サポート",
    "美容ポータルサイト・集客ツールの攻略講座",
    "AIセミナー・勉強会の企画・運営",
    "Webマーケティング（SEO／MEO対策、SNS広告運用、コンテンツ制作支援）",
    "上記に附帯関連する一切の事業",
  ],
  "事業年度": "毎年6月1日～翌年5月31日",
};

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="協会概要"
                description="私たちの理念と活動内容をご紹介します。"
                imageUrl="/images/page-header-1920x600.png"
            />

            <section className="py-24 bg-background">
                <div className="container mx-auto">
                    <AnimatedSection className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-4xl font-bold">私たちの使命</h2>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            私たちは、理美容業界におけるAI技術とDXを推進し、深刻な人口減少とオーバーストア状態という構造的課題に立ち向かいます。
                            スタイリスト一人ひとりが創造的な本業に集中できる環境を整え、
                            「美容師の平均年収500万円以上」が当たり前となる社会を実現することが、私たちの使命です。
                        </p>
                    </AnimatedSection>
                </div>
            </section>
            
            <section className="py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto">
                    <AnimatedSection>
                      <h2 
                          className="text-center font-serif text-4xl font-bold mb-12"
                      >
                          法人概要
                      </h2>
                    </AnimatedSection>
                    <AnimatedSection 
                        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
                        delay={0.2}
                    >
                        <table className="w-full text-left">
                            <tbody>
                                {Object.entries(corporateProfile).map(([key, value]) => (
                                    <tr key={key} className="border-b dark:border-gray-700">
                                        <th scope="row" className="py-4 pr-4 font-semibold text-foreground align-top w-1/4">{key}</th>
                                        <td className="py-4 text-muted-foreground">
                                            {Array.isArray(value) ? (
                                                <ul className="list-disc list-inside space-y-1">
                                                    {value.map((item) => <li key={item}>{item}</li>)}
                                                </ul>
                                            ) : value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
