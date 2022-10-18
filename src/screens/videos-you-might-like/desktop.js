import { cx } from "../../utils/cx";
import { translations } from "../../utils/translations";
import { VerticalScrollbar } from "./vertical-scrollbar";
import { VideoPreview } from "./video-preview";
import { videos } from "./videos";
import { YoutubeVideo } from "./youtube-video";

// FIXME Remove translations for now
const lang = translations.en;

export function VideosYouMightLikeDesktop({
  className,
  playingVideoId,
  onReady,
  onPlay,
}) {
  return (
    <section
      id="videos-screen"
      data-name="Videos"
      className={cx("videos screen-content box-border !pb-32", className)}
    >
      <div className="full-screen h-full w-full flex-col">
        <div className="split-screen h-screen-50vh flex w-full flex-col items-center justify-center py-16 text-center">
          <h1>{lang["videos-you-might-like"]}</h1>
        </div>

        <div className="mx-8 grid h-full grid-cols-12 gap-8 overflow-hidden p-2 xl:mx-32 2xl:mx-96">
          <div className="col-span-9 h-full">
            {videos.map((video) => (
              <YoutubeVideo
                key={video.id}
                videoId={video.id}
                className={cx("h-4/5", video.id !== playingVideoId && "hidden")}
                onReady={onReady}
              />
            ))}

            {playingVideoId === null ? (
              <VideoPreview
                video={videos[0]}
                className="h-4/5 rounded-t-xl p-5"
                playBtnClassName=""
                playBtnWrapperClassName="flex grow items-center justify-center mt-12"
                titleWrapperClassName="px-6 py-3"
                authorClassName="text-lg"
                titleClassName="text-xl uppercase"
                onClick={onPlay}
              />
            ) : null}

            <div className="h-1/5 rounded-b-xl bg-khaki p-4 text-lg text-black shadow-[0px_0px_3px_1px_rgba(255,255,255,1)]">
              {lang["video-caption"]}
            </div>
          </div>

          <VerticalScrollbar className="col-span-3">
            {videos.map((video) => (
              <VideoPreview
                key={video.id}
                video={video}
                className="rounded-xl p-3"
                playBtnWrapperClassName="flex grow items-center mt-12 mb-4"
                playBtnClassName="w-12 h-12"
                titleWrapperClassName="px-2 py-1"
                authorClassName="text-xs"
                titleClassName="text-sm"
                onClick={onPlay}
              />
            ))}
          </VerticalScrollbar>
        </div>
      </div>
    </section>
  );
}
