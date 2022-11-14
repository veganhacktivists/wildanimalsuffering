import { motion, useMotionValue, useTransform } from "framer-motion";
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
    duration: "19:21",
  },
  {
    id: "1Dp6gObE9eA",
    author: "Animal Ethics",
    title: "Wild animal suffering: an introduction",
    duration: "10:10",
  },
  {
    id: "m9pCbH7BtcI",
    author: "Humane Hancock",
    title: "Vegans And Meat-Eaters Both Make This Mistake",
    duration: "16:14",
  },
  {
    id: "n3H4UtR_eak",
    author: "Wild Animal Initiative",
    title: "Wild Animal Welfare",
    duration: "33:38",
  },
  {
    id: "g-7cLXyMp8E",
    author: "Humane Hancock",
    title: "The Truth About Yellowstone",
    duration: "16:59",
  },
  {
    id: "VPzvWKOzWjY",
    author: "Centre for Effective Altruism",
    title: "How evolution can help us understand wild animal welfare",
    duration: "22:56",
  },
  {
    id: "hvDlYnCejHk",
    author: "Humane Hancock",
    title: "How a Vegan World Might Contain MORE Suffering",
    duration: "17:13",
  },
  {
    id: "AzFwOnYPV9U",
    author: "Animal Ethics",
    title: "Animal ethics and environmental ethics",
    duration: "9:24",
  },
  {
    id: "cp1qpzXe2Yw",
    author: "Humane Hancock",
    title: "How to SOLVE Wild Animal Suffering",
    duration: "29:25",
  },
  {
    id: "1dl_eHonR0w",
    author: "Animal Ethics",
    title: "Various ways to help wild animals in need",
    duration: "11:07",
  },
  {
    id: "_TaFwHa5ZRs",
    author: "Humane Hancock",
    title: "Cosmic Skeptic on Wild Animal Suffering",
    duration: "1:12:45",
  },
  {
    id: "K7E6IB9rw6c",
    author: "LSE Philosophy",
    title: "A beginner's guide to wild animal suffering",
    duration: "21.29",
  },
  {
    id: "Cv9ftiEvSpA",
    author: "Humane Hancock",
    title: "Why I Stopped Idolizing David Attenborough",
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

        snowfallOpacity.set(intersectionRatio + intersectionRatio * ratio);
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
      className="relative flex min-h-screen items-center bg-sky bg-cover lg:py-24"
    >
      <img
        className="not-sr-only pointer-events-none absolute right-0 bottom-0 z-10 hidden lg:block"
        src="/images/videos/penguins.png"
        alt=""
      />
      <img
        className="not-sr-only absolute left-0 top-0 hidden lg:block"
        src="/images/videos/iceberg.png"
        alt=""
      />

      <motion.div style={{ opacity: snowfallOpacity }}>
        <BackgroundEffect type="videos-screen" />
      </motion.div>

      <div className="relative mx-auto flex w-full max-w-7xl grow flex-col space-y-10">
        <h2 className="px-8 text-center font-brand text-3xl text-white lg:text-4xl">
          Videos you might like
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
    </section>
  );
}
