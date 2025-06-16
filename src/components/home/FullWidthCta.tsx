"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function FullWidthCta() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url(/images/placeholder-1920x800.png)",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-6 text-center text-white">
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
          <Button asChild size="lg" className="font-bold text-lg py-7 px-8">
            <Link href="/contact">今すぐ相談する</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 