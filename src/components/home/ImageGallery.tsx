"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const galleryImages = [
    { src: "/images/placeholder-800x600.png", alt: "ギャラリー画像1" },
    { src: "/images/placeholder-800x600.png", alt: "ギャラリー画像2" },
    { src: "/images/placeholder-800x600.png", alt: "ギャラリー画像3" },
    { src: "/images/placeholder-800x600.png", alt: "ギャラリー画像4" },
  ];

function ParallaxImage({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="overflow-hidden rounded-lg shadow-xl mb-4 break-inside-avoid">
        <motion.div style={{ y }} className="relative h-full">
            <Image
                src={src}
                alt="AIビューティーサロンのイメージ"
                width={500}
                height={750}
                className="object-cover w-full h-auto"
            />
        </motion.div>
    </div>
  );
}


export function ImageGallery() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            至高のラグジュアリーを、その目で
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            先進性がもたらす、洗練された美の世界観をご覧ください。
          </p>
        </motion.div>
        
        <div className="columns-2 md:columns-3 gap-4">
            {galleryImages.map((image, index) => (
                <ParallaxImage key={index} src={image.src} />
            ))}
        </div>
      </div>
    </section>
  );
} 