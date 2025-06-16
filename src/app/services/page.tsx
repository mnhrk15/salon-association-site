"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";

// --- Type Definitions for Service Sections ---
type TextImageSection = {
  type: 'text-image';
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  imageLeft?: boolean;
};

type FullImageSection = {
    type: 'full-image';
    imageUrl: string;
    imageAlt: string;
};

type BenefitsSection = {
    type: 'benefits';
    title: string;
    items: string[];
};

type ServiceSection = TextImageSection | FullImageSection | BenefitsSection;

// --- Data ---
const services: {
    name: string;
    title: string;
    imageUrl: string;
    sections: ServiceSection[];
}[] = [
  {
    name: "集客自動化",
    title: "AIがあなたの代わりに、理想のお客様を集め続けます。",
    imageUrl: "/images/placeholder-1920x400.png",
    sections: [
      {
        type: 'text-image',
        title: "こんな課題ありませんか？",
        content: "「日々の業務に追われて、新規顧客獲得まで手が回らない」「広告を出しても、なかなか効果が出ない」「どんなお客様にアプローチすれば良いかわからない」... そんな集客の悩みを、AIが根本から解決します。",
        imageUrl: "/images/placeholder-600x400.png",
        imageAlt: "悩みを抱えるサロンオーナー"
      },
      {
        type: 'text-image',
        title: "AIによる解決策",
        content: "私たちのシステムは、地域の市場データやSNSトレンドをAIが24時間365日分析。あなたのサロンに最適な顧客層を特定し、興味を引きそうな広告クリエイティブを自動生成。最適なタイミングで、最適なチャネルへアプローチをかけ、予約獲得までをシームレスに自動化します。",
        imageUrl: "/images/placeholder-600x400.png",
        imageAlt: "AIが分析しているイメージ",
        imageLeft: true,
      },
      {
        type: 'full-image',
        imageUrl: "/images/placeholder-1200x600.png",
        imageAlt: "集客に成功したサロンのイメージ"
      },
      {
        type: 'benefits',
        title: "導入メリット",
        items: [
          "集客にかかる時間とコストを大幅に削減",
          "データに基づいた効率的なマーケティング施策",
          "あなたは施術と顧客対応に集中できる",
        ],
      }
    ]
  },
  {
    name: "リピート向上",
    title: "顧客一人ひとりに響くアプローチで、生涯顧客を育む。",
    imageUrl: "/images/placeholder-1920x400.png",
    sections: [
        {
            type: 'text-image',
            title: "なぜお客様はリピートしないのか？",
            content: "「サービスには満足してくれたはずなのに、次回来店に繋がらない」「お客様との関係性を深めたいが、具体的に何をすればいいかわからない」... お客様が離れてしまう原因は、一人ひとりのニーズに寄り添ったコミュニケーションが不足しているからかもしれません。",
            imageUrl: "/images/placeholder-600x400.png",
            imageAlt: "顧客とのコミュニケーション"
        },
        {
            type: 'text-image',
            title: "AIが可能にする、究極のパーソナライズ体験",
            content: "来店周期、施術履歴、会話内容などの顧客データをAIが分析。お客様一人ひとりの興味や関心に合わせて、次回の最適なメニュー提案、パーソナライズされたDM、記念日のお祝いメッセージなどを自動で送信。まるで専属のコンシェルジュがいるかのような、感動的な顧客体験を創出します。",
            imageUrl: "/images/placeholder-600x400.png",
            imageAlt: "パーソナライズされた提案",
            imageLeft: true,
        },
        {
            type: 'benefits',
            title: "導入メリット",
            items: [
              "顧客満足度とロイヤリティの劇的な向上",
              "安定したリピート収益の確保",
              "口コミや紹介の増加による新規顧客獲得",
            ],
          }
    ]
  },
  {
    name: "採用強化",
    title: "データが導き出す、サロンに最適な人材との出会い。",
    imageUrl: "/images/placeholder-1920x400.png",
    sections: [
        {
            type: 'text-image',
            title: "理想の人材は、どこにいるのか？",
            content: "「求人を出しても応募が来ない」「採用してもすぐに辞めてしまう」「どんな人を採用すれば良いのか、基準が曖昧」... 採用の悩みは、事業成長の大きな足かせとなります。感覚に頼った採用活動では、時間とコストを浪費するばかりです。",
            imageUrl: "/images/placeholder-600x400.png",
            imageAlt: "採用面接の様子"
        },
        {
            type: 'text-image',
            title: "AIによる、科学的な採用アプローチ",
            content: "あなたのサロンの文化やビジョン、そして既存のハイパフォーマーの特性をAIが分析。成功確率の高い人材プロファイルを定義し、膨大な候補者データの中から最適な人材を自動でリストアップします。面接では、候補者の潜在能力を引き出すための質問項目をAIが提案。ミスマッチを劇的に減らし、組織の成長を加速させます。",
            imageUrl: "/images/placeholder-600x400.png",
            imageAlt: "AIによる人材分析",
            imageLeft: true,
        },
        {
            type: 'benefits',
            title: "導入メリット",
            items: [
              "採用活動にかかる工数とコストの削減",
              "採用のミスマッチを防ぎ、定着率を向上",
              "データに基づいた客観的な採用判断が可能に",
            ],
          }
    ]
  },
];

const Section = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-20 last:mb-0"
    >
        {children}
    </motion.div>
)

export default function ServicesPage() {
    return(
        <div>
            <PageHeader
                title="サービス内容"
                subtitle="あなたのサロンを次のステージへ"
                imageUrl="/images/placeholder-1920x600.png"
            />
            
            <div className="bg-background">
                {services.map((service) => (
                    <div key={service.name} id={service.name.toLowerCase()}>
                        <section className="relative h-96 w-full">
                             <Image src={service.imageUrl} alt={service.name} fill className="object-cover" />
                             <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <h2 className="text-white text-5xl font-serif font-bold text-center">{service.title}</h2>
                             </div>
                        </section>

                        <div className="py-24 container mx-auto px-6">
                            {service.sections.map((section, index) => (
                                <Section key={index}>
                                    {(() => {
                                        switch (section.type) {
                                            case 'text-image':
                                                return (
                                                    <div className={`grid md:grid-cols-2 gap-12 items-center`}>
                                                        <div className={section.imageLeft ? 'md:order-2' : ''}>
                                                            <h3 className="text-3xl font-bold font-serif mb-4">{section.title}</h3>
                                                            <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                                                        </div>
                                                        <div>
                                                            <Image src={section.imageUrl} alt={section.imageAlt} width={600} height={400} className="rounded-lg shadow-xl"/>
                                                        </div>
                                                    </div>
                                                );
                                            case 'full-image':
                                                return <Image src={section.imageUrl} alt={section.imageAlt} width={1200} height={600} className="rounded-lg shadow-xl mx-auto"/>;
                                            case 'benefits':
                                                return (
                                                    <div className="text-center">
                                                        <h3 className="text-3xl font-bold font-serif mb-8">{section.title}</h3>
                                                        <div className="grid md:grid-cols-3 gap-8">
                                                            {section.items.map(item => (
                                                                <div key={item} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                                                                    <p className="font-semibold text-lg">{item}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            default:
                                                return null;
                                        }
                                    })()}
                                </Section>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
