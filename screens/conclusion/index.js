import Image from "next/image";
import { HealthcareIcon } from "../../components/healthcare-icon";
import { formatOrdinals } from "../../utils/number-format";

import mommaImage from "./images/momma.png";
import pupsImage from "./images/pups.png";
import logoImage from "./images/vh-logo.png";

export function Conclusion({ visitors }) {
  const visitorsFormatted = formatOrdinals(visitors);

  return (
    <section
      id="conclusion"
      className="relative min-h-screen overflow-hidden bg-woods bg-cover md:bg-woods-md md:bg-center"
    >
      <div className="mx-auto max-w-7xl px-10">
        <Image
          className="not-sr-only absolute top-52 max-w-lg md:right-32 lg:w-full"
          src={mommaImage}
          alt="Mother bear"
        />

        <Image
          className="not-sr-only absolute right-1/4 top-[600px] max-w-lg lg:w-full"
          src={pupsImage}
          alt="Bear pups"
        />
        <div className="py-30 relative flex max-w-3xl flex-col pt-36 text-white">
          <h2 className="mb-4 font-brand text-5xl leading-snug">
            Together, we can make life better for wild animals.
          </h2>
          <p className="font-lg">
            The increasing moral concern for animals in recent years is a
            welcome development. It is becoming increasingly rare to find
            individuals who are indifferent to animal suffering. We understand
            that suffering is a negative experience for any individual who
            experiences it, regardless of their species or location, whether
            they are in a house, farm, or forest. Their suffering matters. It
            matters to them. And it should matter to us.
          </p>
          <br />
          <p className="font-lg z-10">
            If you care about wild animals, we encourage you to join our mission
            to improve their lives. There is a lot to learn about the conditions
            that wild animals face. This page is just a brief overview of the
            issue. The reality is that many animals are in desperate need of
            help, and people like you have the power to make a difference. We
            hope you will choose to take action and help us in our efforts.
          </p>
          <br />
          <h3 className="z-10 mt-10 font-brand text-4xl text-primary">
            Thank you.
          </h3>
        </div>
      </div>

      <div className="relative mt-24 flex flex-row justify-evenly bg-white bg-opacity-10 py-10">
        <div className="mx-auto w-full max-w-7xl px-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <HealthcareIcon className="my-auto" />
              <div className="text-center md:text-left">
                <h4 className="mb-4 text-xl font-bold text-white md:mb-4">
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
              className="self-center whitespace-nowrap rounded-full bg-primary px-5 py-1 text-xl font-medium md:text-lg"
            >
              Support Us
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl p-10">
        <div className="grid grid-cols-4 gap-10 text-white">
          <div className="col-span-4 flex flex-col gap-2 md:col-span-3 lg:flex-row lg:gap-10">
            <h4 className="w-48 whitespace-nowrap text-lg font-bold">
              Special thanks
            </h4>
            <p className="flex-1 leading-relaxed">
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
              for the wonderful illustrations. This website would not have been
              possible without everyone&apos;s dedication and support!
            </p>
          </div>

          <div className="hidden md:block">
            <a
              href="https://veganhacktivists.org/"
              rel="noreferrer"
              target="_blank"
              className="flex justify-end"
            >
              <Image
                height={128}
                src={logoImage}
                alt="Vegan Hacktivists logo"
              />
            </a>
          </div>

          <div className="col-span-4 flex flex-col gap-2 md:col-span-3 lg:flex-row lg:gap-10">
            <h4 className="w-48 text-lg font-bold">Credits and sources</h4>
            <ol className="flex-1 list-inside list-decimal leading-relaxed">
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
                  Efforts to Help Wild Animals Should Be Effective
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
                  href="https://reducing-suffering.org/why-vegans-should-care-about-suffering-in-nature/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Why Vegans Should Care about Suffering in Nature
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://handwiki.org/wiki/Philosophy:Wild_animal_suffering"
                  rel="noreferrer"
                  target="_blank"
                >
                  Wild Animal Suffering on HandWiki
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://stijnbruers.wordpress.com/2022/10/21/wild-animal-suffering-infographic/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Wild Animal Suffering Infographic by Stijn Bruers
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://rethinkpriorities.org/publications/estimates-of-global-captive-vertebrate-numbers"
                  rel="noreferrer"
                  target="_blank"
                >
                  Estimates of global captive vertebrate numbers
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.openphilanthropy.org/research/fish-the-forgotten-farm-animal/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Fish: The Forgotten Farm Animal
                </a>
              </li>
            </ol>
          </div>
          {visitors > 0 && (
            <div className="col-span-4 flex flex-col gap-2 md:col-span-3 lg:flex-row lg:gap-10">
              <h4 className="w-48 whitespace-nowrap text-lg font-bold">
                Thank you!
              </h4>
              <p className="flex-1 leading-relaxed">
                You&apos;re our {visitorsFormatted} visitor, thanks for reading!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
