import { SectionTitle } from "@/components/SectionTitle";
import { TWITTER_URL } from "@/data/config";
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";

const SOCIALS_INFO = [
  {
    url: TWITTER_URL,
    icon: <FaTwitter size={40} />,
  },
  {
    url: "",
    icon: <FaTelegramPlane size={40} />,
  },
  {
    url: "",
    icon: <FaInstagram size={40} />,
  },
];

const SocialsSection = () => {
  return (
    <section id="socials">
      <SectionTitle title="Socials" />
      <div className="flex items-center justify-center gap-8">
        {SOCIALS_INFO.map(({ url, icon }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center btn btn-square outline-accent"
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialsSection;
