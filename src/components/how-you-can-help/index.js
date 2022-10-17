import { useContext } from "react";
import { Context } from "../../state";

import "./how-you-can-help.css";

const HowYouCanHelp = () => {
  const [state, dispatch] = useContext(Context);
  const { translations, locale } = state;
  const lang = translations[locale];

  return (
    <>
      <section
        id="how-you-can-help-screen"
        data-name="How You Can Help"
        className="how-you-can-help screen-content"
      >
        <div className="full-screen flex-col md:w-2/3 h-full">
          <div className="w-2/3 h-full self-center">
            <div className="py-16 flex flex-col text-center items-center">
              <h2>how can you help?</h2>
            </div>
            <div className="split-screen-padding flex flex-col space-between items-center text-center">
              <div className="flex flex-row space-around flex-grow">
                <div className="help-box-container">
                  <div className="help-box">
                    <h1>1</h1>
                    <h4>RAISE AWARENESS</h4>
                  </div>
                </div>
                <div className="help-box-container">
                  <div className="help-box">
                    <h1>2</h1>
                    <h4>DONATE TO CHARITIES</h4>
                  </div>
                </div>
                <div className="help-box-container">
                  <div className="help-box">
                    <h1>3</h1>
                    <h4>STARTER KIT SIGNUP</h4>
                  </div>
                </div>
              </div>
              <p className="p-10">
                In addition to the three items above, you can find potential
                career opportunies here. Are you a researcher? Apply for a
                grant!
              </p>
              <span className="badge capitalize">
                view volunteer opportunities
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { HowYouCanHelp };
