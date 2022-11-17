import { cx } from "../../utils/cx";

function Organization({ name, children, iconKey, links }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/20 p-6 text-white lg:flex-row lg:items-start lg:bg-transparent xl:gap-5">
      <img
        className="aspect-square lg:w-16 xl:w-24"
        src={`/images/organizations/${iconKey}.png`}
        alt=""
      />

      <div className="flex h-full flex-col items-center lg:items-start lg:border-l lg:border-solid lg:border-primary lg:pl-4 xl:pl-5">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="mt-3 flex-1 text-sm leading-relaxed">{children}</div>

        <div className="mt-5 grid w-full grid-cols-2 items-end gap-4 font-bold capitalize text-black lg:block lg:space-x-4">
          {links.map(([text, url], i) => (
            <a
              key={text}
              href={url}
              target="_blank"
              rel="noreferrer"
              className={cx(
                "rounded-xl py-1 px-5 text-center",
                i % 3 === 0 && "bg-primary",
                i % 3 === 1 && "bg-primary-light",
                i % 3 === 2 && "col-span-2 bg-primary-lighter"
              )}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Organizations() {
  return (
    <section
      id="how-to-help"
      className="relative flex min-h-screen items-center bg-mud bg-cover bg-top py-14 lg:py-24"
    >
      <div className="absolute bottom-0 h-full w-full bg-none bg-[-180px_-20px] bg-no-repeat sm:bg-tree-and-birds lg:max-h-max lg:bg-contain lg:bg-left-top" />
      <div className="relative mx-auto flex w-full flex-col space-y-14 px-10">
        <h2 className="mx-auto max-w-xl text-center font-brand text-4xl text-white">
          Organizations working on Wild Animal Suffering
        </h2>

        <div className="mx-auto grid max-w-sm gap-12 md:max-w-4xl md:grid-cols-2 xl:max-w-6xl">
          <Organization
            name="Wild Animal Initiative"
            iconKey="wild-animal-initiative"
            links={[
              ["Visit", "https://www.wildanimalinitiative.org/"],
              ["Donate", "https://www.wildanimalinitiative.org/donate"],
              ["Careers", "https://www.wildanimalinitiative.org/career"],
            ]}
          >
            Wild Animal Initiative (WAI) currently operates in the U.S., where
            they work to strengthen the animal advocacy movement through
            creating an academic field dedicated to wild animal welfare.
          </Organization>
          <Organization
            name="Animal Ethics"
            iconKey="animal-ethics"
            links={[
              ["Visit", "https://www.animal-ethics.org/"],
              ["Donate", "https://www.animal-ethics.org/support-us"],
              ["Volunteer", "https://www.animal-ethics.org/volunteers"],
            ]}
          >
            Animal Ethics aims to achieve a shift in attitudes towards nonhuman
            animals. Their vision is a world where sentient beings are given
            full moral consideration.
          </Organization>
          <Organization
            name="Rethink Priorities"
            iconKey="rethink-priorities"
            links={[
              ["Visit", "https://rethinkpriorities.org/"],
              ["Donate", "https://rethinkpriorities.org/donate"],
              ["Careers", "https://rethinkpriorities.org/career-opportunities"],
            ]}
          >
            Rethink Priorities is a research organization that conducts critical
            research to inform policymakers and major foundations about how to
            best help people and nonhuman animals in both the present and the
            long-term future.
          </Organization>
          <Organization
            name="Faunalytics"
            iconKey="faunalytics"
            links={[
              ["Visit", "https://faunalytics.org/"],
              ["Donate", "https://faunalytics.org/donate"],
              ["Volunteer", "https://faunalytics.org/volunteer"],
            ]}
          >
            Faunalytics' mission is to empower animal advocates with access to
            research, analysis, strategies, and messages that maximize their
            effectiveness to reduce animal suffering.
          </Organization>
        </div>
      </div>

      <img
        className="not-sr-only pointer-events-none absolute bottom-0 right-0 hidden max-h-96 w-[20vw] lg:block"
        src="/images/organizations/frog.png"
        alt=""
      />
    </section>
  );
}
