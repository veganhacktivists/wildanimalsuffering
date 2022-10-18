import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FarmedAnimals } from "./farmed-animals";

/*
  For Later:

  "animal-stats-birds": "10-50 wild birds",
  "animal-stats-wild-mammals": "10-100 wild mammals",
  "animal-stats-reptiles": "10-10,000 reptiles",
  "animal-stats-amphibians": "10-10,000 amphibians",
  "animal-stats-fish": "1,000-100,000 fish",
  "animal-stats-earthworms": "10,000-10<sup>6</sup> earthworms",
  "animal-stats-arthropods": "600,000-7*10<sup>8</sup> arthropods",
*/

export function PopulationScale() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const earthOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const humanOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const animalsOpacity = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  return (
    <div ref={scrollRef} className="min-h-screen w-full bg-abyss bg-cover">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-2 gap-10 px-10">
        <div className="flex flex-col">
          <div className="grid h-screen place-items-center">
            <h2 className="flex flex-col font-brand text-5xl leading-tight text-white">
              <span>There are roughly</span>
              <span className="text-blue-200">8 billion humans</span>
              <span>on planet Earth.</span>
            </h2>
          </div>
          <div className="grid h-screen place-items-center">
            <h2 className="flex flex-col font-brand text-5xl leading-tight text-white">
              <span>For every human, there are roughly</span>
              <span className="text-blue-200">3-4 farmed animals</span>
              <span>being farmed at any given moment.</span>
            </h2>
          </div>
        </div>
        <div className="sticky top-0 grid h-screen place-items-center">
          <div>
            <motion.img
              style={{ opacity: earthOpacity }}
              src="/images/population-scale/earth.png"
              alt=""
            />
            <motion.img
              style={{ opacity: humanOpacity }}
              className="absolute inset-0 left-1/2 top-1/2 w-1/4 -translate-x-1/2 -translate-y-1/2"
              src="/images/population-scale/human.png"
              alt=""
            />
            <motion.div
              className="absolute inset-0 left-1/2 top-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ opacity: animalsOpacity }}
            >
              <FarmedAnimals className="h-full w-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
