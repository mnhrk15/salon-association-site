"use client";

import { PageHeader } from "@/components/common/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
    {
      question: "AIに関する専門知識がなくても利用できますか？",
      answer: "はい、もちろんです。私たちのサービスは、AIやITの専門知識がない方でも直感的に操作できるように設計されています。導入から運用まで、専門スタッフが丁寧にサポートしますのでご安心ください。",
    },
    {
      question: "導入までにかかる期間はどのくらいですか？",
      answer: "プランやお客様の状況によって異なりますが、ライトプランの場合、お申し込みから最短1週間で基本的な機能をご利用いただけます。詳細なスケジュールについては、初回のヒアリングの際にご説明いたします。",
    },
    {
      question: "どのくらいの規模のサロンから利用できますか？",
      answer: "個人経営の小規模サロン様から、複数店舗を展開する大規模サロン様まで、あらゆる規模のサロン様にご利用いただけます。事業規模に合わせて最適なプランをご提案いたします。",
    },
    {
      question: "料金の支払い方法を教えてください。",
      answer: "クレジットカード決済と銀行振込に対応しております。月額払いまたは年額払いをお選びいただけます。",
    },
    {
        question: "既存の予約システムや顧客管理システムと連携できますか？",
        answer: "現在お使いのシステムによっては連携が可能です。まずは一度、お使いのシステム名をお知らせください。連携の可否や方法について調査し、ご回答いたします。",
    },
    {
        question: "解約はいつでもできますか？",
        answer: "はい、いつでも解約手続きが可能です。ただし、契約期間の途中で解約された場合でも、残期間分の料金の返金はいたしかねますのでご了承ください。詳細については利用規約をご確認ください。",
    }
  ];

export default function FaqPage() {
  return (
    <div>
        <PageHeader
            title="よくある質問"
            subtitle="サービスに関するご不明点は、まずはこちらをご確認ください。"
            imageUrl="/images/placeholder-1920x600.png"
        />

        <section className="py-24 bg-background">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((faq, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-left font-semibold text-lg">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    </div>
  );
}
