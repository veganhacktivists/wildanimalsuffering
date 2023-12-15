import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import chartEarthWormsLabelsImage from "./images/chart-earth-worms-labels.png";
import chartEarthWormsImage from "./images/chart-earth-worms.png";
import chartFishLabelsImage from "./images/chart-fish-labels.png";
import chartFishImage from "./images/chart-fish.png";
import chartReptilesImage from "./images/chart-reptiles.png";
import chartTerrestrialArLabelsImage from "./images/chart-terrestrial-ar-labels.png";
import chartTerrestrialArImage from "./images/chart-terrestrial-ar.png";
import chartWildAnimalsImage from "./images/chart-wild-animals.png";

const screen = 1 / 2.5;

const reptilesPos = [0.5 * screen, 0.8 * screen];
const fishPos = [1 * screen, 1.3 * screen];
const earthWormsPos = [1.5 * screen, 1.8 * screen];
const terrestrialArPos = [2 * screen, 2.3 * screen];

export function WildAnimalsMobile() {
  const { i18n, t } = useTranslation();
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const reptilesOpacity = useTransform(scrollYProgress, reptilesPos, [0, 1]);
  const fishOpacity = useTransform(scrollYProgress, fishPos, [0, 1]);
  const fishLabelOpacity = useTransform(
    scrollYProgress,
    [...fishPos, ...earthWormsPos],
    [0, 1, 0.5, 0],
  );
  const earthWormsOpacity = useTransform(
    scrollYProgress,
    earthWormsPos,
    [0, 1],
  );
  const earthWormsLabelOpacity = useTransform(
    scrollYProgress,
    [...earthWormsPos, ...terrestrialArPos],
    [0, 1, 0.5, 0],
  );
  const terrestrialArOpacity = useTransform(
    scrollYProgress,
    terrestrialArPos,
    [0, 1],
  );

  const statTranslate = useTransform(
    scrollYProgress,
    [...reptilesPos, ...fishPos, ...earthWormsPos, ...terrestrialArPos],
    [
      "0vw",
      "-100vw",
      "-100vw",
      "-200vw",
      "-200vw",
      "-300vw",
      "-300vw",
      "-400vw",
    ],
  );

  return (
    <>
      <div className="min-h-[500vh]" ref={scrollRef}>
        <div className="sticky top-0 flex min-h-screen w-screen flex-col justify-center overflow-hidden">
          <div className="flex-1 text-white md:text-xl">
            <p className="px-4 pt-4">
              <Trans i18nKey="scale_of_suffering.in_the_wild">
                However… in the wild:
                <br />
                <strong>For every human</strong>, there are between:
              </Trans>
            </p>
            <motion.div
              className="relative mt-2"
              style={{
                left: i18n.dir() === "ltr" ? statTranslate : undefined,
                right: i18n.dir() === "rtl" ? statTranslate : undefined,
              }}
            >
              <ul className="grid w-[500vw] grid-cols-5 font-brand text-2xl md:text-3xl">
                <li className="px-4">
                  <p className="text-[#b0cbd2]">
                    {t("scale_of_suffering.wild_birds")}
                  </p>
                  <p className="text-[#85c5c8]">
                    {t("scale_of_suffering.wild_mammals")}
                  </p>
                </li>
                <li className="px-4 text-[#afcb83]">
                  {t("scale_of_suffering.reptiles_and_amphibians")}
                </li>
                <li className="px-4 text-[#c79d5e]">
                  {t("scale_of_suffering.fish")}
                </li>
                <li className="px-4 text-[#d68a9c]">
                  {t("scale_of_suffering.earthworms")}
                </li>
                <li className="px-4 text-[#a89cf6]">
                  {t("scale_of_suffering.terrestrial_arthropods")}
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid place-items-center px-4 pb-4">
            <div className="col-start-1 row-start-1 grid place-items-center">
              <img
                className="col-start-1 row-start-1 max-h-[40vh]"
                src={chartWildAnimalsImage.src}
                alt=""
              />
              <motion.img
                style={{ opacity: reptilesOpacity }}
                className="col-start-1 row-start-1 max-h-[40vh]"
                src={chartReptilesImage.src}
                alt=""
              />
              <motion.img
                style={{ opacity: fishOpacity }}
                className="col-start-1 row-start-1 max-h-[40vh]"
                src={chartFishImage.src}
                alt=""
              />
              <motion.img
                style={{ opacity: earthWormsOpacity }}
                className="col-start-1 row-start-1 max-h-[40vh]"
                src={chartEarthWormsImage.src}
                alt=""
              />
              <motion.img
                style={{ opacity: terrestrialArOpacity }}
                className="col-start-1 row-start-1 max-h-[40vh]"
                src={chartTerrestrialArImage.src}
                alt=""
              />
            </div>
            <motion.img
              style={{ opacity: fishLabelOpacity }}
              className="col-start-1 row-start-2 max-h-[10vh]"
              src={chartFishLabelsImage.src}
              alt=""
            />
            <motion.img
              style={{ opacity: earthWormsLabelOpacity }}
              className="col-start-1 row-start-2 max-h-[10vh]"
              src={chartEarthWormsLabelsImage.src}
              alt=""
            />
            <motion.img
              style={{ opacity: terrestrialArOpacity }}
              className="col-start-1 row-start-2 max-h-[10vh]"
              src={chartTerrestrialArLabelsImage.src}
              alt=""
            />
          </div>
          <p className="flex flex-1 items-end p-4 text-white md:text-xl">
            {t("scale_of_suffering.in_existence")}
          </p>
        </div>
      </div>

      <p className="mx-auto grid h-screen max-w-lg place-items-center px-4 text-center text-3xl font-medium text-white">
        {t("scale_of_suffering.conclusion")}
      </p>
    </>
  );
}
