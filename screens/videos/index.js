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

import mediumThumbnail1dlEHonR0w from "./images/thumbnail-1dl_eHonR0w-medium.jpeg";
import smallThumbnail1dlEHonR0w from "./images/thumbnail-1dl_eHonR0w-small.jpeg";
import mediumThumbnail1Dp6gObE9eA from "./images/thumbnail-1Dp6gObE9eA-medium.jpeg";
import smallThumbnail1Dp6gObE9eA from "./images/thumbnail-1Dp6gObE9eA-small.jpeg";
import mediumThumbnailAzFwOnYpv9U from "./images/thumbnail-AzFwOnYPV9U-medium.jpeg";
import smallThumbnailAzFwOnYpv9U from "./images/thumbnail-AzFwOnYPV9U-small.jpeg";
import mediumThumbnailCp1qpzXe2Yw from "./images/thumbnail-cp1qpzXe2Yw-medium.jpeg";
import smallThumbnailCp1qpzXe2Yw from "./images/thumbnail-cp1qpzXe2Yw-small.jpeg";
import mediumThumbnailCv9ftiEvSpA from "./images/thumbnail-Cv9ftiEvSpA-medium.jpeg";
import smallThumbnailCv9ftiEvSpA from "./images/thumbnail-Cv9ftiEvSpA-small.jpeg";
import mediumThumbnailG_7cLXyMp8E from "./images/thumbnail-g-7cLXyMp8E-medium.jpeg";
import smallThumbnailG_7cLXyMp8E from "./images/thumbnail-g-7cLXyMp8E-small.jpeg";
import mediumThumbnailHvDlYnCejHk from "./images/thumbnail-hvDlYnCejHk-medium.jpeg";
import smallThumbnailHvDlYnCejHk from "./images/thumbnail-hvDlYnCejHk-small.jpeg";
import mediumThumbnailK7E6Ib9rw6c from "./images/thumbnail-K7E6IB9rw6c-medium.jpeg";
import smallThumbnailK7E6Ib9rw6c from "./images/thumbnail-K7E6IB9rw6c-small.jpeg";
import mediumThumbnailM9pCbH7BtcI from "./images/thumbnail-m9pCbH7BtcI-medium.jpeg";
import smallThumbnailM9pCbH7BtcI from "./images/thumbnail-m9pCbH7BtcI-small.jpeg";
import mediumThumbnailN3H4UtREak from "./images/thumbnail-n3H4UtR_eak-medium.jpeg";
import smallThumbnailN3H4UtREak from "./images/thumbnail-n3H4UtR_eak-small.jpeg";
import mediumThumbnailVPzvWkOzWjY from "./images/thumbnail-VPzvWKOzWjY-medium.jpeg";
import smallThumbnailVPzvWkOzWjY from "./images/thumbnail-VPzvWKOzWjY-small.jpeg";
import mediumThumbnailXjCp6bUpM from "./images/thumbnail-XjCp6bUp__M-medium.jpeg";
import smallThumbnailXjCp6bUpM from "./images/thumbnail-XjCp6bUp__M-small.jpeg";
import mediumThumbnailTaFwHa5ZRs from "./images/thumbnail-_TaFwHa5ZRs-medium.jpeg";
import smallThumbnailTaFwHa5ZRs from "./images/thumbnail-_TaFwHa5ZRs-small.jpeg";

