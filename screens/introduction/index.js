import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import {
  BackgroundEffect,
  useBackgroundEffect,
} from "~/components/background-effect";
import { ScrollDownIndicator } from "~/components/scroll-down-indicator";

import elephantsImage from "./images/elephants.png";

export function Introduction() {
  const { t } = useTranslation();
  const { screenRef, effectOpacity } = useBackgroundEffect();

  return (
    <section
      ref={screenRef}
      id={t("introduction.id")}
      className="flex min-h-screen items-end bg-black bg-savanna bg-[length:100%] bg-[center_-100px] bg-no-repeat md:bg-[center_-50vw] lg:items-stretch lg:bg-savanna-md lg:bg-cover lg:bg-center"
    >
      <motion.div style={{ opacity: effectOpacity }}>
        <BackgroundEffect type="fog" />
      </motion.div>

      <div className="z-10 mx-auto flex w-full max-w-7xl flex-col lg:mt-18">
        <div className="flex flex-1 flex-col justify-center">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center pl-6 pt-12 lg:pl-12 lg:pr-0">
              <img
                src={elephantsImage.src}
                alt="The illustration of a mother elephant and her young"
                className="mx-auto w-3/4 md:w-1/2 lg:w-full"
              />
            </div>
            <div className="bg-gradient-to-b from-transparent via-black to-black lg:bg-none lg:pt-16">
              <div className="flex flex-col space-y-10 px-10 py-10 lg:py-0">
                <h1 className="flex flex-col space-y-4 text-center font-brand lg:ltr:text-left lg:rtl:text-right">
                  <span className="text-5xl leading-none text-white lg:text-6xl">
                    {t("common.name")}
                  </span>
                  <span className="text-2xl text-primary lg:text-3xl">
                    {t("introduction.tagline")}
                  </span>
                </h1>
                <div className="grid gap-10 text-lg text-white lg:pb-10">
                  {t("introduction.copy", { returnObjects: true }).map(
                    (value) => (
                      <p key={value}>{value}</p>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
          <p className="flex flex-col rounded-lg bg-black px-10 text-lg text-white ltr:text-left rtl:text-right lg:self-center lg:bg-white/10 lg:p-3 lg:pl-8 lg:pr-8 lg:text-center">
            {t("introduction.overview")}
          </p>
        </div>

        <div className="flex items-end justify-center bg-black pb-6 pt-6 lg:bg-transparent">
          <ScrollDownIndicator />
        </div>
      </div>
    </section>
  );
}
