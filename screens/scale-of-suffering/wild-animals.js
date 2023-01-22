import { motion, useScroll, useTransform } from "framer-motion";
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

const wildBirdsPos = [0, 0];
const reptilesPos = [0.5 * screen, 0.7 * screen];
const fishPos = [1 * screen, 1.2 * screen];
const earthWormsPos = [1.5 * screen, 1.7 * screen];
const terrestrialArPos = [2 * screen, 2.5 * screen];

export function WildAnimals() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const wildBirdsOpacity = useTransform(scrollYProgress, wildBirdsPos, [0, 1]);
  const wildBirdsTextY = useTransform(scrollYProgress, wildBirdsPos, [100, 0]);
  const reptilesOpacity = useTransform(scrollYProgress, reptilesPos, [0, 1]);
  const reptilesTextY = useTransform(scrollYProgress, reptilesPos, [100, 0]);
  const fishOpacity = useTransform(scrollYProgress, fishPos, [0, 1]);
  const fishTextY = useTransform(scrollYProgress, fishPos, [100, 0]);
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
  const earthWormsTextY = useTransform(
    scrollYProgress,
    earthWormsPos,
    [100, 0]
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
  const terrestrialArTextY = useTransform(
    scrollYProgress,
    terrestrialArPos,
    [100, 0]
  );

  return (
    <div
      className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-2 gap-10 px-10"
      ref={scrollRef}
    >
      <div className="flex flex-col">
        <div className="flex h-[250vh] flex-col">
          <div className="sticky top-0 flex h-screen flex-col justify-center space-y-16 py-16 text-lg text-white">
            <p>
              However… in the wild:
              <br />
              <strong>For every human</strong>, there are between:
            </p>
            <ul className="flex flex-1 flex-col justify-center space-y-2 text-4xl">
              <motion.li
                className="font-brand text-[#b0cbd2]"
                style={{ opacity: wildBirdsOpacity, y: wildBirdsTextY }}
              >
                10-50 wild birds
              </motion.li>
              <motion.li
                className="font-brand text-[#85c5c8]"
                style={{ opacity: wildBirdsOpacity, y: wildBirdsTextY }}
              >
                10-100 wild mammals
              </motion.li>
              <motion.li
                className="font-brand text-[#afcb83]"
                style={{ opacity: reptilesOpacity, y: reptilesTextY }}
              >
                10-10,000 reptiles
              </motion.li>
              <motion.li
                className="font-brand text-[#c79d5e]"
                style={{ opacity: fishOpacity, y: fishTextY }}
              >
                1,000 - 100,000 fish
              </motion.li>
              <motion.li
                className="font-brand text-[#d68a9c]"
                style={{ opacity: earthWormsOpacity, y: earthWormsTextY }}
              >
                10,000 - 10⁶ earthworms
              </motion.li>
              <motion.li
                className="font-brand text-[#a89cf6]"
                style={{
                  opacity: terrestrialArOpacity,
                  y: terrestrialArTextY,
                }}
              >
                600,000 - 7*10⁸ insects
              </motion.li>
            </ul>
            <div className="max-w-md space-y-4">
              <p>…in existence at any moment.</p>
              <p>
                This means that the vast majority of individuals are wild
                animals. The scale is truly mind boggling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 grid h-screen place-items-center">
        <div className="grid p-4">
          <div className="col-start-1 row-start-1 grid place-items-center">
            <img
              className="col-start-1 row-start-1"
              src={chartWildAnimalsImage.src}
              alt=""
            />
            <motion.div
              style={{ opacity: reptilesOpacity }}
              className="col-start-1 row-start-1"
            >
              <img src={chartReptilesImage.src} alt="" />
            </motion.div>
            <motion.div
              style={{ opacity: fishOpacity }}
              className="col-start-1 row-start-1"
            >
              <img src={chartFishImage.src} alt="" />
            </motion.div>
            <motion.div
              style={{ opacity: earthWormsOpacity }}
              className="col-start-1 row-start-1"
            >
              <img src={chartEarthWormsImage.src} alt="" />
            </motion.div>
            <motion.div
              style={{ opacity: terrestrialArOpacity }}
              className="col-start-1 row-start-1"
            >
              <img src={chartTerrestrialArImage.src} alt="" />
            </motion.div>

            <motion.div
              style={{ opacity: fishLabelOpacity }}
              className="col-start-1 row-start-2 max-h-[10vh]"
            >
              <img src={chartFishLabelsImage.src} alt="" />
            </motion.div>
            <motion.div
              style={{ opacity: earthWormsLabelOpacity }}
              className="col-start-1 row-start-2 max-h-[10vh]"
            >
              <img src={chartEarthWormsLabelsImage.src} alt="" />
            </motion.div>
            <motion.div
              style={{ opacity: terrestrialArOpacity }}
              className="col-start-1 row-start-2 max-h-[10vh]"
            >
              <img src={chartTerrestrialArLabelsImage.src} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
