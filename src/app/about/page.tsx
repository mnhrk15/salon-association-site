"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

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

const boardMembers = [
  {
    name: "山田 太郎",
    title: "代表理事",
    imageUrl: "https://github.com/shadcn.png",
    comment: "AIの力で、美容業界に新しい価値を創造します。共に未来を築きましょう。",
  },
  {
    name: "鈴木 花子",
    title: "理事",
    imageUrl: "https://github.com/shadcn.png",
    comment: "現場の声を大切にし、テクノロジーと美容の架け橋となることを目指します。",
  },
  {
    name: "佐藤 次郎",
    title: "理事",
    imageUrl: "https://github.com/shadcn.png",
    comment: "データに基づいた経営戦略で、サロンオーナーの皆様を強力にサポートします。",
  },
];


export default function AboutPage() {
    return (
        <div>
            <PageHeader
                title="協会について"
                subtitle="私たちの理念と活動について"
                imageUrl="/images/placeholder-1920x600.png"
            />

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
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
                <div className="container mx-auto px-6">
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
                            <div key={key} className="flex flex-col md:flex-row border-b py-4">
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
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                <motion.h2 
                        className="text-center font-serif text-4xl font-bold mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        理事紹介
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {boardMembers.map((member, index) => (
                             <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <Card className="text-center h-full">
                                    <CardHeader className="items-center">
                                        <Avatar className="w-24 h-24 mb-4">
                                            <AvatarImage src={member.imageUrl} alt={member.name}/>
                                            <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                                        </Avatar>
                                        <CardTitle>{member.name}</CardTitle>
                                        <p className="text-sm text-muted-foreground">{member.title}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{member.comment}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
