"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

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

type Service = {
  name: string;
  title: string;
  imageUrl: string;
  sections: ServiceSection[];
};

// --- Data ---
const services: Service[] = [
  {
    name: "集客自動化",
    title: "AIがあなたの代わりに、理想のお客様を集め続けます。",
    imageUrl: "/images/feature-section-1920x400.png",
    sections: [
      {
        type: 'text-image',
        title: "こんな課題ありませんか？",
        content: "「日々の業務に追われて、新規顧客獲得まで手が回らない」「広告を出しても、なかなか効果が出ない」「どんなお客様にアプローチすれば良いかわからない」... そんな集客の悩みを、AIが根本から解決します。",
        imageUrl: "/images/feature-item-600x400.png",
        imageAlt: "悩みを抱えるサロンオーナー"
      },
      {
        type: 'text-image',
        title: "AIによる解決策",
        content: "私たちのシステムは、地域の市場データやSNSトレンドをAIが24時間365日分析。あなたのサロンに最適な顧客層を特定し、興味を引きそうな広告クリエイティブを自動生成。最適なタイミングで、最適なチャネルへアプローチをかけ、予約獲得までをシームレスに自動化します。",
        imageUrl: "/images/feature-item-600x400.png",
        imageAlt: "AIが分析しているイメージ",
        imageLeft: true,
      },
      {
        type: 'full-image',
        imageUrl: "/images/feature-card-1200x600.png",
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
    imageUrl: "/images/feature-section-1920x400.png",
    sections: [
        {
            type: 'text-image',
            title: "なぜお客様はリピートしないのか？",
            content: "「サービスには満足してくれたはずなのに、次回来店に繋がらない」「お客様との関係性を深めたいが、具体的に何をすればいいかわからない」... お客様が離れてしまう原因は、一人ひとりのニーズに寄り添ったコミュニケーションが不足しているからかもしれません。",
            imageUrl: "/images/feature-item-600x400.png",
            imageAlt: "顧客とのコミュニケーション"
        },
        {
            type: 'text-image',
            title: "AIが可能にする、究極のパーソナライズ体験",
            content: "来店周期、施術履歴、会話内容などの顧客データをAIが分析。お客様一人ひとりの興味や関心に合わせて、次回の最適なメニュー提案、パーソナライズされたDM、記念日のお祝いメッセージなどを自動で送信。まるで専属のコンシェルジュがいるかのような、感動的な顧客体験を創出します。",
            imageUrl: "/images/feature-item-600x400.png",
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
    imageUrl: "/images/feature-section-1920x400.png",
    sections: [
        {
            type: 'text-image',
            title: "理想の人材は、どこにいるのか？",
            content: "「求人を出しても応募が来ない」「採用してもすぐに辞めてしまう」「どんな人を採用すれば良いのか、基準が曖昧」... 採用の悩みは、事業成長の大きな足かせとなります。感覚に頼った採用活動では、時間とコストを浪費するばかりです。",
            imageUrl: "/images/feature-item-600x400.png",
            imageAlt: "採用面接の様子"
        },
        {
            type: 'text-image',
            title: "AIによる、科学的な採用アプローチ",
            content: "あなたのサロンの文化やビジョン、そして既存のハイパフォーマーの特性をAIが分析。成功確率の高い人材プロファイルを定義し、膨大な候補者データの中から最適な人材を自動でリストアップします。面接では、候補者の潜在能力を引き出すための質問項目をAIが提案。ミスマッチを劇的に減らし、組織の成長を加速させます。",
            imageUrl: "/images/feature-item-600x400.png",
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

const ServiceDetail = ({ service }: { service: Service }) => {
  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      key={service.name}
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="space-y-20"
    >
      {service.sections.map((section, index) => (
        <AnimatedSection key={index}>
          {(() => {
            switch (section.type) {
              case 'text-image':
                return (
                  <div className={`grid items-center gap-12 md:grid-cols-2`}>
                    <div className={cn("text-left", section.imageLeft && "md:order-last")}>
                      <h3 className="font-serif text-3xl font-bold">
                        {section.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {section.content}
                      </p>
                    </div>
                    <div className="relative h-80 w-full">
                      <Image src={section.imageUrl} alt={section.imageAlt} fill className="rounded-lg object-cover shadow-xl" />
                    </div>
                  </div>
                );
              case 'full-image':
                return (
                  <div className="relative mx-auto h-[500px] w-full max-w-5xl">
                    <Image src={section.imageUrl} alt={section.imageAlt} fill className="rounded-lg object-cover shadow-xl" />
                  </div>
                );
              case 'benefits':
                return (
                  <div className="rounded-lg bg-gray-50 p-12 dark:bg-gray-900">
                    <h3 className="text-center font-serif text-3xl font-bold">
                      {section.title}
                    </h3>
                    <div className="mt-10 grid gap-8 md:grid-cols-3">
                      {section.items.map((item) => (
                        <div key={item} className="flex items-start gap-4">
                          <Check className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                          <p className="font-semibold">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })()}
        </AnimatedSection>
      ))}
    </motion.div>
  );
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);

  return (
    <div>
      <PageHeader
        title="サービス内容"
        subtitle="AIの力で、あなたのサロンを次のステージへ。"
        imageUrl="/images/page-header-1920x600.png"
      />
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <nav className="sticky top-24 space-y-2">
              <h3 className="font-serif text-2xl font-semibold">
                提供サービス
              </h3>
              {services.map((service) => (
                <button
                  key={service.name}
                  onClick={() => setSelectedService(service)}
                  className={cn(
                    "relative block w-full rounded-md p-3 text-left transition",
                    selectedService.name === service.name
                      ? "bg-gray-100 dark:bg-gray-800"
                      : "hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                  )}
                >
                  {selectedService.name === service.name && (
                    <motion.div
                      layoutId="active-service-indicator"
                      className="absolute bottom-0 left-0 top-0 w-1 rounded-full bg-primary"
                    />
                  )}
                  <span className="relative ml-4 font-semibold">
                    {service.name}
                  </span>
                </button>
              ))}
            </nav>
          </aside>
          <main className="mt-12 lg:col-span-9 lg:mt-0">
            <AnimatePresence mode="wait">
              <ServiceDetail service={selectedService} />
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
