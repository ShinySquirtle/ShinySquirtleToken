import { SectionTitle } from "@/components/SectionTitle";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionTitle title="About" />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center m-8">
        <img
          className="rounded-xl h-[300px]"
          src="images/squirtle-eating.gif"
        ></img>
        <span className="card text-lg bg-base-100">
          <span className="card-body">
            Welcome to Shiny Squirtle, a revolutionary token built on the Solana
            blockchain. Our mission is simple yet impactful: to become the
            primary cryptocurrency for purchasing water bottles and paying water
            bills, all while making a significant contribution to the
            conservation of sea turtles. By leveraging the power of blockchain
            technology, Shiny Squirtle aims to streamline transactions in the
            water industry while promoting environmental sustainability. Join us
            in our journey towards a cleaner, greener future for our oceans and
            communities
          </span>
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
