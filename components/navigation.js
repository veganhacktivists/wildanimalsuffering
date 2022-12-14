import { useEffect, useState } from "react";
import { MenuIcon } from "./menu-icon";
import { NavigationLink } from "./navigation-link";

// TODO Replace with something more accessible.
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
        <span className="sr-only">Menu</span>
        <MenuIcon size={35} className="cursor-pointer" />
      </button>

      {open && (
        <nav className="absolute top-0 left-0 h-auto w-full overflow-auto p-5 sm:max-w-sm">
          <div className="flex flex-col overflow-auto rounded-xl bg-white text-menu-front-dark">
            <div className="flex justify-between p-8">
              <div className="font-brand text-2xl uppercase text-menu-front-dark">
                Wild Animal Suffering
              </div>
              <button
                className="relative h-8 w-8 shrink-0 rounded-full border-2 border-menu-back-dark p-1"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <div className="relative h-full w-9/10">
                  <div className="absolute left-1/2 h-full w-1/10 rotate-45 bg-menu-back-dark"></div>
                  <div className="absolute left-1/2 h-full w-1/10 -rotate-45 bg-menu-back-dark"></div>
                </div>
              </button>
            </div>
            <div className="flex flex-col px-8">
              <ul className="flex flex-col space-y-2 ">
                <NavigationLink name="Introduction" id="introduction" />
                <NavigationLink
                  name="Scale of Suffering"
                  id="scale-of-suffering"
                />
                <NavigationLink
                  name="Types of Suffering"
                  id="types-of-suffering"
                />
                <NavigationLink
                  name="Population Dynamics"
                  id="population-dynamics"
                />
                <NavigationLink name="Videos" id="videos" />
                <NavigationLink
                  name="Common Objections"
                  id="common-objections"
                />
                <NavigationLink name="How to Help" id="how-to-help" />
                <NavigationLink name="Organizations" id="organizations" />
                <NavigationLink name="Resources" id="resources" />
                <NavigationLink name="Conclusion" id="conclusion" />
              </ul>
              <div className="mt-8 border-t py-8">
                Made with love by the{" "}
                <a
                  className="whitespace-nowrap underline"
                  href="https://veganhacktivists.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vegan Hacktivists
                </a>
                .
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
