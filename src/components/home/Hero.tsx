"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      {/* 
        NOTE:
        ここに背景画像を配置してください: /public/images/hero-background.jpg
      */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 8, ease: "easeInOut" }}
      >
        <Image
          src="/images/hero-background.png"
          alt="サロンの背景画像"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <motion.h1
          className="font-serif text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          美の未来を、AIと共に。
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          AIの力でサロン経営を革新し、最高の顧客体験と収益向上を実現する。
          <br />
          さあ、次世代のビューティービジネスへ。
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          className="mt-10"
        >
          <Button asChild size="lg" className="font-bold">
            <Link href="/pricing">会員プランを見る</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 