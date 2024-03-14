import { SectionTitle } from "@/components/SectionTitle";
import { RAYDIUM_URL } from "@/data/config";

const HowToBuySection = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <SectionTitle title="HOW TO BUY" />
      Swap on Raydium with Solana <br />
      Paste this token address in Raydium
      <p className="text-accent">
        9zn52BFG4uDKt7rL68eP7qDUE9WBEbarxfcA339LGXV5
      </p>
      <a
        href={RAYDIUM_URL}
        target="_blank"
        rel="noreferrer"
        className=" btn btn-outline btn-primary"
      >
        BUY ON <img className="h-[30px]" src="/images/raydium.png" />
      </a>
    </section>
  );
};

export default HowToBuySection;
