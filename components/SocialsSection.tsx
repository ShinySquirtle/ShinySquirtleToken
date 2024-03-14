import { SectionTitle } from "@/components/SectionTitle";
import { TWITTER_URL } from "@/data/config";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialsSection = () => {
  return (
    <section id="socials">
      <SectionTitle title="Socials" />
      <div className="flex items-center justify-center gap-8">
        <a href={TWITTER_URL} target="_blank">
          <FaTwitter size={40} />
        </a>
        <a href="" target="_blank">
          <FaTelegramPlane size={40} />
        </a>
        <a href="" target="_blank">
          <FaInstagram size={40} />
        </a>
      </div>
    </section>
  );
};

export default SocialsSection;
