import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import earthImage from "./images/earth.png";
import farmedAnimalsImage from "./images/farmed-animals.png";
import humanImage from "./images/human.png";

const screen = 1 / 2;

export function FarmedAnimals() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const earthOpacity = useTransform(scrollYProgress, [0, screen * 2], [1, 0.3]);
  const humanOpacity = useTransform(scrollYProgress, [0, screen], [1, 0]);
  const animalsOpacity = useTransform(
    scrollYProgress,
    [screen, screen * 2],
    [0, 1]
  );

  return (
    <div
      className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-2 gap-10 px-10"
      ref={scrollRef}
    >
      <div>
        <div className="grid h-screen place-items-center">
          <p className="flex flex-col font-brand text-5xl leading-tight text-white">
            <span>There are roughly</span>
            <span className="text-blue">8 billion humans</span>
            <span>on planet Earth.</span>
          </p>
        </div>
        <div className="flex h-screen flex-col justify-center">
          <p className="mx-auto max-w-lg font-brand text-5xl leading-tight text-white">
            For every human, there are roughly{" "}
            <span className="text-blue">3-4 farmed animals</span> being farmed
            at any given moment.
          </p>
          <p className="mx-auto max-w-lg space-y-16 pt-6 text-lg text-white">
            …and that&apos;s not even counting farmed fish, which is estimated
            to be around 10-13 per person.
          </p>
        </div>
      </div>

      <div className="sticky top-0 grid h-screen place-items-center">
        <div className="grid">
          <motion.div
            className="col-start-1 row-start-1 grid place-items-center"
            style={{ opacity: earthOpacity }}
          >
            <Image
              className="col-start-1 row-start-1"
              src={earthImage}
              alt=""
            />
          </motion.div>
          <motion.div
            className="col-start-1 row-start-1 grid place-items-center"
            style={{ opacity: humanOpacity }}
          >
            <Image
              className="col-start-1 row-start-1 w-44"
              src={humanImage}
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
              className="col-start-1 row-start-1 w-80 transform-cpu"
            >
              <Image
                className="h-full w-full"
                src={farmedAnimalsImage}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
