"use client";
import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import Stat from "@/components/Stat";
import {
  TOKENOMICS_DATA,
  TOKEN_ADDRESS,
  TOKEN_NAME,
  TOKEN_SYMBOL,
  TOTAL_SUPPLY,
} from "@/data/config";
import { PieChart } from "react-minimal-pie-chart";
import { FaCopy } from "react-icons/fa";
import Toast from "@/components/Toast";
import { useState } from "react";

const TokenomicsSection = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert && <Toast title="Token address copied" />}
      <section id="tokenomics">
        <SectionTitle title="Tokenomics" />
        <div className="grid grid-flow-col gap-8 items-center justify-center ">
          <img
            className="object-cover rounded-xl h-full"
            src="images/squirtle-eating.gif"
          ></img>
          <div className="stats stats-vertical shadow">
            {[
              { title: "Total Supply", value: TOTAL_SUPPLY },
              { title: "Token Name", value: TOKEN_NAME },
              { title: "Token Symbol", value: TOKEN_SYMBOL },
              { title: "Block Chain", value: "Solana" },
            ].map(({ title, value }) => (
              <Stat key={title} title={title} value={value} />
            ))}
          </div>
        </div>
        <Card>
          <span className="card-body">
            <span className="flex items-center justify-center gap-4 font-extrabold text-2xl">
              Token Address
              <button
                className="btn  btn-outline"
                onClick={() => {
                  setShowAlert(true);
                  navigator.clipboard.writeText(TOKEN_ADDRESS);
                  setTimeout(() => {
                    setShowAlert(false);
                  }, 2000);
                }}
              >
                <FaCopy />
                {TOKEN_ADDRESS}
              </button>
            </span>
          </span>
        </Card>
        <div className="relative mt-8">
          <img
            className="absolute w-3/5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            src="/images/logo.png"
          />
          <PieChart
            data={TOKENOMICS_DATA}
            animate
            rounded
            lineWidth={3}
            labelPosition={109}
            label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}%`}
            labelStyle={(index) => ({
              fill: TOKENOMICS_DATA[index].color,
              fontSize: "5px",
            })}
          />
        </div>
      </section>
    </>
  );
};

export default TokenomicsSection;
