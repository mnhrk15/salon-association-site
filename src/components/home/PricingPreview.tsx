"use client";

import { motion } from "framer-motion";
import { PricingCard } from "../common/PricingCard";
import { pricingPlans } from "@/lib/plans";

export function PricingPreview() {
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
            あなたに最適なプランを
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            事業規模や目標に合わせて選べる3つのプランをご用意しました。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={{...plan, cta: "プラン詳細へ", href: "/pricing"}} />
            ))}
        </div>
      </div>
    </section>
  );
} 