import { Trans, useTranslation } from "react-i18next";
import { HealthcareIcon } from "~/components/healthcare-icon";
import { formatOrdinals } from "~/utils/number-format";

import mommaImage from "./images/momma.png";
import pupsImage from "./images/pups.png";
import logoImage from "./images/vh-logo.png";

export function Conclusion({ locale, visitors }) {
  const { t } = useTranslation();
  const visitorsFormatted = formatOrdinals({ n: visitors, t, locale });

  return (
    <section
      id={t("conclusion.id")}
      className="relative min-h-screen overflow-hidden bg-woods bg-cover md:bg-woods-md md:bg-center"
    >
      <div className="mx-auto max-w-7xl px-10">
        <img
          className="not-sr-only absolute top-52 max-w-lg md:right-32 lg:w-full"
          src={mommaImage.src}
          alt=""
        />

        <img
          className="not-sr-only absolute right-1/4 top-[600px] max-w-lg lg:w-full"
          src={pupsImage.src}
          alt=""
        />
        <div className="py-30 relative flex max-w-3xl flex-col pt-36 text-white">
          <h2 className="mb-4 font-brand text-5xl leading-snug">
            {t("conclusion.heading")}
          </h2>
          <Trans t={t} i18nKey="conclusion.text">
            <p className="font-lg">
              The increasing moral concern for animals in recent years is a
              welcome development. It is becoming increasingly rare to find
              individuals who are indifferent to animal suffering. We understand
              that suffering is a negative experience for any individual who
              experiences it, regardless of their species or location, whether
              they are in a house, farm, or forest. Their suffering matters. It
              matters to them. And it should matter to us.
            </p>
            <p className="font-lg z-10 mt-6">
              If you care about wild animals, we encourage you to join our
              mission to improve their lives. There is a lot to learn about the
              conditions that wild animals face. This page is just a brief
              overview of the issue. The reality is that many animals are in
              desperate need of help, and people like you have the power to make
              a difference. We hope you will choose to take action and help us
              in our efforts.
            </p>
          </Trans>
          <p className="z-10 mt-10 font-brand text-4xl text-primary">
            {t("conclusion.thank_you")}
          </p>
        </div>
      </div>

      <div className="relative mt-24 flex flex-row justify-evenly bg-white bg-opacity-10 py-10">
        <div className="mx-auto w-full max-w-7xl px-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <HealthcareIcon className="my-auto" />
              <div className="text-center md:text-left">
                <h4 className="mb-4 text-xl font-bold text-white md:mb-4">
                  {t("conclusion.support.heading")}
                </h4>
                <p className="text-md font-light text-white">
                  {t("conclusion.support.description")}
                </p>
              </div>
            </div>
            <a
              href="https://veganhacktivists.org/support"
              target="_blank"
              rel="noreferrer"
              className="self-center whitespace-nowrap rounded-full bg-primary px-5 py-1 text-xl font-medium md:text-lg"
            >
              {t("conclusion.support.cta")}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl p-10">
        <div className="grid grid-cols-4 gap-10 text-white">
          <div className="col-span-4 flex flex-col gap-2 md:col-span-3 lg:flex-row lg:gap-10">
            <h4 className="w-48 whitespace-nowrap text-lg font-bold">
              {t("conclusion.special_thanks.label")}
            </h4>
            <p className="flex-1 leading-relaxed">
              <Trans t={t} i18nKey="conclusion.special_thanks.description">
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
                for the wonderful illustrations. This website would not have
                been possible without everyone&apos;s dedication and support!
              </Trans>
            </p>
          </div>

          <div className="hidden md:block">
            <a
              href="https://veganhacktivists.org/"
              rel="noreferrer"
              target="_blank"
              className="flex justify-end"
            >
              <img
                height={128}
                src={logoImage.src}
                alt={t("common.logo.alt")}
              />
            </a>
          </div>

          <div className="col-span-4 flex flex-col gap-2 md:col-span-3 lg:flex-row lg:gap-10">
            <h4 className="w-48 text-lg font-bold">
              {t("conclusion.credits.label")}
            </h4>
            <ol className="flex-1 list-inside list-decimal leading-relaxed">
              <li>
                <a
                  className="underline"
                  href="https://reducing-suffering.org/how-many-wild-animals-are-there"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.how_many_wild_animals.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/malnutrition-thirst-wild-animals/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.malnutrition.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://forum.effectivealtruism.org/posts/8qmQr7kiEYFhX9eTR/what-is-wild-animal-suffering"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.what_is_was.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/weather-conditions-nonhuman-animals/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.weather_conditions.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/rescuing-trapped-animals/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.rescuing.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/interspecific-conflict/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.antagonism.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/diseases-nature/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.diseases.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/animals-natural-disasters/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.natural_disasters.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.animal-ethics.org/population-dynamics-animal-suffering/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.population_dynamics.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://longtermrisk.org/the-importance-of-wild-animal-suffering/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.importance.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://reducing-suffering.org/efforts-to-help-wild-animals-should-be-effective-not-idealistic/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.efforts.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://reducing-suffering.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.essays.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://reducing-suffering.org/why-vegans-should-care-about-suffering-in-nature/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.why_care.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://handwiki.org/wiki/Philosophy:Wild_animal_suffering"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.handwiki.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://stijnbruers.wordpress.com/2022/10/21/wild-animal-suffering-infographic/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.infographic.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://rethinkpriorities.org/publications/estimates-of-global-captive-vertebrate-numbers"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.vertebrate.label")}
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.openphilanthropy.org/research/fish-the-forgotten-farm-animal/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("conclusion.credits.fish.label")}
                </a>
              </li>
            </ol>
          </div>
          {visitors > 0 && (
            <div className="col-span-4 flex flex-col gap-2 md:col-span-3 lg:flex-row lg:gap-10">
              <h4 className="w-48 whitespace-nowrap text-lg font-bold">
                {t("conclusion.stats.label")}
              </h4>
              <p className="flex-1 leading-relaxed">
                {t("conclusion.stats.description", { visitorsFormatted })}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
