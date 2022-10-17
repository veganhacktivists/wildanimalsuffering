import "./organizations.css";

const Organizations = () => {
  const organizations = [
    {
      name: "Wild Animal Initiative",
      description:
        "Wild Animal Initiative (WAI) currently operates in the U.S., where they work to strengthen the animal advocacy movement through creating an academic field dedicated to wild animal welfare.",
      iconKey: "wild-animal-initiative",
      links: {
        visit: "https://www.wildanimalinitiative.org/",
        donate: "https://www.wildanimalinitiative.org/donate/",
        volunteer: "https://www.wildanimalinitiative.org/join/",
      },
    },
    {
      name: "animal ethics",
      description:
        "Animal Ethics aims to achieve a shift in attitudes towards nonhuman animals. Their vision is a world where sentient beings are given full moral consideration.",
      iconKey: "animal-ethics",
      links: {
        visit: "https://www.animal-ethics.org/",
        donate: "https://www.animal-ethics.org/support-us/",
        volunteer: "https://www.animal-ethics.org/what-you-can-do/",
      },
    },
    {
      name: "rethink priorities",
      description:
        "Rethink Priorities is a research organization that conducts critical research to inform policymakers and major foundations about how to best help people and nonhuman animals in both the present and the long-term future.",
      iconKey: "rethink-priorities",
      links: {
        visit: "https://rethinkpriorities.org/",
        donate: "https://rethinkpriorities.org/donate/",
        volunteer: "",
      },
    },
    {
      name: "faunalytics",
      description:
        "Faunalytics' mission is to empower animal advocates with access to research, analysis, strategies, and messages that maximize their effectiveness to reduce animal suffering.",
      iconKey: "faunalytics",
      links: {
        visit: "https://faunalytics.org/",
        donate: "https://faunalytics.org/donate/",
        volunteer: "",
      },
    },
  ];

  return (
    <>
      <section
        id="organizations-screen"
        data-name="Organizations"
        className="organizations screen-content"
      >
        <div className="full-screen h-full w-full flex-col">
          <div className="split-screen h-screen-50vh flex w-[35%] flex-col items-center justify-center py-16 text-center">
            <h2>organizations working on wild animal suffering</h2>
          </div>
          <div className="split-screen h-screen-50vh relative w-full flex-row flex-wrap justify-around">
            {organizations.map((organization) => {
              return (
                <div
                  className="flex w-1/2 justify-center"
                  key={organization.name}
                >
                  <div className="flex h-full w-1/2 flex-row">
                    <div className="flex flex-row p-2">
                      <div
                        className={`${organization.iconKey} aspect-square h-20`}
                      ></div>
                    </div>
                    <hr className="orange" />
                    <div className="flex flex-col">
                      <h4 className="p-2">{organization.name}</h4>
                      <div className="p-2">{organization.description}</div>
                      <div className="flex flex-row p-2">
                        <span className="badge brown m-1 capitalize">
                          visit site
                        </span>
                        <span className="badge sand m-1 capitalize">
                          donate
                        </span>
                        <span className="badge oat m-1 capitalize">
                          volunteer
                        </span>
                      </div>
                    </div>
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

export { Organizations };
