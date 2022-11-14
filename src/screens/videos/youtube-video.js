import { useEffect, useState } from "react";
import { PlayIcon } from "../../components/play-icon";

export function YoutubeVideo({ video }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
  }, [video.id]);

  return (
    <div className="flex w-full transform-cpu flex-col overflow-hidden rounded-2xl bg-slate-900/50">
      <div className="relative aspect-square w-full md:aspect-video">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full rounded-t-xl"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            frameBorder={0}
            allowFullScreen
          ></iframe>
        ) : (
          <button
            className="group absolute inset-0 flex h-full w-full flex-col"
            onClick={() => setPlaying(true)}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={`/images/videos/thumbnail-${video.id}-medium.jpeg`}
              alt=""
            />
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-black to-black/0 opacity-60"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900/50 transition group-hover:scale-110">
              <PlayIcon size={80} />
            </div>
            <div className="relative mt-auto flex flex-col space-y-2 p-5 text-left text-white">
              <div className="space-x-3">
                <span>{video.author}</span>
                <span className="text-sm">{video.duration}</span>
              </div>
              <h3 className="font-brand text-xl font-bold">{video.title}</h3>
            </div>
          </button>
        )}
      </div>
      <p className="bg-white/80 p-5 text-gray-700">
        Wild animal suffering is about harms to the wellbeing of animals living
        in the wild. This is frequently confused with the ways species,
        populations of animals, or ecosystems can be affected. These are
        entities, not individuals who can feel and suffer.
      </p>
    </div>
  );
}
