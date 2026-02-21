import Link from "next/link";
import { usePathname } from "next/navigation";

import Socials from "../components/Socials";

const LETTERS = "suhail".split("");

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">

          {/* logo — only visible on home page */}
          {isHome && (
            <Link href="/">
              <div className="text-3xl font-light tracking-widest uppercase flex items-end overflow-hidden">

                {/* S U H A I L — each letter slides up with staggered delay */}
                {LETTERS.map((char, i) => (
                  <span
                    key={i}
                    className="font-bold inline-block animate-letter-up"
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    {char}
                  </span>
                ))}

                {/* M */}
                <span
                  className="inline-block ml-[0.35em] animate-letter-up"
                  style={{ animationDelay: `${LETTERS.length * 0.07}s` }}
                >
                  m
                </span>

                {/* red dot — pops in last with a spring-like scale */}
                <span
                  className="text-accent inline-block animate-dot-pop"
                  style={{ animationDelay: `${LETTERS.length * 0.07 + 0.25}s` }}
                >
                  .
                </span>
              </div>
            </Link>
          )}

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
