import HowToBuySection from "@/components/HowToBuySection";
import RoadMapSection from "@/components/RoadMapSection";
import ExchangesList from "@/components/ExchangesList";
import TokenomicsSection from "@/components/TokenomicsSection";
import Disclaimer from "@/components/Disclaimer";
import AboutSection from "@/components/AboutSection";
import SocialsSection from "@/components/SocialsSection";

export default function Home() {
  return (
    <main className=" h-full bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="flex flex-col items-center justify-center gap-16 m-2">
        <TokenomicsSection />
        <AboutSection />
        <HowToBuySection />
        <ExchangesList />
        <RoadMapSection />
        <SocialsSection />
        <Disclaimer />
      </div>
    </main>
  );
}
