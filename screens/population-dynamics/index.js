import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import bottomRightGrassImage from "./images/bottom-right-grass.png";
import chickImage from "./images/chick.png";
import duckImage from "./images/duck.png";
import topLeftGrassImage from "./images/top-left-grass.png";

export function PopulationDynamics() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["end 2", "end start"],
  });
  const chickOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0.05, 0.6]);

  return (
    <section
      id="population-dynamics"
      ref={scrollRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-dirt-road bg-cover bg-center py-16 sm:py-24"
    >
      <img
        className="absolute top-0 left-0"
        src={topLeftGrassImage.src}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0"
        src={bottomRightGrassImage.src}
        alt=""
      />

      <div className="absolute top-1/2 left-1/2 h-[900px] w-[1440px] -translate-x-1/2 -translate-y-[45%] scale-50 sm:-translate-y-1/2 sm:scale-75 md:scale-100">
        <div className="absolute inset-0 grid h-full w-full grid-cols-10 grid-rows-5">
          <img
            className="col-span-2 col-start-7 row-span-2 row-start-2 -translate-x-8 -translate-y-8"
            src={duckImage.src}
            alt=""
          />
          <img
            className="col-start-7 row-start-3 translate-y-10"
            src={chickImage.src}
            alt=""
          />
          <img
            className="col-start-5 row-start-3 translate-x-16"
            src={chickImage.src}
            alt=""
          />
          <motion.div
            style={{ opacity: chickOpacity }}
            className="col-start-1 row-start-3 translate-y-20 opacity-50 grayscale"
          >
            <img src={chickImage.src} alt="" />
          </motion.div>
          <motion.div
            style={{ opacity: chickOpacity }}
            className="col-start-2 row-start-3 translate-x-20 opacity-50 grayscale"
          >
            <img src={chickImage.src} alt="" />
          </motion.div>
          <motion.div
            style={{ opacity: chickOpacity }}
            className="col-start-2 row-start-5 translate-x-10 opacity-50 grayscale"
          >
            <img src={chickImage.src} alt="" />
          </motion.div>
          <motion.div
            style={{ opacity: chickOpacity }}
            className="col-start-3 row-start-3 translate-x-20 translate-y-20 opacity-50 grayscale"
          >
            <img src={chickImage.src} alt="" />
          </motion.div>
          <motion.div
            style={{ opacity: chickOpacity }}
            className="col-start-3 row-start-4 -translate-x-20 opacity-50 grayscale"
          >
            <img src={chickImage.src} alt="" />
          </motion.div>
          <motion.div
            style={{ opacity: chickOpacity }}
            className="col-start-4 row-start-4 translate-y-5 opacity-50 grayscale"
          >
            <img src={chickImage.src} alt="" />
          </motion.div>
          <motion.div
            style={{ opacity: chickOpacity }}
            className="col-start-5 row-start-5 -translate-y-20 opacity-50 grayscale"
          >
            <img src={chickImage.src} alt="" />
          </motion.div>
          <motion.div
            style={{ opacity: chickOpacity }}
            className="col-start-3 row-start-5 translate-x-20 opacity-50 grayscale"
          >
            <img src={chickImage.src} alt="" />
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-8">
        <h2 className="font-brand text-4xl text-white">Population Dynamics</h2>
        <div className="flex flex-col gap-8">
          <p className="text-lg text-white sm:max-w-sm md:max-w-xl lg:max-w-2xl">
            Wild animals often have many children, but for their populations to
            remain stable, on average each parent can only have two offspring
            that reach adulthood.{" "}
            <strong>This means that the majority of animals die young.</strong>
          </p>
          <div>
            <a
              href="https://www.animal-ethics.org/population-dynamics-animal-suffering/"
              className="rounded-full bg-primary px-14 py-1 text-lg font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
