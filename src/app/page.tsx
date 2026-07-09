import InteractiveBackground from "@/components/interactive-background";
import PremiumEffects from "@/components/ui/premium-effects";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Privacy from "@/components/privacy";
import UseCases from "@/components/use-cases";
import WhyChoose from "@/components/why-choose";
import OpenSource from "@/components/open-source";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <PremiumEffects />
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Privacy />
      <UseCases />
      <WhyChoose />
      <OpenSource />
      <CTA />
      <Footer />
    </>
  );
}
