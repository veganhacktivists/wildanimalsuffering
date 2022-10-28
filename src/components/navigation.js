import { useEffect, useState } from "react";
import { GithubIcon } from "./github-icon";
import { InstagramIcon } from "./instagram-icon";
import { MenuIcon } from "./menu-icon";
import { NavigationLink } from "./navigation-link";
import { PatreonIcon } from "./patreon-icon";
import { YoutubeIcon } from "./youtube-icon";

// FIXME Make sure styling is conform design.
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
        <nav className="absolute overflow-auto bg-white text-menu-front-dark md:left-5 md:top-5 md:h-auto md:w-96 md:rounded-xl">
          <div className="flex justify-between p-16 md:p-8">
            <div className="font-brand text-8xl uppercase text-menu-front-dark md:text-2xl">
              Wild Animal
              <br />
              Suffering
            </div>
            <button
              className="relative h-20 w-20 shrink-0 rounded-full border-2 border-menu-back-dark p-2 md:h-10 md:w-10 md:p-1"
              onClick={() => setOpen(false)}
            >
              <div className="relative h-full w-[90%]">
                <div className="absolute left-1/2 h-full w-[10%] rotate-45 bg-menu-back-dark"></div>
                <div className="absolute left-1/2 h-full w-[10%] -rotate-45 bg-menu-back-dark"></div>
              </div>
            </button>
          </div>
          <div className="flex flex-col justify-start px-16 md:px-8">
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

            <div className="border-bg-menu-back-light mt-16 flex flex-col border-t py-16 md:mt-4 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="bg-logo mb-16 aspect-square h-48 bg-contain bg-center bg-no-repeat invert md:mb-0 md:h-16"></div>
              <div className="flex justify-evenly gap-4 text-center text-5xl text-menu-back-dark md:text-3xl">
                <a
                  href="https://www.instagram.com/veganhacktivists"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.youtube.com/c/VeganHacktivists"
                  target="_blank"
                  rel="noreferrer"
                >
                  <YoutubeIcon className="h-28 w-28" />
                </a>
                <a
                  href="https://www.patreon.com/veganhacktivists"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PatreonIcon className="h-28 w-28" />
                </a>
                <a
                  href="https://github.com/veganhacktivists"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon className="h-28 w-28" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
