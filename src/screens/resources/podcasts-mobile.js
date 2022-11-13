import { podcasts } from "./resources";
import { DotNavigation, scrollIntoView } from "../../components/dot-navigation";
import { cx } from "../../utils/cx";
import { useRef, useState } from "react";

export function PodcastsMobile({ className }) {
  const [visiblePodcastKey, setVisiblePodcastKey] = useState(podcasts[0].key);
  const podcastsRef = useRef({});

  const scrollTo = (podcastKey) => {
    setVisiblePodcastKey(podcastKey);
    scrollIntoView(podcastsRef.current[podcastKey]);
  };

  return (
    <div className={cx("flex flex-col", className)}>
      <div className="flex grow gap-4 overflow-x-auto">
        {podcasts.map((podcast) => (
          <div
            key={podcast.key}
            className="flex shrink-0 grow basis-full flex-col rounded-xl bg-white/60"
            ref={(el) => (podcastsRef.current[podcast.key] = el)}
          >
            <img
              className="aspect-video shrink rounded-t-xl object-cover"
              src={`/images/other-resources/podcasts/knowing-animals.jpg`}
              alt=""
            />

            <div className="flex grow flex-col gap-4 p-4">
              <a
                href={podcast.url}
                target="_blank"
                className="text-lg font-bold"
                rel="noreferrer"
              >
                {podcast.title}
              </a>

              <p>{podcast.description}</p>

              <div className="mt-auto flex justify-center gap-4">
                <a
                  className="rounded-full bg-brown-lighter px-5 py-1 font-bold uppercase text-white"
                  href={podcast.listenUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Listen
                </a>

                <a
                  className="rounded-full bg-brown px-5 py-1 font-bold uppercase text-white"
                  href={podcast.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>

                <a
                  className="rounded-full bg-brown px-5 py-1 font-bold uppercase text-white"
                  href={podcast.donateUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DotNavigation
        className="mx-5 mt-5"
        items={podcasts.map((podcast) => podcast.key)}
        activeItem={visiblePodcastKey}
        onNavigate={(podcastKey) => scrollTo(podcastKey)}
      />
    </div>
  );
}
