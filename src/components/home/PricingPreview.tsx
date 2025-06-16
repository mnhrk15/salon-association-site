"use client";

import { motion } from "framer-motion";
import { PricingCard, PricingPlan } from "../common/PricingCard";

const pricingPlans: PricingPlan[] = [
  {
    name: "ライト",
    price: "¥30,000",
    description: "まずはAIの力を体験したい個人オーナー様向け",
    features: ["集客自動化ツール(基本)", "SNS投稿テンプレート", "月1回のオンライン相談"],
    cta: "プラン詳細へ",
    href: "/pricing",
  },
  {
    name: "プレミアム",
    price: "¥100,000",
    description: "本格的に経営改善を目指すサロン様向け",
    features: [
      "集客自動化ツール(フル機能)",
      "AIによるリピート促進分析",
      "採用サポート",
      "週1回のオンライン相談",
    ],
    cta: "プラン詳細へ",
    href: "/pricing",
    isFeatured: true,
  },
  {
    name: "ダイヤモンド",
    price: "¥300,000",
    description: "業界をリードする次世代サロンを目指す方向け",
    features: [
        "プレミアムプランの全機能",
        "専属コンサルタントによる伴走",
        "経営データAI分析レポート",
        "無制限のオンライン相談",
    ],
    cta: "プラン詳細へ",
    href: "/pricing",
  },
];

export function PricingPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            あなたに最適なプランを
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            事業規模や目標に合わせて選べる3つのプランをご用意しました。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
        </div>
      </div>
    </section>
  );
} 