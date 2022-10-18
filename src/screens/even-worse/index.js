import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../../components/dialog";
import { translations } from "../../utils/translations";
import { EvenWorseDialogContent } from "./even-worse-dialog-content";

import "./even-worse.css";

// FIXME
const lang = translations.en;
const dialogBoxKeys = [
  "thirst-and-starvation",
  "predation",
  "disease-and-parasitism",
  "harmful-weather",
  "natural-disasters",
  "accidents",
  "anthropogenic-harms",
];

export function EvenWorse() {
  const [selectedDialogIndex, setSelectedDialogIndex] = useState(null);
  const selectedDialog = dialogBoxKeys[selectedDialogIndex];

  const onDialogTriggerClick = ({ selectedIndex }) => {
    setSelectedDialogIndex(selectedIndex);
  };

  const onNavigationClick = ({ direction }) => {
    const increment = direction === "LEFT" ? -1 : 1;
    const n = dialogBoxKeys.length;
    const newIndex = (((selectedDialogIndex + increment) % n) + n) % n;
    setSelectedDialogIndex(newIndex);
  };

  return (
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
        <Dialog dialogId="even-worse">
          {/* FIXME */}
          {/* @ts-ignore */}
          <DialogContent>
            <EvenWorseDialogContent
              onNavigationClick={onNavigationClick}
              selectedDialog={selectedDialog}
            />
          </DialogContent>
          <div className="split-screen w-full flex-col">
            <div className="flex flex-row flex-wrap justify-center text-center">
              {dialogBoxKeys.map((dialogKey, index) => (
                <DialogTrigger
                  key={dialogKey}
                  onClick={() => onDialogTriggerClick({ selectedIndex: index })}
                  asChild
                >
                  <div className="suffer-image-container flex w-full flex-col pt-4">
                    <div
                      className={`suffer-image suffer-image-${dialogKey}`}
                    ></div>
                    <div className="suffer-text flex-grow p-2">
                      {lang[dialogKey]}
                    </div>
                  </div>
                </DialogTrigger>
              ))}
            </div>
          </div>
        </Dialog>
      </div>
    </section>
  );
}
