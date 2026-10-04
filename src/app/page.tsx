import Hero from "@/components/landing/hero";
import Problem from "@/components/landing/problem";
import Pillars from "@/components/landing/pillars";
import Explainable from "@/components/landing/explainable";
import HowItWorks from "@/components/landing/how-it-works";
import SiteFooter from "@/components/landing/site-footer";
import CardJourney from "@/components/landing/card-journey";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#060607]">
      <Hero />
      {/* CardJourney wraps the middle sections with a sticky viewport that a
          black credit card travels across as the user scrolls */}
      <CardJourney>
        <Problem />
        <Pillars />
        <Explainable />
        <HowItWorks />
      </CardJourney>
      <SiteFooter />
    </main>
  );
}
