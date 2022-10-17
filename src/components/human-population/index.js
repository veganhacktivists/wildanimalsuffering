import { useContext } from "react";
import { Context } from "../../state";

const HumanPopulation = () => {
  const [state] = useContext(Context);

  const { abyssOverlay } = state;

  return (
    <>
      <section
        id="abyss-container"
        className={`${
          abyssOverlay ? "abyss-darkened" : "abyss"
        } scrollsnap-y hw-screen flex-col`}
      >
        <div
          id="human-population-screen"
          data-name="Scale of Suffering"
          className="screen-content scrollable flex"
        >
          <div className="h-screen-50vh md:w-screen-50vw split-screen-padding flex-center md:h-screen">
            <h1>
              There are roughly <span className="blue">8 billion humans</span>{" "}
              on planet Earth.
            </h1>
          </div>
          <div className="h-screen-50vh md:w-screen-50vw split-screen-padding flex-center md:h-screen">
            <div className="human-icon h-1/4 w-1/4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export { HumanPopulation };
