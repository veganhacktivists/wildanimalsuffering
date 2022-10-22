import { useState } from "react";
import { cx } from "../../utils/cx";
import "./common-objections.css";
import { objections } from "./objections";

// FIXME Replace with Radix UI Accordion
// https://www.radix-ui.com/docs/primitives/components/accordion
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
    <section
      id="common-objections"
      className="common-objections screen-content"
    >
      <div className="full-screen h-full flex-col md:w-9/12">
        <div className="h-full w-9/12 self-center">
          <div className="flex flex-col items-center py-16 text-center">
            <h2>common objections to helping wild animals</h2>
          </div>

          <div className="split-screen-padding space-between h-screen-60vh inline-scroll flex flex-col items-center overflow-y-auto pr-8">
            {objections.map((panel, index) => {
              const numeric = String(index + 1).padStart(2, "0");
              const isPanelOpen = panelIdOpen === index;

              return (
                <div key={`${panel}-${index}`} className="panel-container">
                  <div
                    className={cx(
                      "common-objection panel",
                      isPanelOpen && "panel-open"
                    )}
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
                          {panel.objection}
                        </span>
                      </h4>
                      <span
                        className={cx(
                          "aspect-2 h-3",
                          isPanelOpen ? "arrow-up" : "arrow-down"
                        )}
                      ></span>
                    </div>
                    <div
                      className={cx(
                        "panel-description",
                        isPanelOpen ? "flex" : "hidden"
                      )}
                    >
                      {panel.response}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
