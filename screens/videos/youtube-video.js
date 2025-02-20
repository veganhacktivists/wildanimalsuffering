import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PlayIcon } from "~/components/play-icon";

export function YoutubeVideo({ video }) {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
  }, [video.id]);

  return (
    <div className="flex w-full flex-1 transform-cpu flex-col overflow-hidden rounded-2xl bg-slate-900/50">
      <div className="relative aspect-square w-full md:aspect-video">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full rounded-t-xl"
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
            allow="autoplay"
          ></iframe>
        ) : (
          <button
            className="group absolute inset-0 flex h-full w-full flex-col"
            onClick={() => setPlaying(true)}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={video.thumbnails.medium}
              alt=""
            />
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-black to-black/0 opacity-60"></div>
            <div className="absolute top-1/2 -translate-y-1/2 rounded-full bg-slate-900/50 transition group-hover:scale-110 ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2">
              <PlayIcon size={80} />
            </div>
            <div className="relative mt-auto flex flex-col space-y-2 p-5 text-white ltr:text-left rtl:text-right">
              <div className="flex items-center gap-x-3">
                <span>{video.author}</span>
                <span className="text-sm">{video.duration}</span>
              </div>
              <h3 className="line-clamp-2 font-brand text-xl font-bold">
                {t(`videos.${video.id}.title`)}
              </h3>
            </div>
          </button>
        )}
      </div>
      <div className="flex-1 overflow-hidden overflow-ellipsis bg-white/80 p-5 lg:basis-40 xl:basis-34">
        <p className="text-gray-700 lg:line-clamp-5 xl:line-clamp-4">
          {t(`videos.${video.id}.description`)}
        </p>
      </div>
    </div>
  );
}
