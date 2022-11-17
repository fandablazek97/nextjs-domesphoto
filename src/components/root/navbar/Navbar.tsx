import BrandLogotype from "@ui/BrandLogotype";
import Wrapper from "@ui/Wrapper";
import { useScrollPosition } from "@hooks/useScrollPosition";
import AppLink from "@ui/AppLink";
import { useState } from "react";
import Menu from "./Menu";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const navScrolled = currPos.y < -48;
      const navScrolledFurther = currPos.y > -640;
      const navScrolledDown = currPos.y > prevPos.y;
      const navIsHidden = navScrolledFurther || navScrolledDown;

      // Scrolled state of navbar
      if (navScrolled !== isScrolled) setIsScrolled(navScrolled);

      // Hide / Show navbar
      if (navIsHidden !== isVisible) setIsVisible(navIsHidden);
    },
    [isVisible, isScrolled]
  );

  return (
    <nav
      className={`fixed isolate z-40 h-16 w-screen bg-gradient-to-b from-zinc-900/60 transition duration-500 sm:h-20 2xl:h-24 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "backdrop-blur-md" : ""} 
      `}
    >
      <Wrapper
        size="lg"
        className="flex h-full items-center justify-end gap-5 sm:gap-8 md:gap-10"
      >
        {/* Logo */}
        <AppLink href="/" passHref>
          <a className="absolute top-1/2 left-1/2 z-10 origin-center -translate-x-1/2 -translate-y-1/2 scale-75 outline-none focus-visible:ring-4 focus-visible:ring-copy-rich/70 sm:scale-100">
            <BrandLogotype variant="dark-background" />
          </a>
        </AppLink>

        {/* Links */}
        <NavbarLinks className="ml-auto hidden xl:block" />

        <Menu className="block xl:hidden" />
      </Wrapper>
    </nav>
  );
}
