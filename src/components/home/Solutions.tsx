"use client";

import { AnimatedSection } from "@/components/common/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const solutions = [
  {
    subTitle: "Choose Happiness",
    title: "集客の自動化",
    description:
      "最新のAI技術を活用した広告運用やSNSマーケティングの自動化で、新規顧客の獲得を最大化します。",
    imageUrl: "/images/feature-card-1200x600-1.png",
    link: "/services#集客自動化",
    label: "SERVICES",
  },
  {
    subTitle: "Full of Happiness",
    title: "リピート率の向上",
    description:
      "顧客データ分析に基づいたパーソナライズDMの自動送信や、最適な再来店タイミングの提案で、顧客をファンに変えます。",
    imageUrl: "/images/feature-card-1200x600-2.png",
    link: "/services#リピート向上",
    label: "PACKAGE",
  },
  {
    subTitle: "Create your Story",
    title: "採用の最適化",
    description:
      "AIによる求人票の最適化と応募者スクリーニングで、ミスマッチを減らし、理想の⼈材獲得をサポートします。",
    imageUrl: "/images/feature-card-1200x600-3.png",
    link: "/services#採用強化",
    label: "STYLYING",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
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
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.17, 0.67, 0.83, 0.67], // easeOutBack
    },
  },
};

export function Solutions() {
  return (
    <AnimatedSection className="py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="space-y-20 sm:space-y-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div className="w-full md:w-1/2 lg:w-3/5" variants={imageVariants}>
                <Image
                  src={solution.imageUrl}
                  alt={solution.title}
                  width={1200}
                  height={600}
                  className="rounded-lg object-cover shadow-xl"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div 
                className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0"
                variants={itemVariants}
              >
                <h3 className="font-serif text-2xl text-stone-500">
                  {solution.subTitle}
                </h3>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-serif">
                  {solution.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {solution.description}
                </p>
                <div className="mt-8">
                  <Link
                    href={solution.link}
                    className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
              
              {/* Vertical Label */}
              <motion.div
                variants={itemVariants}
                className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${
                  index % 2 === 1
                    ? "left-0 -translate-x-full"
                    : "right-0 translate-x-full"
                } `}
              >
                <p
                  className="[writing-mode:vertical-rl] text-8xl font-serif text-stone-200 dark:text-stone-800 tracking-widest"
                  style={{ textOrientation: "mixed" }}
                >
                  {solution.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
} 