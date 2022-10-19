import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../../components/dialog";
import { dialogs } from "./dialogs";
import { TypesOfSufferingDialogContent } from "./types-of-suffering-dialog-content";

import "./types-of-suffering.css";

export function TypesOfSuffering() {
  const [selectedDialogIndex, setSelectedDialogIndex] = useState(null);
  const selectedDialog = dialogs[selectedDialogIndex];

  const onDialogTriggerClick = ({ selectedIndex }) => {
    setSelectedDialogIndex(selectedIndex);
  };

  const onNavigationClick = ({ direction }) => {
    const increment = direction === "LEFT" ? -1 : 1;
    const n = dialogs.length;
    const newIndex = (((selectedDialogIndex + increment) % n) + n) % n;
    setSelectedDialogIndex(newIndex);
  };

  return (
    <section
      data-name="Types of Suffering"
      className="screen-content even-worse white"
    >
      <h2 id="types-of-suffering"></h2>
      <div className="full-screen flex h-full w-full flex-col">
        <div className="split-screen w-full flex-col p-16 text-center">
          <h1>
            <span>Even worse, wild animals suffer in terrible ways</span>:
          </h1>
        </div>
        <Dialog dialogId="even-worse">
          {/* FIXME TypeScript error */}
          {/* @ts-ignore */}
          <DialogContent>
            <TypesOfSufferingDialogContent
              onNavigationClick={onNavigationClick}
              selectedDialog={selectedDialog}
            />
          </DialogContent>
          <div className="split-screen w-full flex-col">
            <div className="flex flex-row flex-wrap justify-center text-center">
              {dialogs.map((dialog, index) => (
                <DialogTrigger
                  key={dialog.title}
                  onClick={() => onDialogTriggerClick({ selectedIndex: index })}
                  asChild
                >
                  <div className="suffer-image-container flex w-full flex-col pt-4">
                    <div
                      className={`suffer-image suffer-image-${dialog.id}`}
                    ></div>
                    <div className="suffer-text flex-grow p-2">
                      {dialog.title}
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
