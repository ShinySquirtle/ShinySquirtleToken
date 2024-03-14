import { SectionTitle } from "@/components/SectionTitle";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionTitle title="About" />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center m-8 gap-8">
        <img
          className="object-cover rounded-xl h-[300px]"
          src="images/squirtle-eating.gif"
        ></img>
        <span className="card text-lg bg-base-100">
          <span className="card-body">
            <p>
              Welcome to{" "}
              <strong className="text-primary">Shiny Squirtle</strong>, a
              revolutionary token built on the Solana blockchain.
              <br />
              <br /> Our mission is simple yet impactful: to become the primary
              cryptocurrency for purchasing <strong>water bottles</strong> and
              paying <strong>water bills</strong>, all while making a
              significant contribution to the conservation of{" "}
              <strong>sea turtles</strong>.
              <br />
              <br />
              <br /> 💰Fill your bags
              <br /> 🔥 100x in the next days
              <br /> 🚀 Be on of the Shiny Squirtle early investors
            </p>
          </span>
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
