"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { PricingCard } from "@/components/common/PricingCard";
import { motion } from "framer-motion";
import { pricingPlans } from "@/lib/plans";
import { AlertTriangle } from "lucide-react";

export default function PricingPage() {
    return(
        <>
            <PageHeader
                title="料金プラン"
                description="お客様のサロンの規模とニーズに合わせた、最適なプランをご提案します。"
                imageUrl="/images/page-header-1920x600.png"
            />
            
            <section className="py-24 bg-background">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 items-start">
                        {pricingPlans.map((plan) => (
                           <PricingCard key={plan.name} plan={plan} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg dark:bg-yellow-900/20 dark:border-yellow-500">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <AlertTriangle className="h-5 w-5 text-yellow-400 dark:text-yellow-500" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                              <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200">ご契約前の注意事項</h3>
                              <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                                <ul className="list-disc space-y-2 pl-5">
                                    <li>表示価格はすべて税抜き価格です。別途消費税がかかります。</li>
                                    <li>1店舗あたりスタッフ10名までを「1店舗」としてカウントします。</li>
                                    <li>スタッフが11名以上になる場合、超過10名ごとに「＋1店舗」として追加計算されます。</li>
                                    <li>契約外での不正活用が発覚した場合、契約開始から1店舗または1名ごとに月額50,000円を請求致します。</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
