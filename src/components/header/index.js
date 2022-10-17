import { NavigationMenu } from "../navigation-menu";
import ICONS from "../../utils/icons";

const Header = () => (
  <>
    {/* Mobile */}
    <div className="md:hidden fixed top-0 left-0 p-10 shrink-0 flex items-center justify-between w-full">
      <NavigationMenu />
      <img alt="search" src={ICONS.SEARCH} />
    </div>
    {/* Desktop */}
    <div className="hidden md:flex fixed top-0 left-0 p-20 shrink-0 items-center">
      <NavigationMenu />
      <a
        className="underline ml-16 text-2xl text-gray-700"
        href="https://katerodman.com/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="font-light">Illustrations by </span>Kate Rodman
      </a>
    </div>
  </>
);

export { Header };
