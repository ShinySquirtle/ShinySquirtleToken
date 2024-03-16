import Card from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { TOKEN_NAME } from "@/data/config";

const AboutSection = () => {
  return (
    <section id="about">
      <SectionTitle title={`About ${TOKEN_NAME}`} />
      <Card className="max-w-[600px]">
        <span className="card-body">
          <p>
            Welcome to <strong className="text-primary">Shiny Squirtle</strong>,
            a revolutionary token built on the Solana blockchain.
            <br />
            <br /> Our mission is simple yet impactful: to become the primary
            cryptocurrency for purchasing <strong>water bottles</strong> and
            paying <strong>water bills</strong>, all while making a significant
            contribution to the conservation of <strong>sea turtles</strong>.
            <br />
            <br />
            <br /> 💰Fill your bags
            <br /> 🔥 100x in the next days
            <br /> 🚀 Be on of the Shiny Squirtle early investors
          </p>
        </span>
      </Card>
    </section>
  );
};

export default AboutSection;
