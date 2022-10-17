import { NavigationMenu } from "../navigation-menu";
import { isMobile } from "../../utils";

const Header = () => {
  return isMobile() ? (
    <div className="fixed top-0 left-0 z-40 p-10 shrink-0 flex items-center justify-between w-full">
      <NavigationMenu />
      <div className="flex">
        {/* Placeholder for Language Picker */}
        <div className="text-4xl">En</div>
        <div className="bg-search bg-contain bg-no-repeat bg-center h-[26px] aspect-square color-[#fff] ml-12" />
      </div>
    </div>
  ) : (
    <div className="fixed top-0 left-0 z-40 p-20 shrink-0 flex items-center">
      <NavigationMenu />
      {/* Placeholder for Language Picker */}
      <div className="ml-16 text-2xl text-darkGray font-bold">En</div>
      <a
        className="underline ml-16 text-2xl text-darkGray"
        href="https://katerodman.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="font-light">Illustrations by </span>Kate Rodman
      </a>
    </div>
  );
};

export { Header };
