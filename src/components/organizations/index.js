import { useContext } from "react";
import { Context } from "../../state";
import "./organizations.css";

const Organizations = () => {
  const [state, dispatch] = useContext(Context);
  const { translations, locale } = state;
  const lang = translations[locale];

  const imageBasePath = "images/organizations";

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
        <div className="full-screen flex-col w-full h-full">
          <div className="py-16 flex justify-center split-screen flex-col h-screen-50vh w-[35%] text-center items-center">
            <h2>organizations working on wild animal suffering</h2>
          </div>
          <div className="split-screen h-screen-50vh w-full flex-row relative justify-around flex-wrap">
            {organizations.map((organization) => {
              return (
                <div
                  className="w-1/2 flex justify-center"
                  key={organization.name}
                >
                  <div className="w-1/2 flex flex-row h-full">
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
                        <span className="badge capitalize brown m-1">
                          visit site
                        </span>
                        <span className="badge capitalize sand m-1">
                          donate
                        </span>
                        <span className="badge capitalize oat m-1">
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
