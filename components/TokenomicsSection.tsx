"use client";
import { SectionTitle } from "@/components/SectionTitle";
import Stat from "@/components/Stat";
import { TOKENOMICS_DATA } from "@/data/config";
import { PieChart } from "react-minimal-pie-chart";

const TokenomicsSection = () => {
  return (
    <section id="tokenomics">
      <SectionTitle title="Tokenomics" />
      <div className="stats stats-vertical shadow mb-8">
        {[
          { title: "Total Supply", value: "69B" },
          { title: "Token Name", value: "Shiny Squirtle" },
          { title: "Token Symbol", value: "$SQUIRTLE" },
          { title: "Block Chain", value: "Solana" },
        ].map(({ title, value }) => (
          <Stat key={title} title={title} value={value} />
        ))}
      </div>
      <div className="relative">
        <img
          className="absolute w-3/5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          src="/images/logo.png"
        />
        <PieChart
          data={TOKENOMICS_DATA}
          animate
          rounded
          lineWidth={15}
          label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}%`}
          labelStyle={(index) => ({
            fill: TOKENOMICS_DATA[index].color,
            fontSize: "5px",
            fontFamily: "sans-serif",
          })}
          labelPosition={112}
        />
      </div>
    </section>
  );
};

export default TokenomicsSection;
