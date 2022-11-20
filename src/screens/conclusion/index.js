import { HealthcareIcon } from "../../components/healthcare-icon";

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
            <h4 className="mb-2 text-xl font-bold text-white">
              Please consider supporting our work!
            </h4>
            <span className="text-md font-light text-white">
              This website would not be possible without your support. Thank
              you!
            </span>
          </div>
        </div>
        <a
          href="https://veganhacktivists.org/support"
          target="_blank"
          rel="noreferrer"
          className="ml-10 self-center whitespace-nowrap rounded-xl bg-primary px-5 py-1 text-lg font-medium"
        >
          Support Us
        </a>
      </div>

      <div className="mx-auto flex max-w-screen-2xl p-14">
        <div className="grid grid-cols-4 gap-10 text-white">
          <h4 className="text-lg font-bold">Special thanks</h4>
          <p className="col-span-3 leading-relaxed">
            To our friends and advisors from{" "}
            <a
                className="underline"
                href="https://www.animal-ethics.org/rescuing-trapped-animals/"
                rel="noreferrer"
                target="_blank"
              >
                Wild Animal Initiative
              </a>
              ,{" "}
              <a
                className="underline"
                href="https://www.animal-ethics.org/rescuing-trapped-animals/"
                rel="noreferrer"
                target="_blank"
              >
                Animal Ethics
              </a>{" "}
              and{" "}
              <a
                className="underline"
                href="https://www.animal-ethics.org/rescuing-trapped-animals/"
                rel="noreferrer"
                target="_blank"
              >
              Rethink Priorities
              </a>
              . Special thanks to{" "}
              <a
                className="underline"
                href="https://www.youtube.com/@HumaneHancock"
                rel="noreferrer"
                target="_blank"
              >
              Jack Hancock
              </a>{" "}
              for written content and{" "}
              <a
                className="underline"
                href="https://katerodman.com/"
                rel="noreferrer"
                target="_blank"
              >
              Kate Rodman
              </a>{" "}
              for the wonderful illustrations.
              This website would not have been possible without everyone’s
              dedication and support!
          </p>
          <h4 className="text-lg font-bold">Credits and sources</h4>
          <ol className="col-span-3 list-inside list-decimal leading-relaxed">
            <li>
              <a
                className="underline"
                href="https://reducing-suffering.org/how-many-wild-animals-are-there"
                rel="noreferrer"
                target="_blank"
              >
                How many wild animals are there?
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://www.animal-ethics.org/malnutrition-thirst-wild-animals/"
                rel="noreferrer"
                target="_blank"
              >
                Malnutrition, hunger and thirst in wild animals
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://forum.effectivealtruism.org/posts/8qmQr7kiEYFhX9eTR/what-is-wild-animal-suffering"
                rel="noreferrer"
                target="_blank"
              >
                What is wild animal suffering?
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://www.animal-ethics.org/weather-conditions-nonhuman-animals/"
                rel="noreferrer"
                target="_blank"
              >
                Weather conditions and nonhuman animals
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://www.animal-ethics.org/rescuing-trapped-animals/"
                rel="noreferrer"
                target="_blank"
              >
                Rescuing trapped and injured animals
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://www.animal-ethics.org/interspecific-conflict/"
                rel="noreferrer"
                target="_blank"
              >
                Antagonism in nature: Interspecific conflict
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://www.animal-ethics.org/diseases-nature/"
                rel="noreferrer"
                target="_blank"
              >
                Diseases in nature
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://www.animal-ethics.org/animals-natural-disasters/"
                rel="noreferrer"
                target="_blank"
              >
                Animals in natural disasters
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://www.animal-ethics.org/population-dynamics-animal-suffering/"
                rel="noreferrer"
                target="_blank"
              >
                Population dynamics and animal suffering
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://longtermrisk.org/the-importance-of-wild-animal-suffering/"
                rel="noreferrer"
                target="_blank"
              >
                The Importance of Wild-Animal Suffering
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://reducing-suffering.org/efforts-to-help-wild-animals-should-be-effective-not-idealistic/"
                rel="noreferrer"
                target="_blank"
              >
                Efforts to Help Wild Animals Should Be Effective, Not Idealistic
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://reducing-suffering.org/"
                rel="noreferrer"
                target="_blank"
              >
                Essays on Reducing Suffering
              </a>
            </li>
          </ol>
        </div>
        <img
          className="my-auto ml-14 max-h-40"
          src="/images/conclusion/vh-logo.png"
          alt="Vegan Hacktivists logo"
        />
      </div>
    </section>
  );
}
