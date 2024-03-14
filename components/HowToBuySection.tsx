import { SectionTitle } from "@/components/SectionTitle";
import { RAYDIUM_URL } from "@/data/config";

const HowToBuySection = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <SectionTitle title="HOW TO BUY" />
      <p className="text-center">
        Swap on Raydium Trade <strong>$SOL</strong> with{" "}
        <strong>$SQUIRTLE</strong> <br />
        If you cannot find it paste this token address in Raydium
      </p>
      <p className="text-accent text-sm">
        9zn52BFG4uDKt7rL68eP7qDUE9WBEbarxfcA339LGXV5
      </p>
      <a
        href={RAYDIUM_URL}
        target="_blank"
        rel="noreferrer"
        className=" btn btn-outline btn-primary"
      >
        SWAP ON <img className="h-[30px]" src="/images/raydium.png" />
      </a>
    </section>
  );
};

export default HowToBuySection;
