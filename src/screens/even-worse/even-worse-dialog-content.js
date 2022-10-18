import { translations } from "../../utils/translations";

import "./even-worse-dialog-content.css";

// FIXME
const lang = translations.en;

export function EvenWorseDialogContent({ selectedDialog, onNavigationClick }) {
  const handleNavigationClick = ({ direction }) => {
    onNavigationClick({ direction });
  };

  return (
    <>
      <div className="even-worse-dialog-content flex flex-grow flex-row">
        <div className={`w-1/2 suffer-image-${selectedDialog}`}></div>
        <div className="dark-gray flex w-1/2 flex-col self-center">
          <h2>{lang[selectedDialog]}</h2>
          <p
            className="py-8"
            dangerouslySetInnerHTML={{
              __html: lang[`${selectedDialog}-description`],
            }}
          ></p>
          <div className="dialog-navigator flex w-full flex-row justify-between">
            <div
              id="next-dialog-left"
              className="w-screen-5vw"
              onClick={() => {
                handleNavigationClick({ direction: "LEFT" });
              }}
            >
              <div className="arrow"></div>
            </div>
            <div
              id="next-dialog-right"
              className="w-screen-5vw"
              onClick={() => {
                handleNavigationClick({ direction: "RIGHT" });
              }}
            >
              <div className="arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
