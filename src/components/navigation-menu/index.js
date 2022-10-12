import { useContext, useState } from "react";
import { Context } from "../../state";

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
        className="fixed h-screen md:h-auto w-screen md:w-96 md:left-5 md:top-5 md:rounded-xl bg-white z-40 text-menu-front-dark overflow-auto"
        onWheel={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between p-16 md:p-8">
          <div className="text-menu-front-dark uppercase text-8xl md:text-2xl font-brand">
            Wild Animal
            <br />
            Suffering
          </div>
          <button
            className="rounded-full border-2 border-menu-back-dark p-2 md:p-1 w-20 h-20 md:w-10 md:h-10 relative shrink-0"
            onClick={() => setOpen(false)}
          >
            <div className="w-[90%] h-full relative">
              <div className="bg-menu-back-dark absolute left-1/2 h-full w-[10%] rotate-45"></div>
              <div className="bg-menu-back-dark absolute left-1/2 h-full w-[10%] -rotate-45"></div>
            </div>
          </button>
        </div>
        <div className="flex flex-col justify-start px-16 md:px-8">
          {state.screenContentElements?.map(
            (element, index) =>
              element.dataset.name && (
                <button
                  className={`relative text-left text-menu-front-light text-7xl md:text-xl p-16 md:p-0 md:py-4 md:px-8 md:rounded-xl hover:bg-menu-back-light ${
                    element.id == state.screenId && "bg-menu-back-light"
                  }`}
                  key={index}
                  onClick={() => navigate(element.id)}
                >
                  {element.id == state.screenId && (
                    <div className="absolute bg-menu-front-dark top-10 md:top-3 right-10 md:right-3 w-10 h-10 md:w-3 md:h-3 rounded-full"></div>
                  )}
                  {element.dataset.name}
                </button>
              )
          )}
        </div>
        <div className="border-t border-bg-menu-back-light mt-16 md:mt-4 flex flex-col md:flex-row py-16 md:p-8 md:justify-between md:items-center">
          <div className="bg-logo invert bg-contain bg-no-repeat bg-center h-48 md:h-16 mb-16 md:mb-0 aspect-square"></div>
          <div className="text-5xl md:text-3xl text-menu-back-dark text-center flex justify-evenly gap-4">
            <a href="https://www.instagram.com/veganhacktivists" target="_blank" rel="noreferrer"
              ><img src="images/icons/social/instagram.svg" alt="Instagram" className="w-28 h-28 md:w-10 md:h-10" /></a>
            <a href="https://www.youtube.com/c/VeganHacktivists" target="_blank" rel="noreferrer"
              ><img src="images/icons/social/youtube.svg" alt="YouTube" className="w-28 h-28 md:w-10 md:h-10" /></a>
            <a href="https://www.patreon.com/veganhacktivists" target="_blank" rel="noreferrer"
              ><img src="images/icons/social/patreon.svg" alt="Patreon" className="w-28 h-28 md:w-10 md:h-10" /></a>
            <a href="https://github.com/veganhacktivists" target="_blank" rel="noreferrer"
              ><img src="images/icons/social/github.svg" alt="GitHub" className="w-28 h-28 md:w-10 md:h-10" /></a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <button
        className="fixed top-0 left-0 z-40 p-10 md:p-20 shrink-0"
        onClick={() => setOpen(true)}
      >
        <div className="h-1.5 w-14 bg-white md:bg-black rounded-full"></div>
        <div className="h-1.5 w-14 bg-white md:bg-black rounded-full my-3"></div>
        <div className="h-1.5 w-14 bg-white md:bg-black rounded-full"></div>
      </button>
    );
  }
};

export { NavigationMenu };
