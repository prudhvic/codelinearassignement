import BannerSection from "@/components/ui/BannerSection";
import HeroSection from "@/components/ui/HeroSection";
import SolutionsSection from "@/components/ui/SolutionsSection";
import MobileFeaturesSection from "@/components/ui/MobileFeaturesSection";
import CaseStudiesSection from "@/components/ui/CaseStudiesSection";
import FeatureSection from "@/components/ui/FeatureSection";
import InsightsSection from "@/components/ui/InsightsSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <HeroSection />
      <SolutionsSection />
      <BannerSection />
      <FeatureSection />
      <MobileFeaturesSection />
      <CaseStudiesSection />
      <InsightsSection />
      <FeatureSection isWaterMark={false} />
      <Footer />
    </div>
  );
}
