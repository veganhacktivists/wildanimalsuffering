import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
        src="/images/population-dynamics/top-left-grass.png"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0"
        src="/images/population-dynamics/bottom-right-grass.png"
        alt=""
      />

      <div className="absolute top-1/2 left-1/2 h-[900px] w-[1440px] -translate-x-1/2 -translate-y-[45%] scale-50 sm:-translate-y-[50%] sm:scale-75 md:scale-100">
        <div className="absolute inset-0 grid h-full w-full grid-cols-10 grid-rows-5">
          <img
            className="col-span-2 col-start-7 row-span-2 row-start-2 -translate-x-8 -translate-y-8"
            src="/images/population-dynamics/duck.png"
            alt=""
          />
          <img
            className="col-start-7 row-start-3 translate-y-10"
            src="/images/population-dynamics/chick.png"
            alt=""
          />
          <img
            className="col-start-5 row-start-3 translate-x-16"
            src="/images/population-dynamics/chick.png"
            alt=""
          />
          <motion.img
            style={{ opacity: chickOpacity }}
            className="col-start-1 row-start-2 translate-x-20 opacity-50 grayscale"
            src="/images/population-dynamics/chick.png"
            alt=""
          />
          <motion.img
            style={{ opacity: chickOpacity }}
            className="col-start-1 row-start-3 translate-y-20 opacity-50 grayscale"
            src="/images/population-dynamics/chick.png"
            alt=""
          />
          <motion.img
            style={{ opacity: chickOpacity }}
            className="col-start-2 row-start-3 translate-x-20 opacity-50 grayscale"
            src="/images/population-dynamics/chick.png"
            alt=""
          />
          <motion.img
            style={{ opacity: chickOpacity }}
            className="col-start-2 row-start-5 translate-x-10 opacity-50 grayscale"
            src="/images/population-dynamics/chick.png"
            alt=""
          />
          <motion.img
            style={{ opacity: chickOpacity }}
            className="col-start-3 row-start-3 translate-x-20 translate-y-20 opacity-50 grayscale"
            src="/images/population-dynamics/chick.png"
            alt=""
          />
          <motion.img
            style={{ opacity: chickOpacity }}
            className="col-start-3 row-start-4 -translate-x-20 opacity-50 grayscale"
            src="/images/population-dynamics/chick.png"
            alt=""
          />
          <motion.img
            style={{ opacity: chickOpacity }}
            className="col-start-4 row-start-4 translate-y-5 opacity-50 grayscale"
            src="/images/population-dynamics/chick.png"
            alt=""
          />
          <motion.img
            style={{ opacity: chickOpacity }}
            className="col-start-5 row-start-5 -translate-y-20 opacity-50 grayscale"
            src="/images/population-dynamics/chick.png"
            alt=""
          />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col space-y-4 px-8 sm:space-y-10">
        <h2 className="font-brand text-4xl text-white">Population Dynamics</h2>
        <p className="text-lg text-white">
          Wild animals tend to have a lot of children, and for populations to
          remain stable, on average each parent can only have 2 children that
          reach adulthood.{" "}
          <strong>This means that most animals die young.</strong>
        </p>
      </div>
    </section>
  );
}
