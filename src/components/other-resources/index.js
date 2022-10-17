import "./other-resources.css";

const OtherResources = () => {
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
        <div className="full-screen h-full w-full flex-col">
          <div className="split-screen h-screen-50vh flex w-[35%] flex-col items-center justify-center py-16 text-center">
            <h2>other resources you might like</h2>
          </div>
          <div className="split-screen h-screen-50vh relative w-full flex-row flex-wrap justify-around">
            {resources.map((resource, index) => {
              return (
                <div
                  className="flex w-1/2 justify-center"
                  key={`${resource.languageKey}-${index}`}
                >
                  <div className="flex h-full w-[75%] flex-col">
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
