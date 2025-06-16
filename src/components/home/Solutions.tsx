"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    title: "最新AI技術の活用",
    description: "トレンドのAI技術を導入し、顧客満足度とリピート率を向上。",
    imageUrl: "/images/feature-item-600x400.png",
    link: "/services#集客自動化"
  },
  {
    title: "データ駆動型経営",
    description: "顧客データを分析し、パーソナライズされたサービスを提供。",
    imageUrl: "/images/feature-item-600x400.png",
    link: "/services#リピート向上"
  },
  {
    title: "スタッフの生産性向上",
    description: "単純作業を自動化し、スタッフが専門業務に集中できる環境を構築。",
    imageUrl: "/images/feature-item-600x400.png",
    link: "/services#採用強化"
  }
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
      <div className="container mx-auto">
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

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
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
                  alt={solution.title}
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