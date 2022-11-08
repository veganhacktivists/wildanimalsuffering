import { VerticalScrollbar } from "../videos/vertical-scrollbar";
import { podcasts } from "./resources";

export function PodcastsDesktop({ className }) {
  return (
    <VerticalScrollbar
      className={className}
      contentClassName="grid grid-cols-2 gap-x-6 gap-y-8 !pr-8"
    >
      {podcasts.map((podcast) => (
        <div
          key={podcast.key}
          className="grid grid-cols-12 gap-4 rounded-xl bg-white/60 p-4"
        >
          <img
            className="col-span-4 aspect-square rounded-xl"
            src={`/images/other-resources/podcasts/knowing-animals.jpg`}
            alt=""
          />

          <div className="col-span-8 flex flex-col gap-4">
            <a
              href={podcast.url}
              target="_blank"
              className="text-xl font-bold"
              rel="noreferrer"
            >
              {podcast.title}
            </a>

            <p>{podcast.description}</p>

            <div className="mt-auto flex gap-2">
              <a
                className="rounded-full bg-brown-lighter px-5 py-1 font-bold uppercase text-white"
                href={podcast.listenUrl}
                target="_blank"
                rel="noreferrer"
              >
                Listen now
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
    </VerticalScrollbar>
  );
}
