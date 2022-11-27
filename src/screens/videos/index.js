import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BackgroundEffect } from "../../components/background-effect";
import { YoutubeVideo } from "./youtube-video";
import { YoutubeVideoItem } from "./youtube-video-item";

function buildThresholdList(numSteps) {
  return Array.from({ length: numSteps }).map((_, idx) => (1 / numSteps) * idx);
}

export const videos = [
  {
    id: "XjCp6bUp__M",
    author: "Humane Hancock",
    title: "The Vegan Blind Spot",
    description:
      "In this 20 minute video, a logical case is presented for reducing the suffering of wild animals. Like farmed animals, wild animals are also in need of our help, but this is an issue that many animal advocates haven’t given much consideration.",
    duration: "19:21",
  },
  {
    id: "1Dp6gObE9eA",
    author: "Animal Ethics",
    title: "Wild Animal Suffering: An Introduction",
    description:
      "Suffering often outweighs happiness in the lives of wild animals as a result of malnutrition, disease, human impact, and more. It is possible to reduce wild animal suffering by rescuing and treating sick or injured animals. Humans intervene in nature to reduce our own suffering, and wild animals are owed the same moral consideration.",
    duration: "10:10",
  },
  {
    id: "m9pCbH7BtcI",
    author: "Humane Hancock",
    title: "Vegans And Meat-Eaters Both Make This Mistake",
    description:
      "Both vegans and meat-eaters often engage in the appeal to nature fallacy. Our idea of what is natural or unnatural is arbitrary, yet an appeal to nature is often used to justify things we would otherwise view as immoral or unjust, including wild animal suffering.",
    duration: "16:14",
  },
  {
    id: "n3H4UtR_eak",
    author: "Wild Animal Initiative",
    title: "Wild Animal Welfare - Brown University Effective Altruism Seminar",
    description:
      "Welfare is the net value of an individual’s subjective experience, which may also be called happiness or wellbeing. Wild animal welfare may be quantified by considering scale (the number of wild animals) and intensity. The Wild Animal Initiative is currently focused on building capacity to advance wild animal welfare.",
    duration: "33:38",
  },
  {
    id: "g-7cLXyMp8E",
    author: "Humane Hancock",
    title: "The Truth About Yellowstone",
    description:
      "The reintroduction of wolves to Yellowstone National Park has been celebrated by many, but did this intervention make the world a better place?",
    duration: "16:59",
  },
  {
    id: "VPzvWKOzWjY",
    author: "Centre for Effective Altruism",
    title: "How evolution can help us understand wild animal welfare",
    description:
      "In this 22 minute video, Michelle Graham of the Wild Animal Initiative explains basic concepts of evolutionary biology and how these concepts shape our understanding of wild animal welfare. She fields questions and objections and calls for more research on the subject.",
    duration: "22:56",
  },
  {
    id: "hvDlYnCejHk",
    author: "Humane Hancock",
    title: "How a Vegan World Might Contain MORE Suffering",
    description:
      "Humane Hancock discusses the ethical implications of rewilding, replicating ecosystems on other planets, and simulations. Rewilding as practiced today often increases wild animal suffering while space colonization and simulations have potential to increase suffering without due moral consideration.",
    duration: "17:13",
  },
  {
    id: "AzFwOnYPV9U",
    author: "Animal Ethics",
    title: "Animal Athics and Environmental Ethics",
    description:
      "Which entities deserve moral consideration? Ecocentrism values the preservation of ecosystems as a whole without regard for the wellbeing of individuals in them, whereas biocentrism values the wellbeing of all living beings. Arguments both for and against ecocentrism and biocentrism are presented.",
    duration: "9:24",
  },
  {
    id: "cp1qpzXe2Yw",
    author: "Humane Hancock",
    title: "How to SOLVE Wild Animal Suffering",
    description:
      "In this half hour video, Humane Hancock discusses potential solutions to wild animal suffering. Topics include vaccinations against disease, fertility control to prevent starvation, and genetic engineering. He presents several examples of each method which have already been employed as well as objections to such methods.",
    duration: "29:25",
  },
  {
    id: "1dl_eHonR0w",
    author: "Animal Ethics",
    title: "Ways to help wild animals in need",
    description:
      "The most common causes of wild animal suffering are starvation, disease, injuries and lack of shelter. Several methods to help wild animals are presented and examples are given, including treatment and prevention of disease, treatment of injuries, caring for orphaned animals and providing suitable shelter and other resources.",
    duration: "11:07",
  },
  {
    id: "_TaFwHa5ZRs",
    author: "Humane Hancock",
    title: "Cosmic Skeptic on Wild Animal Suffering",
    description:
      "Humane Hancock sits down with fellow Youtuber Cosmic Skeptic for a long-form conversation on the issue of wild animal suffering. If we have a moral obligation to be vegan, do we also have a moral obligation to help wild animals? Their conversation touches on philosophy, environmentalism and biodiversity, and human overpopulation.",
    duration: "1:12:45",
  },
  {
    id: "K7E6IB9rw6c",
    author: "LSE Philosophy",
    title: "A beginner's guide to wild animal suffering",
    description:
      "Oscar Horta, professor of philosophy and one of the founders of Animal Ethics, speaks to the London School of Economics on the topic of wild animal suffering. He discusses current efforts to help wild animals, why it matters, and highlights new areas of research into welfare biology. Raising awareness is a key way to advance the movement.",
    duration: "21.29",
  },
  {
    id: "Cv9ftiEvSpA",
    author: "Humane Hancock",
    title: "Why I Stopped Idolizing David Attenborough",
    description:
      "In this 21 minute video, Humane Hancock looks critically at David Attenborough’s work and philosophy. The ecosystems which Attenborough calls “perfect” are in fact changing all the time, and his documentaries contribute to our skewed perception of nature and the lives of wild animals.",
    duration: "21:23",
  },
];

