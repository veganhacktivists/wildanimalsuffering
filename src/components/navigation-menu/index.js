import { useContext, useState } from "react";
import { Context } from "../../state";
import ICONS from "../../utils/icons";

import "./navigation-menu.css";

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useContext(Context);

  function navigate(screenId) {
    setOpen(false);
    dispatch({ type: "GO_TO_SCREEN_BY_ID", payload: { screenId } });
  }

  if (open) {
    return (
      <div
        className="fixed z-40 h-screen w-screen overflow-auto bg-white text-menu-front-dark md:left-5 md:top-5 md:h-auto md:w-96 md:rounded-xl"
        onWheel={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
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
          {state.screenContentElements?.map(
            (element, index) =>
              element.dataset.name && (
                <button
                  className={`relative p-16 text-left text-7xl text-menu-front-light hover:bg-menu-back-light md:rounded-xl md:p-0 md:py-4 md:px-8 md:text-xl ${
                    element.id == state.screenId && "bg-menu-back-light"
                  }`}
                  key={index}
                  onClick={() => navigate(element.id)}
                >
                  {element.id == state.screenId && (
                    <div className="absolute top-10 right-10 h-10 w-10 rounded-full bg-menu-front-dark md:top-3 md:right-3 md:h-3 md:w-3"></div>
                  )}
                  {element.dataset.name}
                </button>
              )
          )}
        </div>
        <div className="border-bg-menu-back-light mt-16 flex flex-col border-t py-16 md:mt-4 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="mb-16 aspect-square h-48 bg-logo bg-contain bg-center bg-no-repeat invert md:mb-0 md:h-16"></div>
          <div className="flex justify-evenly gap-4 text-center text-5xl text-menu-back-dark md:text-3xl">
            <a
              href="https://www.instagram.com/veganhacktivists"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ICONS.INSTAGRAM}
                alt="Instagram"
                className="h-28 w-28 md:h-10 md:w-10"
              />
            </a>
            <a
              href="https://www.youtube.com/c/VeganHacktivists"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ICONS.YOUTUBE}
                alt="YouTube"
                className="h-28 w-28 md:h-10 md:w-10"
              />
            </a>
            <a
              href="https://www.patreon.com/veganhacktivists"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ICONS.PATREON}
                alt="Patreon"
                className="h-28 w-28 md:h-10 md:w-10"
              />
            </a>
            <a
              href="https://github.com/veganhacktivists"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ICONS.GITHUB}
                alt="GitHub"
                className="h-28 w-28 md:h-10 md:w-10"
              />
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <button onClick={() => setOpen(true)}>
        <div className="h-[2.5px] w-[30px] bg-white md:bg-black rounded-full"></div>
        <div className="h-[2.5px] w-[30px] bg-white md:bg-black rounded-full my-[7px]"></div>
        <div className="h-[2.5px] w-[30px] bg-white md:bg-black rounded-full"></div>
      </button>
    );
  }
};

export { NavigationMenu };
