import BannerSection from "@/components/ui/bannerSection";
import HeroSection from "@/components/ui/HeroSection";
import SolutionsSection from "@/components/ui/solutionsSection";
import MobileFeaturesSection from "@/components/ui/mobileFeaturesSection";
import CaseStudiesSection from "@/components/ui/caseStudiesSection";
import FeatureSection from "@/components/ui/featureSection";
import InsightsSection from "@/components/ui/insightsSection";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div>
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
