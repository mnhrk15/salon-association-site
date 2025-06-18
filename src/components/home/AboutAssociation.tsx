"use client";

import { AnimatedSection } from "@/components/common/AnimatedSection";
import { motion, Variants, Easing } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as Easing,
    },
  },
};

export function AboutAssociation() {
  return (
    <AnimatedSection className="bg-stone-50 dark:bg-stone-900 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-base font-semibold leading-7 text-primary"
            variants={itemVariants}
          >
            協会設立の想い
          </motion.h2>
          <motion.p 
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-serif"
            variants={itemVariants}
          >
            美容師の平均年収を、500万円以上へ
          </motion.p>
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400"
            variants={itemVariants}
          >
            理美容師のなり手が不足する一方、店舗はオーバーストア状態。
            私たちは、AIとDXの力でこの構造的な課題を解決し、すべてのスタイリストが本業に誇りと喜びを持って集中できる環境を創出。協会サポート店舗の美容師が、平均年収500万円以上を達成する社会の実現を目指します。
          </motion.p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
} 