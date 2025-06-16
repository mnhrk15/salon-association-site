"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    title: "AIによる集客の完全自動化",
    description:
      "最新のAI技術を駆使し、ターゲット顧客の特定からアプローチ、予約獲得までを自動化。あなたは施術に集中するだけで、新規顧客が自然と集まる仕組みを構築します。",
    imageUrl: "https://images.unsplash.com/photo-1556742518-b82c73b8a1dc?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "AIによる集客自動化のイメージ",
  },
  {
    title: "リピート率を最大化する顧客体験",
    description:
      "顧客データをAIが分析し、一人ひとりに最適化されたアフターフォローや再来店促進の提案を自動生成。顧客満足度を劇的に向上させ、生涯顧客を育成します。",
    imageUrl: "https://images.unsplash.com/photo-1580477373188-297dc6944de3?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "リピート率向上のイメージ",
  },
  {
    title: "データドリブンな採用戦略",
    description:
      "求める人材像を明確にし、AIが最適な候補者をリストアップ。採用プロセスを効率化し、ミスマッチを防ぎます。優秀なスタッフが、あなたのサロンの成長を加速させます。",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "採用強化のイメージ",
  },
];

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -100,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

const cardVariantsR: Variants = {
    offscreen: {
      opacity: 0,
      x: 100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

export function Solutions() {
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
            サロン経営の課題を、
            <span className="text-primary">AI</span>
            で解決
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            私たちは、3つのコアソリューションであなたのビジネスを次のステージへ導きます。
          </p>
        </motion.div>

        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={index % 2 === 0 ? cardVariants : cardVariantsR}
            >
              <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                <h3 className="font-serif text-3xl font-bold mb-4">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
              <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                <Image
                  src={solution.imageUrl}
                  alt={solution.imageAlt}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 