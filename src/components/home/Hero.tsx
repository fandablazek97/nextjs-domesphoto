import SocialLinks from "@ui/SocialLinks";
import Wrapper from "@ui/Wrapper";
import { HiArrowDown } from "react-icons/hi2";

export default function Hero() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 -z-10 h-2/3 w-screen bg-gradient-to-t from-zinc-900/80 via-zinc-900/50"></div>
      <Wrapper className="space-y-12">
        <div className="mb-10 h-auto max-h-[130px] w-full max-w-[480px]">
          <img
            src="/svg/logo.svg"
            alt="Domes Photo logo"
            width={480}
            height={130}
            className="w-full object-contain"
          />
        </div>
        <p className="max-w-prose text-lg font-medium text-white sm:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
          corrupti ipsam suscipit adipisci soluta dolorem quo quasi? Optio, at
          dolorem.
        </p>
        <SocialLinks />
      </Wrapper>
      <a
        href="#o-mne"
        className="absolute left-1/2 bottom-8 -translate-x-1/2 animate-bounce sm:bottom-16"
      >
        <HiArrowDown className="text-2xl text-white sm:text-3xl" />
      </a>
    </div>
  );
}
