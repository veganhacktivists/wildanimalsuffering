import { HealthcareIcon } from "../../components/healthcare-icon";
import { links } from "../../utils/constants";
import { Source, sources } from "./sources";

export function Conclusion() {
  return (
    <section
      id="conclusion"
      className="relative min-h-screen bg-woods bg-cover md:bg-woods-md md:bg-center"
    >
      <img
        className="not-sr-only absolute right-32 top-52 max-w-lg lg:w-full"
        src="/images/conclusion/momma.png"
        alt="Mother bear"
      />
      <div className="py-30 relative flex max-w-3xl flex-col pt-36 pl-28 text-white">
        <h2 className="mb-4 font-brand text-5xl leading-relaxed">
          Together, we can make life better for wild animals.
        </h2>
        <p className="font-lg">
          In recent years, there has been growing moral concern for animals.
          Thankfully, it is now rare to find a person who feels indifferent
          towards animal suffering. We know suffering feels bad to us. But we
          also know that suffering feels bad for a dog or a cat. And we also
          know that suffering feels bad for a pig, a chicken or a fish.
          Suffering feels bad for anyone who feels it, regardless of their
          species or their location. When you put yourselves into the
          perspective of the one who suffers, it doesn&apos;t matter whether
          they are in a house, a farm, or a forest. Their suffering matters. It
          matters to them. And it should matter to us.
        </p>
        <br />
        <p className="font-lg z-10">
          If it matters to you, then we encourage you to join us in our mission
          to make life better for wild animals. There is much to learn about the
          situation of wild animals. This page is just an introduction to the
          issue. In truth, it is very sad that so many animals are desperately
          in need of help right now. But luckily, humans like you have the
          opportunity to make a difference. We hope you choose to take it.
        </p>
        <br />
        <h3 className="z-10 mt-10 font-brand text-4xl text-primary">
          Thank you.
        </h3>
      </div>

      <div className="relative mt-24 flex flex-row justify-evenly bg-white bg-opacity-10 py-10 px-10">
        <img
          className="not-sr-only absolute right-1/4 top-[-230px] max-w-lg lg:w-full"
          src="/images/conclusion/pups.png"
          alt="Bear pups"
        />
        <div className="flex">
          <HealthcareIcon className="my-auto" />
          <div className="ml-8 flex-col">
            <h5 className="mb-2 text-xl font-bold text-white">
              Please consider supporting our work!
            </h5>
            <span className="text-md font-light text-white">
              This website would not be possible without your support. Thank
              you!
            </span>
          </div>
        </div>
        <a
          href={links.veganHacktivistsSupport}
          target="_blank"
          rel="noreferrer"
          className="ml-10 self-center whitespace-nowrap rounded-xl bg-primary px-5 py-1 text-xl font-medium uppercase"
        >
          Support Us
        </a>
      </div>

      <div className="mx-auto flex max-w-screen-2xl justify-evenly p-14">
        <div className="mr-20 flex flex-col">
          <div className="flex flex-row text-white">
            <h5 className="mr-16 w-[170px] min-w-[170px] font-bold">
              Special thanks
            </h5>
            <div className="max-w-3xl leading-relaxed">
              To our partners and advisors from Wild Animal Initiative, Animal
              Ethics, Rethinking Priorities, and Jack Hancock for his
              collaborative role. Kate Rodman for the wonderful illustrations.
              This website would not have been possible without everyone’s
              dedication and support!
            </div>
          </div>
          <div className="mt-10 flex flex-row text-white">
            <h5 className="mr-16 w-[170px] min-w-[170px] font-bold">
              Credits and sources
            </h5>
            <div className="flex flex-col leading-relaxed">
              {sources.map((source, i) => (
                <Source
                  // @ts-ignore
                  key={source.text}
                  number={i + 1}
                  href={source.href}
                  text={source.text}
                />
              ))}
            </div>
          </div>
        </div>
        <img
          className="my-auto max-h-40"
          src="/images/conclusion/vh-logo.png"
          alt="vegan hacktivists logo"
        />
      </div>
    </section>
  );
}
