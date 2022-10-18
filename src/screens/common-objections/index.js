import { useState } from "react";
import { translations } from "../../utils/translations";

import "./common-objections.css";

// FIXME Remove translations for now
const lang = translations.en;
const panels = [
  "its-not-ours",
  "we-will-make-it-worse",
  "nothing-we-can-do",
  "cannot-consent",
  "too-big-of-a-problem",
  "factory-farming-first",
];

export function CommonObjections() {
  const [panelIdOpen, setPanelIdOpen] = useState(0);

  const handlePanelClick = (index) => {
    if (panelIdOpen === index) {
      // they clicked on the panel that was already open
      setPanelIdOpen(null);
      return;
    }
    setPanelIdOpen(index);
  };

  return (
    <>
      <section
        id="common-objections-screen"
        data-name="FAQs"
        className="common-objections screen-content"
      >
        <div className="full-screen h-full flex-col md:w-9/12">
          <div className="h-full w-9/12 self-center">
            <div className="flex flex-col items-center py-16 text-center">
              <h2>{lang["common-objections"]}</h2>
            </div>

            <div className="split-screen-padding space-between h-screen-60vh inline-scroll flex flex-col items-center overflow-y-auto pr-8">
              {panels.map((panel, index) => {
                const isPanelOpen = panelIdOpen === index;
                const numeric = String(index + 1).padStart(0, "2");

                return (
                  <div key={`${panel}-${index}`} className="panel-container">
                    <div
                      className={`common-objection panel ${
                        isPanelOpen ? "panel-open" : ""
                      }`}
                    >
                      <div
                        className="heading flex items-center justify-between"
                        onClick={() => handlePanelClick(index)}
                      >
                        <h4>
                          <span className="brown the-bold-font pr-4">
                            {numeric}
                          </span>
                          <span className="brown poppins-font">
                            {" "}
                            {lang[panel]}
                          </span>
                        </h4>
                        <span
                          className={`aspect-2 h-3 ${
                            isPanelOpen ? "arrow-up" : "arrow-down"
                          }`}
                        ></span>
                      </div>
                      <div
                        className={`panel-description ${
                          isPanelOpen ? "flex" : "hidden"
                        }`}
                      >
                        {lang[`${panel}-description`]}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
