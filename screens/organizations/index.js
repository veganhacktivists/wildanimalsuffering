import { motion } from "motion/react";
import { Trans, useTranslation } from "react-i18next";
import {
  BackgroundEffect,
  useBackgroundEffect,
} from "~/components/background-effect";
import { Organization } from "./organization";

import animalCharityEvaluatorsImage from "./images/animal-charity-evaluators.png";
import animalEthicsImage from "./images/animal-ethics.png";
import centerLongTermRiskImage from "./images/center-long-term-risk.png";
import centerReducingSufferingImage from "./images/center-reducing-suffering.png";
import faunalyticsImage from "./images/faunalytics.png";
import frogImage from "./images/frog.png";
import nyuWildAnimalWelfareImage from "./images/nyu-wild-animal-welfare.png";
import rethinkPrioritiesImage from "./images/rethink-priorities.png";
import welfareFootprintImage from "./images/welfare-footprint.png";
import wildAnimalInitiativeImage from "./images/wild-animal-initiative.png";
import wildAnimalWelfareCommitteeImage from "./images/wild-animal-welfare-committee.jpg";

const organizations = [
  {
    id: "wild_animal_initiative",
    name: "Wild Animal Initiative",
    image: wildAnimalInitiativeImage,
    links: ["visit", "donate", "careers"],
  },
  {
    id: "animal_ethics",
    name: "Animal Ethics",
    image: animalEthicsImage,
    links: ["visit", "donate", "volunteer"],
  },
  {
    id: "rethink_priorities",
    name: "Rethink Priorities",
    image: rethinkPrioritiesImage,
    links: ["visit", "donate", "careers"],
  },
  {
    id: "faunalytics",
    name: "Faunalytics",
    image: faunalyticsImage,
    links: ["visit", "donate", "volunteer"],
  },
  {
    id: "wild_animal_welfare_committee",
    name: "Wild Animal Welfare Committee",
    image: wildAnimalWelfareCommitteeImage,
    links: ["visit", "contact", "members"],
  },
  {
    id: "center_long_term_risk",
    name: "Center on Long-Term Risk",
    image: centerLongTermRiskImage,
    links: ["visit", "donate", "careers"],
  },
  {
    id: "center_reducing_suffering",
    name: "Center for Reducing Suffering",
    image: centerReducingSufferingImage,
    links: ["visit", "donate", "volunteer"],
  },
  {
    id: "welfare_footprint",
    name: "Welfare Footprint Institute",
    image: welfareFootprintImage,
    links: ["visit", "donate", "careers"],
  },
  {
    id: "nyu_wild_animal_welfare",
    name: "NYU Wild Animal Welfare",
    image: nyuWildAnimalWelfareImage,
    links: ["visit", "donate"],
  },
  {
    id: "animal_charity_evaluators",
    name: "Animal Charity Evaluators",
    image: animalCharityEvaluatorsImage,
    links: ["visit", "donate", "careers"],
  },
];

export function Organizations() {
  const { t } = useTranslation();
  const { screenRef, effectOpacity } = useBackgroundEffect();

  return (
    <section
      id={t("organizations.id")}
      className="relative flex min-h-screen items-center bg-mud bg-cover bg-top py-14 lg:py-24"
      ref={screenRef}
    >
      <div className="absolute bottom-0 h-full w-full bg-none bg-position-[-180px_-20px] bg-no-repeat sm:bg-tree-and-birds lg:bg-contain lg:bg-top-left" />

      <motion.div
        style={{ opacity: effectOpacity }}
        className="absolute inset-0 z-10"
      >
        <BackgroundEffect type="leaves" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full flex-col space-y-14 px-10">
        <h2 className="mx-auto max-w-xl text-center font-brand text-4xl text-white">
          {t("organizations.heading")}
        </h2>

        <div className="mx-auto grid w-full max-w-sm gap-12 md:max-w-5xl md:grid-cols-2">
          {organizations.map(({ id, name, image, links }) => (
            <Organization
              key={id}
              name={name}
              imageUrl={image.src}
              links={links.map((link) => [
                t(`organizations.cta.${link}`),
                t(
                  `organizations.${id}.urls.${link === "visit" ? "website" : link}`,
                ),
              ])}
            >
              {t(`organizations.${id}.description`)}
            </Organization>
          ))}
        </div>
      </div>

      <img
        loading="lazy"
        decoding="async"
        className="not-sr-only pointer-events-none absolute bottom-0 right-0 hidden max-h-96 w-[20vw] lg:block"
        src={frogImage.src}
        alt=""
      />
    </section>
  );
}
