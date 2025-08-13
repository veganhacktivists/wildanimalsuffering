import { motion } from "framer-motion";
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
import wildAnimalWelfareCommitteeImage from "./images/wild-animal-welfare-committee.png";

export function Organizations() {
  const { t } = useTranslation();
  const { screenRef, effectOpacity } = useBackgroundEffect();

  return (
    <section
      id={t("organizations.id")}
      className="relative flex min-h-screen items-center bg-mud bg-cover bg-top py-14 lg:py-24"
      ref={screenRef}
    >
      <div className="absolute bottom-0 h-full w-full bg-none bg-[-180px_-20px] bg-no-repeat sm:bg-tree-and-birds lg:bg-contain lg:bg-left-top" />

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
          <Organization
            name="Wild Animal Initiative"
            imageUrl={wildAnimalInitiativeImage.src}
            links={[
              [
                t("organizations.cta.visit"),
                t("organizations.wild_animal_initiative.urls.website"),
              ],
              [
                t("organizations.cta.donate"),
                t("organizations.wild_animal_initiative.urls.donate"),
              ],
              [
                t("organizations.cta.careers"),
                t("organizations.wild_animal_initiative.urls.careers"),
              ],
            ]}
          >
            {t("organizations.wild_animal_initiative.description")}
          </Organization>
          <Organization
            name="Animal Ethics"
            imageUrl={animalEthicsImage.src}
            links={[
              [
                t("organizations.cta.visit"),
                t("organizations.animal_ethics.urls.website"),
              ],
              [
                t("organizations.cta.donate"),
                t("organizations.animal_ethics.urls.donate"),
              ],
              [
                t("organizations.cta.volunteer"),
                t("organizations.animal_ethics.urls.volunteer"),
              ],
            ]}
          >
            {t("organizations.animal_ethics.description")}
          </Organization>
          <Organization
            name="Rethink Priorities"
            imageUrl={rethinkPrioritiesImage.src}
            links={[
              [
                t("organizations.cta.visit"),
                t("organizations.rethink_priorities.urls.website"),
              ],
              [
                t("organizations.cta.donate"),
                t("organizations.rethink_priorities.urls.donate"),
              ],
              [
                t("organizations.cta.careers"),
                t("organizations.rethink_priorities.urls.careers"),
              ],
            ]}
          >
            {t("organizations.rethink_priorities.description")}
          </Organization>
          <Organization
            name="Faunalytics"
            imageUrl={faunalyticsImage.src}
            links={[
              [
                t("organizations.cta.visit"),
                t("organizations.faunalytics.urls.website"),
              ],
              [
                t("organizations.cta.donate"),
                t("organizations.faunalytics.urls.donate"),
              ],
              [
                t("organizations.cta.volunteer"),
                t("organizations.faunalytics.urls.volunteer"),
              ],
            ]}
          >
            {t("organizations.faunalytics.description")}
          </Organization>
          <Organization
            name="Wild Animal Welfare Committee"
            imageUrl={wildAnimalWelfareCommitteeImage.src}
            links={[
              [
                t("organizations.cta.visit"),
                t("organizations.wild_animal_welfare_committee.urls.website"),
              ],
              [
                t("organizations.cta.contact"),
                t("organizations.wild_animal_welfare_committee.urls.contact"),
              ],
              [
                t("organizations.cta.members"),
                t("organizations.wild_animal_welfare_committee.urls.members"),
              ],
            ]}
          >
            {t("organizations.wild_animal_welfare_committee.description")}
          </Organization>
          <Organization
            name="Center on Long-Term Risk"
            imageUrl={centerLongTermRiskImage.src}
            links={[
              [
                t("organizations.cta.visit"),
                t("organizations.center_long_term_risk.urls.website"),
              ],
              [
                t("organizations.cta.donate"),
                t("organizations.center_long_term_risk.urls.donate"),
              ],
              [
                t("organizations.cta.careers"),
                t("organizations.center_long_term_risk.urls.careers"),
              ],
            ]}
          >
            {t("organizations.center_long_term_risk.description")}
          </Organization>
          <Organization
            name="Center for Reducing Suffering"
            imageUrl={centerReducingSufferingImage.src}
            links={[
              [
                t("organizations.cta.visit"),
                t("organizations.center_reducing_suffering.urls.website"),
              ],
              [
                t("organizations.cta.donate"),
                t("organizations.center_reducing_suffering.urls.donate"),
              ],
              [
                t("organizations.cta.volunteer"),
                t("organizations.center_reducing_suffering.urls.volunteer"),
              ],
            ]}
          >
            {t("organizations.center_reducing_suffering.description")}
          </Organization>
          <Organization
            name="Welfare Footprint"
            imageUrl={welfareFootprintImage.src}
            links={[
              [
                t("organizations.cta.visit"),
                t("organizations.welfare_footprint.urls.website"),
              ],
              [
                t("organizations.cta.donate"),
                t("organizations.welfare_footprint.urls.donate"),
              ],
              [
                t("organizations.cta.careers"),
                t("organizations.welfare_footprint.urls.careers"),
              ],
            ]}
          >
            {t("organizations.welfare_footprint.description")}
          </Organization>
          <Organization
            name="NYU Wild Animal Welfare"
            imageUrl={nyuWildAnimalWelfareImage.src}
            links={[
              [
                t("organizations.cta.visit"),
                t("organizations.nyu_wild_animal_welfare.urls.website"),
              ],
              [
                t("organizations.cta.donate"),
                t("organizations.nyu_wild_animal_welfare.urls.donate"),
              ],
              [
                t("organizations.cta.subscribe"),
                t("organizations.nyu_wild_animal_welfare.urls.subscribe"),
              ],
            ]}
          >
            {t("organizations.nyu_wild_animal_welfare.description")}
          </Organization>
          <Organization
            name="Animal Charity Evaluators"
            imageUrl={animalCharityEvaluatorsImage.src}
            links={[
              [
                t("organizations.cta.visit"),
                t("organizations.animal_charity_evaluators.urls.website"),
              ],
              [
                t("organizations.cta.donate"),
                t("organizations.animal_charity_evaluators.urls.donate"),
              ],
              [
                t("organizations.cta.careers"),
                t("organizations.animal_charity_evaluators.urls.careers"),
              ],
            ]}
          >
            {t("organizations.animal_charity_evaluators.description")}
          </Organization>
        </div>
      </div>

      <img
        className="not-sr-only pointer-events-none absolute bottom-0 right-0 hidden max-h-96 w-[20vw] lg:block"
        src={frogImage.src}
        alt=""
      />
    </section>
  );
}
