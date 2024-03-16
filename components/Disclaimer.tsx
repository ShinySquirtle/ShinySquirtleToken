import { SectionTitle } from "@/components/SectionTitle";
import { TOKEN_SYMBOL } from "@/data/config";

export const Disclaimer = () => {
  return (
    <section className="w-full flex-col flex items-center justify-center">
      <SectionTitle title="DISCLAIMER" />
      <div className="card w-3/4 bg-base-100 shadow-xl">
        <span className="card-body">
          {TOKEN_SYMBOL} is an independent digital asset and is not associated
          with or endorsed by Pokémon, The Pokémon Company International, or
          Nintendo. {TOKEN_SYMBOL} is a unique collectible with no official
          connection to the Pokémon franchise. The creators of {TOKEN_SYMBOL} do
          not claim any partnership with the official Pokémon brand. Users
          should be aware that {TOKEN_SYMBOL} ownership does not confer any
          rights within the Pokémon universe. The creators of {TOKEN_SYMBOL}{" "}
          disclaim any liability for user actions related to the token,
          including financial transactions and investments.
        </span>
      </div>
    </section>
  );
};
export default Disclaimer;
