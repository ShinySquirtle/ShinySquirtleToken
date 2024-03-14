"use client";
import { RAYDIUM_URL, headerLinks } from "@/data/config";
import { usePathname, useParams, useSearchParams } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const params = usePathname();
  const search = useSearchParams();

  return (
    <header>
      <nav className="w-full">
        <ul className="p-2 w-full flex flex-wrap flex-col md:flex-row gap-6 justify-center items-center mr-1">
          <img className="h-[50px]" src="/images/logo.png" />
          {headerLinks.map((linkConfig, idx) => {
            let isActive = pathname === linkConfig.path;

            return (
              <li className="uppercase" key={linkConfig.path}>
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
            className="btn btn-outline btn-primary"
          >
            BUY ON <img className="h-[30px]" src="/images/raydium.png" />
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
