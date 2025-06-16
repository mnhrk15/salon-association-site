"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const solutions = [
  {
    title: "集客の自動化",
    description: "AIがあなたのサロンに最適な顧客を自動で発見し、アプローチ。あなたは施術に集中するだけ。",
    imageUrl: "/images/placeholder-600x400.png",
    link: "/services#集客自動化"
  },
  {
    title: "リピート率の向上",
    description: "顧客一人ひとりのデータを分析し、パーソナライズされたアプローチで、生涯顧客を育成します。",
    imageUrl: "/images/placeholder-600x400.png",
    link: "/services#リピート向上"
  },
  {
    title: "採用の最適化",
    description: "データに基づき、あなたのサロンに本当にマッチする人材を発掘。採用のミスマッチを防ぎます。",
    imageUrl: "/images/placeholder-600x400.png",
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