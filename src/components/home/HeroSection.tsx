import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative h-[80vh] w-full">
            <Image
                src="/images/placeholder-1920x1280.png"
                alt="サロンのイメージ画像"
                layout="fill"
                objectFit="cover"
                priority
                className="opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    Welcome to Our Salon
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base md:text-lg mb-8"
                >
                    Experience the best hair care in town.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-primary text-white px-6 py-3 rounded-full text-base md:text-lg hover:bg-primary-focus"
                >
                    Book Now
                </motion.button>
            </div>
        </section>
    );
} 