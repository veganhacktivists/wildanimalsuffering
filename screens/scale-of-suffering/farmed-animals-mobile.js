import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import earthImage from "./images/earth.png";
import farmedAnimalsImage from "./images/farmed-animals.png";
import humanImage from "./images/human.png";

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
          <div className="grid w-[200vw] grid-cols-2 text-center text-3xl leading-tight text-white">
            <p className="flex flex-col justify-center font-brand">
              <span>There are roughly</span>
              <span className="text-blue">8 billion humans</span>
              <span>on planet Earth.</span>
            </p>
            <div>
              <p className="mx-auto max-w-md font-brand">
                For every human, there are roughly{" "}
                <span className="text-blue">3-4 farmed animals </span> being
                farmed at any given moment.
              </p>
              <p className="mx-auto max-w-lg space-y-16 pt-6 text-lg text-white">
                …and that&apos;s not even counting farmed fish, which is
                estimated to be around 10-13 per person.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-lg">
          <motion.div
            className="col-start-1 row-start-1 grid place-items-center"
            style={{ opacity: earthOpacity }}
          >
            <img
              className="col-start-1 row-start-1 max-h-[40vh]"
              src={earthImage.src}
              alt=""
            />
          </motion.div>
          <motion.div
            className="col-start-1 row-start-1 grid place-items-center"
            style={{ opacity: humanOpacity }}
          >
            <img
              className="col-start-1 row-start-1 max-h-[30vh]"
              src={humanImage.src}
              alt=""
            />
          </motion.div>
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
                src={farmedAnimalsImage.src}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
