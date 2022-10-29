import { organizations } from "./organizations";
import "./organizations.css";

const Organizations = () => {
  return (
    <section
      id="organizations"
      className="organizations relative min-h-screen py-24"
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col space-y-16 px-10 text-white md:px-32 lg:px-10">
        <h2 className="text-center font-brand text-4xl">
          Organizations working on wild animal suffering
        </h2>

        <div className="grid gap-y-12 lg:mx-8 lg:grid-cols-2 lg:gap-x-48 lg:gap-y-16 xl:mx-24">
          {organizations.map((organization, key) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center gap-x-5 text-white lg:flex-row lg:items-start"
            >
              <img
                className="aspect-square"
                src={`/images/organizations/${organization.iconKey}.png`}
                alt=""
              />

              <div className="flex flex-col items-center lg:items-start lg:border-l lg:border-solid lg:border-primary lg:pl-3">
                <h3 className="p-2 text-xl font-bold">{organization.name}</h3>
                <div className="p-2 text-justify text-sm">
                  {organization.description}
                </div>

                <div className="mt-5 flex flex-row space-x-5 p-2 font-bold capitalize text-black">
                  <a
                    href={organization.links.visit}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-primary px-5 py-1"
                  >
                    visit
                  </a>
                  <a
                    href={organization.links.donate}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-primary-light px-5 py-1"
                  >
                    donate
                  </a>
                  <a
                    href={organization.links.volunteer}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-primary-lighter px-5 py-1"
                  >
                    volunteer
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden text-center lg:block">
          Be sure to check out Wild Animal Welfare Committee and wild animal
          organization too!
        </div>
      </div>
    </section>
  );
};

export { Organizations };
