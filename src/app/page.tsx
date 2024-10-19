import HomeBanner from "@/components/homepage/HomeBanner";
import HomeFeatures from "@/components/homepage/HomeFeatures";
import HowItWorks from "@/components/homepage/HowItWorks";
import HomeTestimonials from "@/components/homepage/HomeTestimonials";
import HomeCTA from "@/components/homepage/HomeCTA";

export default function Home() {
  return (
      <>
          <HomeBanner />
          <HomeFeatures />
          <HowItWorks />
          <HomeTestimonials />
          <HomeCTA />
      </>
  );
}
