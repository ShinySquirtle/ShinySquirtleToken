import RoadMapCard from "@/components/RoadMapCard";
import { SectionTitle } from "@/components/SectionTitle";

const RoadMapSection = () => {
  return (
    <section id="road-map">
      <SectionTitle title="Roadmap" />
      <div className="flex flex-wrap items-center justify-center gap-8">
        {[
          {
            month: "March",
            goals: [
              "Complete Smart Contract Development",
              "Launch Website and Social Media Channels",
              "Initiate Community Building Campaign",
            ],
          },
          {
            month: "April",
            goals: [
              "Audit Smart Contract for Security",
              "List on CoinMarketCap and CoinGecko Listings",
              "Release Whitepaper detailing project vision and tokenomics",
            ],
          },
          {
            month: "May",
            goals: [
              "Achieve 1M Market Cap",
              "Secure Listing on a Centralized Exchange (CEX)",
              "Launch Initial Marketing Campaigns",
              "Pay for water bottles with SQUIRTLE",
            ],
          },
          {
            month: "July",
            goals: [
              "Contribute in saving the sea turtles",
              "Launch Mobile Wallet Application",
              "Community Vote for Future Development Priorities",
              "Expand Partnerships with Other Projects",
            ],
          },
        ].map(({ goals, month }) => (
          <RoadMapCard key={month} month={month} goals={goals} />
        ))}
      </div>
    </section>
  );
};

export default RoadMapSection;
