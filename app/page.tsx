import HowToBuySection from "@/components/HowToBuySection";
import RoadMapSection from "@/components/RoadMapSection";
import ExchangesList from "@/components/ExchangesList";
import TokenomicsSection from "@/components/TokenomicsSection";
import Disclaimer from "@/components/Disclaimer";

export default function Home() {
  return (
    <main className=" h-full bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="flex   flex-col items-center justify-center gap-16">
        <img src="images/squirtle-eating.gif"></img>
        <HowToBuySection />
        <ExchangesList />
        <TokenomicsSection />
        <RoadMapSection />
        <Disclaimer />
      </div>
    </main>
  );
}
