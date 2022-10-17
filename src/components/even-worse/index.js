import { useContext, useState } from "react";
import { Context } from "../../state";
import { WasDialog, WasDialogContent, WasDialogTrigger } from "../was-dialog";
import { EvenWorseDialogContent } from "./even-worse-dialog-content";

import "./even-worse.css";

const DialogTrigger = ({ dialogKey, onClick }) => {
  const [state] = useContext(Context);
  const { translations, locale } = state;
  const lang = translations[locale];

  return (
    <WasDialogTrigger
      onClick={onClick}
      key={`dialog-trigger-${dialogKey}`}
      asChild
    >
      <div className="suffer-image-container flex w-full flex-col pt-4">
        <div className={`suffer-image suffer-image-${dialogKey}`}></div>
        <div className="suffer-text flex-grow p-2">{lang[dialogKey]}</div>
      </div>
    </WasDialogTrigger>
  );
};

const EvenWorse = () => {
  const [selectedDialogIndex, setSelectedDialogIndex] = useState(null);

  const onDialogTriggerClick = ({ selectedIndex }) => {
    setSelectedDialogIndex(selectedIndex);
  };

  const dialogBoxKeys = [
    "thirst-and-starvation",
    "predation",
    "disease-and-parasitism",
    "harmful-weather",
    "natural-disasters",
    "accidents",
    "anthropogenic-harms",
  ];
  const selectedDialog = dialogBoxKeys[selectedDialogIndex];

  const onNavigationClick = ({ direction }) => {
    const increment = direction === "LEFT" ? -1 : 1;
    const n = dialogBoxKeys.length;
    const newIndex = (((selectedDialogIndex + increment) % n) + n) % n;
    setSelectedDialogIndex(newIndex);
  };

  return (
    <>
      <section
        data-name="Types of Suffering"
        className="screen-content even-worse white"
      >
        <h2 id="even-worse-screen"></h2>
        <div className="full-screen flex h-full w-full flex-col">
          <div className="split-screen w-full flex-col p-16 text-center">
            <h1>
              <span>Even worse, wild animals suffer in terrible ways</span>:
            </h1>
          </div>
          <WasDialog dialogId="even-worse">
            <WasDialogContent>
              <EvenWorseDialogContent
                onNavigationClick={onNavigationClick}
                selectedDialog={selectedDialog}
              />
            </WasDialogContent>
            <div className="split-screen w-full flex-col">
              <div className="flex flex-row flex-wrap justify-center text-center">
                {dialogBoxKeys.map((dialogKey, index) => {
                  return (
                    <DialogTrigger
                      key={dialogKey}
                      dialogKey={dialogKey}
                      onClick={() =>
                        onDialogTriggerClick({ selectedIndex: index })
                      }
                    />
                  );
                })}
              </div>
            </div>
          </WasDialog>
        </div>
      </section>
    </>
  );
};

export { EvenWorse };
