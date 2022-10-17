import { useContext } from "react";
import { Context } from "../../state";

import "./other-resources.css";

const OtherResources = () => {
  const [state, dispatch] = useContext(Context);
  const { translations, locale } = state;
  const lang = translations[locale];

  const resources = [
    {
      languageKey: "books",
    },
    {
      languageKey: "websites",
    },
    {
      languageKey: "blogs",
    },
    {
      languageKey: "podcasts",
    },
  ];

  return (
    <>
      <section
        id="other-resources-screen"
        data-name="Resources"
        className="other-resources screen-content"
      >
        <div className="full-screen flex-col w-full h-full">
          <div className="py-16 flex justify-center split-screen flex-col h-screen-50vh w-[35%] text-center items-center">
            <h2>other resources you might like</h2>
          </div>
          <div className="split-screen h-screen-50vh w-full flex-row relative justify-around flex-wrap">
            {resources.map((resource, index) => {
              return (
                <div
                  className="w-1/2 flex justify-center"
                  key={`${resource.languageKey}-${index}`}
                >
                  <div className="w-[75%] flex flex-col h-full">
                    {/* <div className="resource-type-heading aspect-square flex justify-center items-center">
											{lang[resource.languageKey]}
										</div>
										<div className="resource-type-content">

										</div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export { OtherResources };
