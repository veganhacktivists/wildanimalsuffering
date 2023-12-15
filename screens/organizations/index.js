import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import {
  BackgroundEffect,
  useBackgroundEffect,
} from "~/components/background-effect";
import { Organization } from "./organization";

import animalEthicsImage from "./images/animal-ethics.png";
import faunalyticsImage from "./images/faunalytics.png";
import frogImage from "./images/frog.png";
import rethinkPrioritiesImage from "./images/rethink-priorities.png";
import wildAnimalInitiativeImage from "./images/wild-animal-initiative.png";

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

        <div className="mx-auto grid w-full max-w-sm gap-12 md:max-w-5xl md:grid-cols-2 xl:max-w-6xl">
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
        </div>

        <div className="mx-auto max-w-xl space-y-14 text-center lg:max-w-2xl">
          <p className="leading-relaxed text-white">
            <Trans i18nKey="organizations.description">
              We also highly recommend checking out{" "}
              <a
                href={t("organizations.waw_committee.urls.website")}
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                Wild Animal Welfare Committee
              </a>
              ,{" "}
              <a
                href={t("organizations.long_term_risk.urls.website")}
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                Center on Long-Term Risk
              </a>{" "}
              and{" "}
              <a
                href={t(
                  "organizations.center_for_reducing_suffering.urls.website",
                )}
                target="_blank"
                className="underline"
                rel="noreferrer"
              >
                Center for Reducing Suffering
              </a>{" "}
              too!
            </Trans>
          </p>
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
