"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { motion } from "framer-motion";

const corporateProfile = {
  "法人名": "一般社団法人AIビューティーサロン推進協会",
  "設立日": "2024年4月1日",
  "所在地": "東京都渋谷区神宮前1-1-1",
  "代表理事": "山田 太郎",
  "事業内容": [
    "AI技術を活用した美容サロンの経営支援",
    "美容業界におけるDX推進",
    "関連技術の研究開発および情報発信",
    "セミナー、イベントの企画・運営",
  ],
};

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                title="協会について"
                subtitle="私たちの理念と活動内容をご紹介します。"
                imageUrl="/images/page-header-1920x600.png"
            />

            <section className="py-24 bg-background">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="font-serif text-4xl font-bold">私たちの使命</h2>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                            私たちは、AIをはじめとする最先端テクノロジーと美容業界の知見を融合させ、
                            サロン経営のあらゆる課題を解決することを使命としています。
                            集客、リピート、採用、そして顧客体験の向上まで、
                            データと感性を両立させた新しい形のビューティービジネスを提案し、
                            業界全体の発展に貢献します。
                        </p>
                    </motion.div>
                </div>
            </section>
            
            <section className="py-24 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto">
                    <motion.h2 
                        className="text-center font-serif text-4xl font-bold mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        法人概要
                    </motion.h2>
                    <motion.div 
                        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        {Object.entries(corporateProfile).map(([key, value]) => (
                            <div key={key} className="flex flex-col md:flex-row border-b py-4 md:border-b-0 mb-4 md:mb-0">
                                <dt className="w-full md:w-1/4 font-semibold text-foreground">{key}</dt>
                                <dd className="w-full md:w-3/4 text-muted-foreground">
                                    {Array.isArray(value) ? (
                                        <ul className="list-disc list-inside">
                                            {value.map((item) => <li key={item}>{item}</li>)}
                                        </ul>
                                    ) : value}
                                </dd>
                            </div>
                        ))}
                        <div className="border-t mt-4 pt-4 md:hidden" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
