import { NavigationMenu } from "../navigation-menu";

const Header = () => (
  <div className="fixed top-0 left-0 z-40 p-10 md:p-20 shrink-0 flex items-center">
    <NavigationMenu />
    {/* Placeholder for Language Picker */}
    <div className="ml-16 text-2xl text-black">En</div>
    <div className="ml-16 text-2xl text-black">
      Illustrations by Kate Rodman
    </div>
  </div>
);

export { Header };
