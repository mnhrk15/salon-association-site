"use client";

import { AnimatedSection } from "@/components/common/AnimatedSection";
import { BarChart, Lightbulb, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const solutions = [
  {
    title: "最新AI技術の活用",
    description: "トレンドのAI技術を導入し、顧客満足度とリピート率を向上。",
    imageUrl: "/images/feature-item-600x400.png",
    link: "/services#集客自動化",
    icon: BarChart
  },
  {
    title: "データ駆動型経営",
    description: "顧客データを分析し、パーソナライズされたサービスを提供。",
    imageUrl: "/images/feature-item-600x400.png",
    link: "/services#リピート向上",
    icon: Lightbulb
  },
  {
    title: "スタッフの生産性向上",
    description: "単純作業を自動化し、スタッフが専門業務に集中できる環境を構築。",
    imageUrl: "/images/feature-item-600x400.png",
    link: "/services#採用強化",
    icon: Users
  }
];

export function Solutions() {
  return (
    <AnimatedSection className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-serif">
            3つの解決策
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            私たちは、AI技術を駆使してサロン経営の課題を包括的にサポートします。
          </p>
        </div>
        <motion.div
          className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={solution.imageUrl}
                  alt={solution.title}
                  width={600}
                  height={400}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white dark:bg-gray-800 p-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 dark:bg-primary/20 text-primary p-2 rounded-md">
                      <solution.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                    {solution.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={solution.link}
                    className="font-semibold text-primary hover:underline"
                  >
                    詳しく見る →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
} 