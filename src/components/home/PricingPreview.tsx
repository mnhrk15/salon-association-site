"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const pricingPlans = [
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
                <motion.div
                    key={plan.name}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Card className={`flex flex-col h-full ${plan.isFeatured ? 'border-primary border-2' : ''}`}>
                        <CardHeader>
                            <CardTitle>{plan.name}</CardTitle>
                            <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-sm font-normal">/月</span></p>
                            <ul className="space-y-2">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <Check className="h-4 w-4 text-green-500 mr-2" />
                                        <span className="text-muted-foreground text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" variant={plan.isFeatured ? 'default' : 'outline'}>
                                <Link href={plan.href}>{plan.cta}</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
} 