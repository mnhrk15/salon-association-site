"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { PricingCard, PricingPlan } from "@/components/common/PricingCard";
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Minus } from "lucide-react";

const pricingPlans: PricingPlan[] = [
  {
    name: "ライト",
    price: "¥30,000",
    description: "まずはAIの力を体験したい個人オーナー様向け",
    cta: "このプランで始める",
    href: "/contact",
    isFeatured: false,
  },
  {
    name: "プレミアム",
    price: "¥100,000",
    description: "本格的に経営改善を目指すサロン様向け",
    cta: "このプランで始める",
    href: "/contact",
    isFeatured: true,
  },
  {
    name: "ダイヤモンド",
    price: "¥300,000",
    description: "業界をリードする次世代サロンを目指す方向け",
    cta: "このプランで始める",
    href: "/contact",
    isFeatured: false,
  },
];

const featureComparison = [
    { feature: "AI集客自動化ツール", light: true, premium: true, diamond: true },
    { feature: "SNS投稿テンプレート", light: true, premium: true, diamond: true },
    { feature: "月1回のオンライン相談", light: true, premium: false, diamond: false },
    { feature: "AIによるリピート促進分析", light: false, premium: true, diamond: true },
    { feature: "採用サポート", light: false, premium: true, diamond: true },
    { feature: "週1回のオンライン相談", light: false, premium: true, diamond: false },
    { feature: "専属コンサルタントによる伴走", light: false, premium: false, diamond: true },
    { feature: "経営データAI分析レポート", light: false, premium: false, diamond: true },
    { feature: "無制限のオンライン相談", light: false, premium: false, diamond: true },
]

const Checkmark = () => <Check className="text-green-500 mx-auto" />;
const Dash = () => <Minus className="text-gray-400 mx-auto" />;


export default function PricingPage() {
    return(
        <div>
            <PageHeader
                title="料金プラン"
                subtitle="あなたのサロンに最適なプランをお選びください"
                imageUrl="/images/placeholder-1920x600.png"
            />
            
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-center">
                        {pricingPlans.map((plan) => (
                           <PricingCard key={plan.name} plan={plan} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-center font-serif text-4xl font-bold mb-12">機能比較</h2>
                        <Card>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[40%]">機能</TableHead>
                                        <TableHead className="text-center">ライト</TableHead>
                                        <TableHead className="text-center">プレミアム</TableHead>
                                        <TableHead className="text-center">ダイヤモンド</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {featureComparison.map((item) => (
                                    <TableRow key={item.feature}>
                                        <TableCell className="font-medium">{item.feature}</TableCell>
                                        <TableCell>{item.light ? <Checkmark/> : <Dash/>}</TableCell>
                                        <TableCell>{item.premium ? <Checkmark/> : <Dash/>}</TableCell>
                                        <TableCell>{item.diamond ? <Checkmark/> : <Dash/>}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
