"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { pricingPlans } from "@/lib/plans";

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

export function PricingPreview() {
  return (
    <AnimatedSection className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl font-serif">
            料金プラン
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            あなたのサロンの規模とニーズに合わせた、最適なプランをご提案します。
          </p>
        </div>
        <motion.div
          className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`flex flex-col rounded-2xl p-8 shadow-xl ${
                plan.isFeatured
                  ? "border-2 border-primary"
                  : "border border-gray-200 dark:border-gray-700"
              } bg-white dark:bg-gray-800`}
            >
              <h3 className="text-2xl font-semibold leading-8 text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                  /月
                </span>
              </div>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-8"
                variant={plan.isFeatured ? "default" : "outline"}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16 text-center"
        >
          <Button asChild size="lg">
            <Link href="/pricing">全てのプランを見る →</Link>
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
} 