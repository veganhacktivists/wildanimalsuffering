import { NavigationMenu } from "../navigation-menu";

const Header = () => (
  <div className="fixed top-0 left-0 z-40 p-10 md:p-20 shrink-0 flex items-center">
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

export { Header };
