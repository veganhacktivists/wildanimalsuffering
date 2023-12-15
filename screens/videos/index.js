import { motion } from "framer-motion";
import { useState } from "react";
import {
  BackgroundEffect,
  useBackgroundEffect,
} from "~/components/background-effect";
import { YoutubeVideo } from "./youtube-video";
import { YoutubeVideoItem } from "./youtube-video-item";

import icebergImage from "./images/iceberg.png";
import penguinsImage from "./images/penguins.png";

import { useTranslation } from "react-i18next";
import mediumThumbnailWaysToHelp from "./images/thumbnail-ways-to-help-medium.jpeg";
import smallThumbnailWaysToHelp from "./images/thumbnail-ways-to-help-small.jpeg";
import mediumThumbnailWasIntroduction from "./images/thumbnail-was-introduction-medium.jpeg";
import smallThumbnailWasIntroduction from "./images/thumbnail-was-introduction-small.jpeg";
import mediumThumbnailEnvironmentalEthics from "./images/thumbnail-environmental-ethics-medium.jpeg";
import smallThumbnailEnvironmentalEthics from "./images/thumbnail-environmental-ethics-small.jpeg";
import mediumThumbnailWasSolution from "./images/thumbnail-was-solution-medium.jpeg";
import smallThumbnailWasSolution from "./images/thumbnail-was-solution-small.jpeg";
import mediumThumbnailDavidAttenborough from "./images/thumbnail-david-attenborough-medium.jpeg";
import smallThumbnailDavidAttenborough from "./images/thumbnail-david-attenborough-small.jpeg";
import mediumThumbnailYellowstone from "./images/thumbnail-yellowstone-medium.jpeg";
import smallThumbnailYellowstone from "./images/thumbnail-yellowstone-small.jpeg";
import mediumThumbnailVeganWorld from "./images/thumbnail-vegan-world-medium.jpeg";
import smallThumbnailVeganWorld from "./images/thumbnail-vegan-world-small.jpeg";
import mediumThumbnailBeginnersGuide from "./images/thumbnail-beginners-guide-medium.jpeg";
import smallThumbnailBeginnersGuide from "./images/thumbnail-beginners-guide-small.jpeg";
import mediumThumbnailVeganMistake from "./images/thumbnail-vegan-mistake-medium.jpeg";
import smallThumbnailVeganMistake from "./images/thumbnail-vegan-mistake-small.jpeg";
import mediumThumbnailBrownUniversity from "./images/thumbnail-brown-university-medium.jpeg";
import smallThumbnailBrownUniversity from "./images/thumbnail-brown-university-small.jpeg";
import mediumThumbnailEvolution from "./images/thumbnail-evolution-medium.jpeg";
import smallThumbnailEvolution from "./images/thumbnail-evolution-small.jpeg";
import mediumThumbnailVeganBlindSpot from "./images/thumbnail-vegan-blind-spot-medium.jpeg";
import smallThumbnailVeganBlindSpot from "./images/thumbnail-vegan-blind-spot-small.jpeg";
import mediumThumbnailCosmicSkeptic from "./images/thumbnail-cosmic-skeptic-medium.jpeg";
import smallThumbnailCosmicSkeptic from "./images/thumbnail-cosmic-skeptic-small.jpeg";

