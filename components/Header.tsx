"use client";
import { BIRDEYE_URL, RAYDIUM_URL, headerLinks } from "@/data/config";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="w-full">
        <ul className="p-4 w-full flex flex-wrap flex-col md:flex-row gap-6 justify-center items-center mr-1">
          <img className="h-[50px]" src="/images/logo.png" />
          {headerLinks.map((linkConfig, idx) => {
            return (
              <li key={linkConfig.path}>
                <a
                  href={linkConfig.path}
                  className={`font-bold hover:text-primary`}
                >
                  {linkConfig.text}
                </a>
              </li>
            );
          })}
          <a
            href={RAYDIUM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline "
          >
            BUY NOW
          </a>
          <a
            href={BIRDEYE_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-outline "
          >
            CHARTS
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