export function Videos() {
  const ref = useRef(null);
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const snowfallOpacity = useMotionValue(0);

  // Fade snowfall in and out based on intersection ratio.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([{ rootBounds, boundingClientRect, intersectionRatio }]) => {
        const ratio = 1 - rootBounds.height / boundingClientRect.height;

        snowfallOpacity.set(
          (intersectionRatio - 0.5) * 2 + intersectionRatio * ratio
        );
      },
      { threshold: buildThresholdList(100) }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="videos"
      className="relative flex min-h-screen items-center bg-sky bg-cover py-12 lg:py-24"
    >
      <img
        className="not-sr-only absolute left-0 top-0 hidden lg:block"
        src="/images/videos/iceberg.png"
        alt=""
      />

      <motion.div style={{ opacity: snowfallOpacity }} className="z-10">
        <BackgroundEffect type="videos-screen" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl grow flex-col space-y-10">
        <h2 className="px-8 text-center font-brand text-3xl text-white lg:text-4xl">
          Videos You Might Like
        </h2>

        {/* Mobile only */}
        <div className="scrollbar-none flex snap-x snap-mandatory scroll-px-8 gap-8 overflow-x-scroll px-8 lg:hidden">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex w-9/10 flex-shrink-0 snap-center flex-col"
            >
              <YoutubeVideo video={video} />
            </div>
          ))}
        </div>
        {/* Desktop only */}
        <div className="hidden grid-cols-4 gap-5 px-8 lg:grid">
          <div className="col-span-3">
            <YoutubeVideo video={activeVideo} />
          </div>
          <div className="scrollbar-custom relative overflow-y-scroll">
            <div className="absolute inset-0 flex flex-col gap-4 px-1 pr-5">
              {videos.map((video) => (
                <YoutubeVideoItem
                  video={video}
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  active={video.id === activeVideo.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        className="not-sr-only pointer-events-none absolute right-0 bottom-0 z-10 hidden max-h-96 w-[20vw] lg:block"
        src="/images/videos/penguins.png"
        alt=""
      />
    </section>
  );
}
