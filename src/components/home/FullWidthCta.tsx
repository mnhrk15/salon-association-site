"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function FullWidthCta() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cta-background-1920x800.png"
          alt="AI技術のコンセプトを表す抽象的な背景画像"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative container mx-auto flex flex-col items-center text-center text-white">
        <motion.h2
          className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          あなたのサロンに、革命を。
        </motion.h2>
        <motion.p
          className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          もう一人で悩まない。AIビューティーサロン推進協会が、
          <br />
          集客から採用まで、あなたの経営をトータルでサポートします。
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <Button asChild className="font-bold text-lg px-10 py-5 h-auto">
            <Link href="/contact">今すぐ相談する</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 