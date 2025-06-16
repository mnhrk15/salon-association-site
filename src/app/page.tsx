import { FullWidthCta } from "@/components/home/FullWidthCta";
import { Hero } from "@/components/home/Hero";
import { ImageGallery } from "@/components/home/ImageGallery";
import { PricingPreview } from "@/components/home/PricingPreview";
import { Solutions } from "@/components/home/Solutions";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <ImageGallery />
      <FullWidthCta />
      <PricingPreview />
    </>
  );
}
