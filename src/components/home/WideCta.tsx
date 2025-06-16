import Image from "next/image";

export function WideCta() {
    return (
        <section className="relative py-32 text-center text-white">
            <Image
                src="/images/placeholder-1920x800.png"
                alt="背景画像"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">
                    // ... existing code ...
                </h2>
            </div>
        </section>
    );
} 