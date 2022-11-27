import { useEffect, useState } from "react";
import { MenuIcon } from "./menu-icon";
import { NavigationLink } from "./navigation-link";

export function Navigation() {
  const [open, setOpen] = useState(false);

  // Close the menu when clicking on a link.
  useEffect(() => {
    const onHashChange = () => {
      setOpen(false);
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <>
      <button className="cursor-pointer" onClick={() => setOpen(true)}>
        <MenuIcon size={24} className="cursor-pointer" />
      </button>

      {open && (
        <nav className="absolute left-5 top-5 mr-5 h-auto overflow-auto rounded-xl bg-white text-menu-front-dark">
          <div className="mp-8 flex justify-between p-8">
            <div className="font-brand text-2xl uppercase text-menu-front-dark">
              Wild Animal
              <br />
              Suffering
            </div>
            <button
              className="relative h-20 h-10 w-10 w-10 shrink-0 rounded-full border-2 border-menu-back-dark p-2 p-1"
              onClick={() => setOpen(false)}
            >
              <div className="relative h-full w-[90%]">
                <div className="absolute left-1/2 h-full w-[10%] rotate-45 bg-menu-back-dark"></div>
                <div className="absolute left-1/2 h-full w-[10%] -rotate-45 bg-menu-back-dark"></div>
              </div>
            </button>
          </div>
          <div className="flex flex-col justify-start px-8">
            <NavigationLink name="Introduction" id="introduction" />
            <NavigationLink name="Scale of Suffering" id="scale-of-suffering" />
            <NavigationLink name="Types of Suffering" id="types-of-suffering" />
            <NavigationLink
              name="Population Dynamics"
              id="population-dynamics"
            />
            <NavigationLink name="Videos" id="videos" />
            <NavigationLink name="Common Objections" id="common-objections" />
            <NavigationLink name="How to Help" id="how-to-help" />
            <NavigationLink name="Organizations" id="organizations" />
            <NavigationLink name="Resources" id="resources" />
            <NavigationLink name="Conclusion" id="conclusion" />

            <div className="border-bg-menu-back-light mt-8 mt-8 flex flex-col border-t pt-8 pb-8">
              Made with love by{" "}
              <a
                href="https://www.instagram.com/veganhacktivists"
                target="_blank"
                class="underline"
                rel="noreferrer"
              >
                Vegan Hacktivists.
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