export const videos = [
  {
    id: "XjCp6bUp__M",
    thumbnails: {
      small: smallThumbnailXjCp6bUpM.src,
      medium: mediumThumbnailXjCp6bUpM.src,
    },
    author: "Humane Hancock",
    title: "The Vegan Blind Spot",
    description:
      "In this 20 minute video, a logical case is presented for reducing the suffering of wild animals. Like farmed animals, wild animals are also in need of our help, but this is an issue that many animal advocates haven’t given much consideration.",
    duration: "19:21",
  },
  {
    id: "1Dp6gObE9eA",
    thumbnails: {
      small: smallThumbnail1Dp6gObE9eA.src,
      medium: mediumThumbnail1Dp6gObE9eA.src,
    },
    author: "Animal Ethics",
    title: "Wild Animal Suffering: An Introduction",
    description:
      "Suffering often outweighs happiness in the lives of wild animals as a result of malnutrition, disease, human impact, and more. It is possible to reduce wild animal suffering by rescuing and treating sick or injured animals. Humans intervene in nature to reduce our own suffering, and wild animals are owed the same moral consideration.",
    duration: "10:10",
  },
  {
    id: "m9pCbH7BtcI",
    thumbnails: {
      small: smallThumbnailM9pCbH7BtcI.src,
      medium: mediumThumbnailM9pCbH7BtcI.src,
    },
    author: "Humane Hancock",
    title: "Vegans And Meat-Eaters Both Make This Mistake",
    description:
      "Both vegans and meat-eaters often engage in the appeal to nature fallacy. Our idea of what is natural or unnatural is arbitrary, yet an appeal to nature is often used to justify things we would otherwise view as immoral or unjust, including wild animal suffering.",
    duration: "16:14",
  },
  {
    id: "n3H4UtR_eak",
    thumbnails: {
      small: smallThumbnailN3H4UtREak.src,
      medium: mediumThumbnailN3H4UtREak.src,
    },
    author: "Wild Animal Initiative",
    title: "Wild Animal Welfare - Brown University Effective Altruism Seminar",
    description:
      "Welfare is the net value of an individual's subjective experience, which may also be called happiness or wellbeing. Wild animal welfare may be quantified by considering scale (the number of wild animals) and intensity. The Wild Animal Initiative is currently focused on building capacity to advance wild animal welfare.",
    duration: "33:38",
  },
  {
    id: "g-7cLXyMp8E",
    thumbnails: {
      small: smallThumbnailG_7cLXyMp8E.src,
      medium: mediumThumbnailG_7cLXyMp8E.src,
    },
    author: "Humane Hancock",
    title: "The Truth About Yellowstone",
    description:
      "The reintroduction of wolves to Yellowstone National Park has been celebrated by many, but did this intervention make the world a better place?",
    duration: "16:59",
  },
  {
    id: "VPzvWKOzWjY",
    thumbnails: {
      small: smallThumbnailVPzvWkOzWjY.src,
      medium: mediumThumbnailVPzvWkOzWjY.src,
    },
    author: "Centre for Effective Altruism",
    title: "How evolution can help us understand wild animal welfare",
    description:
      "In this 22 minute video, Mal Graham of the Wild Animal Initiative explains basic concepts of evolutionary biology and how these concepts shape our understanding of wild animal welfare. They field questions and objections and call for more research on the subject.",
    duration: "22:56",
  },
  {
    id: "hvDlYnCejHk",
    thumbnails: {
      small: smallThumbnailHvDlYnCejHk.src,
      medium: mediumThumbnailHvDlYnCejHk.src,
    },
    author: "Humane Hancock",
    title: "How a Vegan World Might Contain MORE Suffering",
    description:
      "Humane Hancock discusses the ethical implications of rewilding, replicating ecosystems on other planets, and simulations. Rewilding as practiced today often increases wild animal suffering while space colonization and simulations have potential to increase suffering without due moral consideration.",
    duration: "17:13",
  },
  {
    id: "AzFwOnYPV9U",
    thumbnails: {
      small: smallThumbnailAzFwOnYpv9U.src,
      medium: mediumThumbnailAzFwOnYpv9U.src,
    },
    author: "Animal Ethics",
    title: "Animal Athics and Environmental Ethics",
    description:
      "Which entities deserve moral consideration? Ecocentrism values the preservation of ecosystems as a whole without regard for the wellbeing of individuals in them, whereas biocentrism values the wellbeing of all living beings. Arguments both for and against ecocentrism and biocentrism are presented.",
    duration: "9:24",
  },
  {
    id: "cp1qpzXe2Yw",
    thumbnails: {
      small: smallThumbnailCp1qpzXe2Yw.src,
      medium: mediumThumbnailCp1qpzXe2Yw.src,
    },
    author: "Humane Hancock",
    title: "How to SOLVE Wild Animal Suffering",
    description:
      "In this half hour video, Humane Hancock discusses potential solutions to wild animal suffering. Topics include vaccinations against disease, fertility control to prevent starvation, and genetic engineering. He presents several examples of each method which have already been employed as well as objections to such methods.",
    duration: "29:25",
  },
  {
    id: "1dl_eHonR0w",
    thumbnails: {
      small: smallThumbnail1dlEHonR0w.src,
      medium: mediumThumbnail1dlEHonR0w.src,
    },
    author: "Animal Ethics",
    title: "Ways to help wild animals in need",
    description:
      "The most common causes of wild animal suffering are starvation, disease, injuries and lack of shelter. Several methods to help wild animals are presented and examples are given, including treatment and prevention of disease, treatment of injuries, caring for orphaned animals and providing suitable shelter and other resources.",
    duration: "11:07",
  },
  {
    id: "_TaFwHa5ZRs",
    thumbnails: {
      small: smallThumbnailTaFwHa5ZRs.src,
      medium: mediumThumbnailTaFwHa5ZRs.src,
    },
    author: "Humane Hancock",
    title: "Cosmic Skeptic on Wild Animal Suffering",
    description:
      "Humane Hancock sits down with fellow Youtuber Cosmic Skeptic for a long-form conversation on the issue of wild animal suffering. If we have a moral obligation to be vegan, do we also have a moral obligation to help wild animals? Their conversation touches on philosophy, environmentalism and biodiversity, and human overpopulation.",
    duration: "1:12:45",
  },
  {
    id: "K7E6IB9rw6c",
    thumbnails: {
      small: smallThumbnailK7E6Ib9rw6c.src,
      medium: mediumThumbnailK7E6Ib9rw6c.src,
    },
    author: "LSE Philosophy",
    title: "A beginner's guide to wild animal suffering",
    description:
      "Oscar Horta, professor of philosophy and one of the founders of Animal Ethics, speaks to the London School of Economics on the topic of wild animal suffering. He discusses current efforts to help wild animals, why it matters, and highlights new areas of research into welfare biology. Raising awareness is a key way to advance the movement.",
    duration: "21.29",
  },
  {
    id: "Cv9ftiEvSpA",
    thumbnails: {
      small: smallThumbnailCv9ftiEvSpA.src,
      medium: mediumThumbnailCv9ftiEvSpA.src,
    },
    author: "Humane Hancock",
    title: "Why I Stopped Idolizing David Attenborough",
    description:
      "In this 21 minute video, Humane Hancock looks critically at David Attenborough's work and philosophy. The ecosystems which Attenborough calls “perfect” are in fact changing all the time, and his documentaries contribute to our skewed perception of nature and the lives of wild animals.",
    duration: "21:23",
  },
];

export function Videos() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const { screenRef, effectOpacity } = useBackgroundEffect();

  return (
    <section
      ref={screenRef}
      id="videos"
      className="relative flex min-h-screen items-center bg-sky bg-cover py-12 lg:py-24"
    >
      <img
        className="not-sr-only absolute left-0 top-0 hidden w-full max-w-md lg:block"
        src={icebergImage.src}
        alt=""
      />

      <motion.div style={{ opacity: effectOpacity }} className="z-10">
        <BackgroundEffect type="snow" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl grow flex-col space-y-10">
        <h2 className="px-8 text-center font-brand text-3xl text-white lg:text-4xl">
          Videos You Might Like
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
        className="not-sr-only pointer-events-none absolute right-0 bottom-0 z-10 hidden max-h-96 w-[20vw] lg:block"
        src={penguinsImage.src}
        alt=""
      />
    </section>
  );
}
