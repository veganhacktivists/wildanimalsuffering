import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const screen = 1 / 2;

export function FarmedAnimalsMobile() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const textTranslate = useTransform(
    scrollYProgress,
    [screen * 0.5, screen * 1.75],
    ["0vw", "-100vw"]
  );

  const earthOpacity = useTransform(scrollYProgress, [0, screen * 2], [1, 0.3]);
  const humanOpacity = useTransform(scrollYProgress, [0, screen], [1, 0]);
  const animalsOpacity = useTransform(
    scrollYProgress,
    [screen, screen * 2],
    [0, 1]
  );

  return (
    <div className="min-h-[200vh]" ref={scrollRef}>
      <div className="sticky top-0 flex min-h-screen w-screen flex-col justify-center overflow-hidden">
        <motion.div className="relative" style={{ left: textTranslate }}>
          <div className="grid w-[200vw] grid-cols-2 text-center font-brand text-3xl leading-tight text-white">
            <p className="flex flex-col justify-center">
              <span>There are roughly</span>
              <span className="text-blue">8 billion humans</span>
              <span>on planet Earth.</span>
            </p>
            <p className="flex flex-col justify-center">
              <span>For every human, there are roughly</span>
              <span className="text-blue">3-4 farmed animals</span>
              <span>being farmed at any given moment.</span>
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-lg">
          <div className="col-start-1 row-start-1 grid place-items-center">
            <motion.img
              style={{
                opacity: earthOpacity,
              }}
              className="col-start-1 row-start-1 max-h-[40vh]"
              src="/images/scale-of-suffering/earth.png"
              alt=""
            />
          </div>
          <div className="col-start-1 row-start-1 grid place-items-center">
            <motion.img
              style={{ opacity: humanOpacity }}
              className="col-start-1 row-start-1 max-h-[30vh]"
              src="/images/scale-of-suffering/human.png"
              alt=""
            />
          </div>
          <div className="col-start-1 row-start-1 grid place-items-center">
            <motion.div
              style={{
                opacity: animalsOpacity,
                originX: 0.5,
                originY: 0.5,
              }}
              className="col-start-1 row-start-1 transform-cpu"
            >
              <img
                className="max-h-[30vh]"
                src="/images/scale-of-suffering/farmed-animals.png"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
