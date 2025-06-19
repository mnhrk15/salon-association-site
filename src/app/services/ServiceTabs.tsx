"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useSearchParams } from 'next/navigation'

// --- Type Definitions ---
type TextImageSection = {
  type: 'text-image';
  title: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  imageLeft?: boolean;
};

type FullImageSection = {
    type: 'full-image';
    imageUrl: string;
    imageAlt: string;
};

type BenefitsSection = {
    type: 'benefits';
    title: string;
    items: string[];
};

type ServiceSection = TextImageSection | FullImageSection | BenefitsSection;

export type Service = {
  id: string;
  name: string;
  title: string;
  sections: ServiceSection[];
};

// --- Child Components ---

const ServiceDetail = ({ service }: { service: Service }) => {
  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      key={service.name}
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="space-y-20"
    >
      {service.sections.map((section, index) => (
        <AnimatedSection key={index}>
          {(() => {
            switch (section.type) {
              case 'text-image':
                return (
                  <div className={`grid items-center gap-12 md:grid-cols-2`}>
                    <div className={cn("text-left", section.imageLeft && "md:order-last")}>
                      <h3 className="font-serif text-3xl font-bold">
                        {section.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {section.content}
                      </p>
                    </div>
                    <div className="relative h-80 w-full">
                      <Image src={section.imageUrl} alt={section.imageAlt} fill className="rounded-lg object-cover shadow-xl" />
                    </div>
                  </div>
                );
              case 'full-image':
                return (
                  <div className="relative mx-auto h-[500px] w-full max-w-5xl">
                    <Image src={section.imageUrl} alt={section.imageAlt} fill className="rounded-lg object-cover shadow-xl" />
                  </div>
                );
              case 'benefits':
                return (
                  <div className="rounded-lg bg-gray-50 p-12 dark:bg-gray-900">
                    <h3 className="text-center font-serif text-3xl font-bold">
                      {section.title}
                    </h3>
                    <div className="mt-10 grid gap-8 md:grid-cols-3">
                      {section.items.map((item) => (
                        <div key={item} className="flex items-start gap-4">
                          <Check className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                          <p className="font-semibold">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })()}
        </AnimatedSection>
      ))}
    </motion.div>
  );
};


// --- Main Client Component ---

export function ServiceTabs({ services }: { services: Service[] }) {
    const searchParams = useSearchParams();
    const sectionRef = useRef<HTMLElement>(null);
    const initialServiceId = searchParams.get('tab');

    const getInitialService = () => {
        if (initialServiceId) {
            return services.find(s => s.id === initialServiceId) || services[0];
        }
        return services[0];
    }

    const [selectedService, setSelectedService] = useState<Service>(getInitialService);

    useEffect(() => {
        const serviceFromUrl = services.find(s => s.id === initialServiceId);
        if (serviceFromUrl && serviceFromUrl.id !== selectedService.id) {
            setSelectedService(serviceFromUrl);
        }
    }, [initialServiceId, services, selectedService.id]);


    useEffect(() => {
        if (initialServiceId && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [initialServiceId]);


    const handleServiceSelect = (service: Service) => {
        setSelectedService(service);
        const url = new URL(window.location.href);
        url.hash = service.id;
        window.history.pushState({}, '', url);
    };

    return (
        <section className="py-24 bg-background" ref={sectionRef} id="services-section">
            <div className="container mx-auto">
                <AnimatedSection className="mb-16 text-center">
                    <h2 className="font-serif text-4xl font-bold">提供サービス</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        貴社の課題解決をトータルサポートする、3つの主要サービス。
                    </p>
                </AnimatedSection>

                <div className="grid gap-16 lg:grid-cols-12">
                    <AnimatedSection className="lg:col-span-3">
                        <div className="flex flex-col space-y-2">
                            {services.map((service) => (
                                <button
                                    key={service.name}
                                    className={cn(
                                        "rounded-lg px-4 py-3 text-left font-semibold transition-colors duration-200",
                                        selectedService.name === service.name
                                            ? "bg-primary text-primary-foreground"
                                            : "hover:bg-muted"
                                    )}
                                    onClick={() => handleServiceSelect(service)}
                                >
                                    {service.name}
                                </button>
                            ))}
                        </div>
                    </AnimatedSection>

                    <div className="lg:col-span-9">
                        <AnimatePresence mode="wait">
                            <ServiceDetail service={selectedService} />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
} 