import { useContext } from "react";
import { cx } from "../../utils/html";
import { videos } from "./videos";
import { Context } from "../../state";
import { VerticalScrollbar } from "./vertical-scrollbar";
import { VideoPreview } from "./video-preview";
import { YoutubeVideo } from "./youtube-video";

const VideosYouMightLikeDesktop = ({
  className,
  playingVideoId,
  onReady,
  onPlay,
}) => {
  const [state] = useContext(Context);
  const { translations, locale } = state;
  const lang = translations[locale];

  return (
    <section
      id="videos-screen"
      data-name="Videos"
      className={cx("videos screen-content box-border !pb-32", className)}
    >
      <div className="full-screen flex-col w-full h-full">
        <div className="py-16 flex justify-center split-screen flex-col h-screen-50vh w-full text-center items-center">
          <h1>{lang["videos-you-might-like"]}</h1>
        </div>

        <div className="grid grid-cols-12 gap-8 mx-8 xl:mx-32 2xl:mx-96 h-full overflow-hidden p-2">
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
                className="h-4/5 p-5 rounded-t-xl"
                playBtnWrapperClassName="flex grow items-center justify-center mt-12"
                titleWrapperClassName="px-6 py-3"
                authorClassName="text-lg"
                titleClassName="text-xl uppercase"
                onClick={onPlay}
              />
            ) : null}

            <div className="rounded-b-xl bg-khaki text-black h-1/5 p-4 text-lg shadow-[0px_0px_3px_1px_rgba(255,255,255,1)]">
              {lang["video-caption"]}
            </div>
          </div>

          <VerticalScrollbar className="col-span-3">
            {videos.map((video) => (
              <VideoPreview
                key={video.id}
                video={video}
                className="p-3 rounded-xl"
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
};

export { VideosYouMightLikeDesktop };
