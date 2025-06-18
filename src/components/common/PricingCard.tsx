"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PricingPlan } from "@/lib/plans";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card
        className={cn(
          "flex flex-col h-full",
          plan.isFeatured ? "border-primary border-2" : ""
        )}
      >
        <CardHeader>
          <CardTitle className="font-serif flex items-center justify-between">
            <span>{plan.name}</span>
            {plan.isFeatured && (
              <span className="sr-only">(おすすめプラン)</span>
            )}
          </CardTitle>
          <CardDescription>{plan.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-baseline justify-center">
            <p className="text-4xl lg:text-5xl font-bold">
              {parseInt(plan.price).toLocaleString()}
            </p>
            {plan.priceAnnotation && (
              <span className="text-lg font-normal text-muted-foreground ml-1">{plan.priceAnnotation}</span>
            )}
          </div>
          {plan.features && (
            <ul className="space-y-3 mt-6 text-left">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter>
          <Button
            asChild
            className="w-full"
            size="lg"
            variant={plan.isFeatured ? "default" : "outline"}
          >
            <Link href={plan.href}>{plan.cta}</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 