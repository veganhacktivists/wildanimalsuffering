import { useContext } from "react";
import { Context } from "../../state";

import "./why-it-matters.css";

const WhyItMatters = () => {
  const [state, dispatch] = useContext(Context);
  const { translations, locale } = state;
  const lang = translations[locale];

  return (
    <section
      id="wild-animal-suffering-screen"
      data-name="Introduction"
      className="screen-content wild-animal-suffering"
    >
      <div className="h-screen flex flex-col justify-start">
        <div className="birds-01 absolute"></div>
        <div className="birds-02 absolute"></div>
        <div className="h-56 w-56 mb-28 bg-logo bg-contain bg-no-repeat bg-center self-center md:hidden"></div>
        <div className="h-screen-70vh flex flex-col-reverse md:flex-row md:pt-16">
          <div
            id="elephant-image-container"
            className="split-screen flex-col h-36 md:h-screen-50vh w-full md:w-auto"
          >
            <div className="h-full elephants"></div>
          </div>
          <div className="split-screen flex-col h-screen-30vh justify-center">
            <div className="font-bold font-brand uppercase">
              <div className="text-9xl md:text-7xl">
                {lang["wild-animal-suffering-header"]}
              </div>
              <div className="text-7xl md:text-3xl orange my-20 md:my-0">
                {lang["why-it-matters"]}
              </div>
            </div>
            <div className="subheading flex flex-col md:flex-row md:pt-4 bg-black/50 md:bg-transparent p-10 md:p-0 rounded-xl text-4xl md:text-base font-light">
              <div className="md:pr-4 mb-20 md:mb-0">
                <div className="bg-orange rounded-full w-8 h-8 md:w-3 md:h-3 mb-5 md:mb-2"></div>
                <div>{lang["idealize"]}</div>
              </div>
              <div className="md:pl-4">
                <div className="border border-orange rounded-full w-8 h-8 md:w-3 md:h-3 mb-5 md:mb-2"></div>
                <div>{lang["relief"]}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen-10vh p-4 md:p-10 -mt-48 md:mt-0">
          <div className="text-center">
            <h5 className="pb-8 px-20 text-5xl md:text-base">
              {lang["it-matters"]}
            </h5>
            <span className="badge uppercase">{lang["begin-learning"]}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhyItMatters };
