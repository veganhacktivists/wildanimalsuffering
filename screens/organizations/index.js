import { motion } from "framer-motion";
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
  const { screenRef, effectOpacity } = useBackgroundEffect();

  return (
    <section
      id="organizations"
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
          Organizations Working on Wild Animal Suffering
        </h2>

        <div className="mx-auto grid w-full max-w-sm gap-12 md:max-w-5xl md:grid-cols-2 xl:max-w-6xl">
          <Organization
            name="Wild Animal Initiative"
            imageUrl={wildAnimalInitiativeImage.src}
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
            imageUrl={animalEthicsImage.src}
            links={[
              ["Visit", "https://www.animal-ethics.org/"],
              ["Donate", "https://www.animal-ethics.org/support-us"],
              ["Volunteer", "https://www.animal-ethics.org/volunteer/"],
            ]}
          >
            Animal Ethics aims to achieve a shift in attitudes towards nonhuman
            animals. Their vision is a world where sentient beings are given
            full moral consideration.
          </Organization>
          <Organization
            name="Rethink Priorities"
            imageUrl={rethinkPrioritiesImage.src}
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
            imageUrl={faunalyticsImage.src}
            links={[
              ["Visit", "https://faunalytics.org/"],
              ["Donate", "https://faunalytics.org/donate"],
              ["Volunteer", "https://faunalytics.org/volunteer"],
            ]}
          >
            Faunalytics&apos; mission is to empower animal advocates with access
            to research, analysis, strategies, and messages that maximize their
            effectiveness to reduce animal suffering.
          </Organization>
        </div>

        <div className="mx-auto max-w-xl space-y-14 text-center lg:max-w-2xl">
          <p className="leading-relaxed text-white">
            We also highly recommend checking out{" "}
            <a
              href="https://www.wawcommittee.org/"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Wild Animal Welfare Committee
            </a>
            ,{" "}
            <a
              href="https://longtermrisk.org/"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Center on Long-Term Risk
            </a>{" "}
            and{" "}
            <a
              href="https://centerforreducingsuffering.org/"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Center for Reducing Suffering
            </a>{" "}
            too!
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
