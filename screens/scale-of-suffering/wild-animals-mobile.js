import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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
    [0, 1, 0.5, 0]
  );
  const earthWormsOpacity = useTransform(
    scrollYProgress,
    earthWormsPos,
    [0, 1]
  );
  const earthWormsLabelOpacity = useTransform(
    scrollYProgress,
    [...earthWormsPos, ...terrestrialArPos],
    [0, 1, 0.5, 0]
  );
  const terrestrialArOpacity = useTransform(
    scrollYProgress,
    terrestrialArPos,
    [0, 1]
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
    ]
  );

  return (
    <>
      <div className="min-h-[500vh]" ref={scrollRef}>
        <div className="sticky top-0 flex min-h-screen w-screen flex-col justify-center overflow-hidden">
          <div className="flex-1 text-white md:text-xl">
            <p className="px-4 pt-4">
              However… in the wild:
              <br />
              <strong>For every human</strong>, there are between:
            </p>
            <motion.div
              className="relative mt-2"
              style={{ left: statTranslate }}
            >
              <ul className="grid w-[500vw] grid-cols-5 font-brand text-2xl md:text-3xl">
                <li className="px-4">
                  <p className="text-[#b0cbd2]">10-50 wild birds</p>
                  <p className="text-[#85c5c8]">10-100 wild mammals</p>
                </li>
                <li className="px-4 text-[#afcb83]">
                  10-10,000 reptiles & amphibians
                </li>
                <li className="px-4 text-[#c79d5e]">1,000 - 100,000 fish</li>
                <li className="px-4 text-[#d68a9c]">10,000 - 10⁶ earthworms</li>
                <li className="px-4 text-[#a89cf6]">
                  600,000 - 7*10⁸ terrestrial arthropods
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid place-items-center px-4 pb-4">
            <div className="col-start-1 row-start-1 grid place-items-center">
              <Image
                className="col-start-1 row-start-1 max-h-[40vh]"
                src={chartWildAnimalsImage}
                alt=""
              />
              <motion.div
                style={{ opacity: reptilesOpacity }}
                className="col-start-1 row-start-1 max-h-[40vh]"
              >
                <Image src={chartReptilesImage} alt="" />
              </motion.div>
              <motion.div
                style={{ opacity: fishOpacity }}
                className="col-start-1 row-start-1 max-h-[40vh]"
              >
                <Image src={chartFishImage} alt="" />
              </motion.div>
              <motion.div
                style={{ opacity: earthWormsOpacity }}
                className="col-start-1 row-start-1 max-h-[40vh]"
              >
                <Image src={chartEarthWormsImage} alt="" />
              </motion.div>
              <motion.div
                style={{ opacity: terrestrialArOpacity }}
                className="col-start-1 row-start-1 max-h-[40vh]"
              >
                <Image src={chartTerrestrialArImage} alt="" />
              </motion.div>
            </div>
            <motion.div
              style={{ opacity: fishLabelOpacity }}
              className="col-start-1 row-start-2 max-h-[10vh]"
            >
              <Image src={chartFishLabelsImage} alt="" />
            </motion.div>
            <motion.div
              style={{ opacity: earthWormsLabelOpacity }}
              className="col-start-1 row-start-2 max-h-[10vh]"
            >
              <Image src={chartEarthWormsLabelsImage} alt="" />
            </motion.div>
            <motion.div
              style={{ opacity: terrestrialArOpacity }}
              className="col-start-1 row-start-2 max-h-[10vh]"
            >
              <Image src={chartTerrestrialArLabelsImage} alt="" />
            </motion.div>
          </div>
          <p className="flex flex-1 items-end p-4 text-white md:text-xl">
            …in existence at any moment.
          </p>
        </div>
      </div>

      <p className="mx-auto grid h-screen max-w-lg place-items-center px-4 text-center text-3xl font-medium text-white">
        This means that the vast majority of individuals are wild animals. The
        scale is truly mind boggling.
      </p>
    </>
  );
}