export const videos = [
  {
    id: "vegan_blind_spot",
    videoId: "XjCp6bUp__M",
    thumbnails: {
      small: smallThumbnailVeganBlindSpot.src,
      medium: mediumThumbnailVeganBlindSpot.src,
    },
    author: "Humane Hancock",
    duration: "19:21",
  },
  {
    id: "was_introduction",
    videoId: "1Dp6gObE9eA",
    thumbnails: {
      small: smallThumbnailWasIntroduction.src,
      medium: mediumThumbnailWasIntroduction.src,
    },
    author: "Animal Ethics",
    duration: "10:10",
  },
  {
    id: "vegan_mistake",
    videoId: "m9pCbH7BtcI",
    thumbnails: {
      small: smallThumbnailVeganMistake.src,
      medium: mediumThumbnailVeganMistake.src,
    },
    author: "Humane Hancock",
    duration: "16:14",
  },
  {
    id: "brown_university",
    videoId: "n3H4UtR_eak",
    thumbnails: {
      small: smallThumbnailBrownUniversity.src,
      medium: mediumThumbnailBrownUniversity.src,
    },
    author: "Wild Animal Initiative",
    duration: "33:38",
  },
  {
    id: "yellowstone",
    videoId: "g-7cLXyMp8E",
    thumbnails: {
      small: smallThumbnailYellowstone.src,
      medium: mediumThumbnailYellowstone.src,
    },
    author: "Humane Hancock",
    duration: "16:59",
  },
  {
    id: "evolution",
    videoId: "VPzvWKOzWjY",
    thumbnails: {
      small: smallThumbnailEvolution.src,
      medium: mediumThumbnailEvolution.src,
    },
    author: "Centre for Effective Altruism",
    duration: "22:56",
  },
  {
    id: "vegan_world",
    videoId: "hvDlYnCejHk",
    thumbnails: {
      small: smallThumbnailVeganWorld.src,
      medium: mediumThumbnailVeganWorld.src,
    },
    author: "Humane Hancock",
    duration: "17:13",
  },
  {
    id: "environmental_ethics",
    videoId: "AzFwOnYPV9U",
    thumbnails: {
      small: smallThumbnailEnvironmentalEthics.src,
      medium: mediumThumbnailEnvironmentalEthics.src,
    },
    author: "Animal Ethics",
    duration: "9:24",
  },
  {
    id: "was_solution",
    videoId: "cp1qpzXe2Yw",
    thumbnails: {
      small: smallThumbnailWasSolution.src,
      medium: mediumThumbnailWasSolution.src,
    },
    author: "Humane Hancock",
    duration: "29:25",
  },
  {
    id: "ways_to_help",
    videoId: "1dl_eHonR0w",
    thumbnails: {
      small: smallThumbnailWaysToHelp.src,
      medium: mediumThumbnailWaysToHelp.src,
    },
    author: "Animal Ethics",
    duration: "11:07",
  },
  {
    id: "cosmic_skeptic",
    videoId: "_TaFwHa5ZRs",
    thumbnails: {
      small: smallThumbnailCosmicSkeptic.src,
      medium: mediumThumbnailCosmicSkeptic.src,
    },
    author: "Humane Hancock",
    duration: "1:12:45",
  },
  {
    id: "beginners_guide",
    videoId: "K7E6IB9rw6c",
    thumbnails: {
      small: smallThumbnailBeginnersGuide.src,
      medium: mediumThumbnailBeginnersGuide.src,
    },
    author: "LSE Philosophy",
    duration: "21.29",
  },
  {
    id: "david_attenborough",
    videoId: "Cv9ftiEvSpA",
    thumbnails: {
      small: smallThumbnailDavidAttenborough.src,
      medium: mediumThumbnailDavidAttenborough.src,
    },
    author: "Humane Hancock",
    duration: "21:23",
  },
];

export function Videos() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const { screenRef, effectOpacity } = useBackgroundEffect();

  return (
    <section
      ref={screenRef}
      id={t("videos.id")}
      className="relative flex min-h-screen items-center bg-sky bg-cover py-12 lg:py-24"
    >
      <img
        className="not-sr-only absolute top-0 hidden w-full max-w-md ltr:left-0 rtl:right-0 lg:block"
        src={icebergImage.src}
        alt=""
      />

      <motion.div style={{ opacity: effectOpacity }} className="z-10">
        <BackgroundEffect type="snow" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl grow flex-col space-y-10">
        <h2 className="px-8 text-center font-brand text-3xl text-white lg:text-4xl">
          {t("videos.heading")}
        </h2>

        {/* Mobile only */}
        <div className="flex snap-x snap-mandatory scroll-px-8 gap-8 overflow-x-scroll px-8 scrollbar-none lg:hidden">
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
        className="not-sr-only pointer-events-none absolute bottom-0 right-0 z-10 hidden max-h-96 w-[20vw] lg:block"
        src={penguinsImage.src}
        alt=""
      />
    </section>
  );
}
