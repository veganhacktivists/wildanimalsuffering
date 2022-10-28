import { useRef, useState } from "react";
import { cx } from "../../utils/cx";
import { DotNavigation } from "./dot-navigation";
import { VideoPreviewMobile } from "./video-preview-mobile";
import { videos } from "./videos";
import { YoutubeVideo } from "./youtube-video";

export function VideosMobile({
  className,
  playingVideoId,
  onPlayerReady,
  onPlay,
  onNavigate,
}) {
  const [visibleVideoId, setVisibleVideoId] = useState(videos[0].id);
  const videosRef = useRef({});

  const scrollTo = (videoId) => {
    setVisibleVideoId(videoId);

    videosRef.current[videoId].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <section
      id="videos"
      className={cx("videos screen-content box-border py-24", className)}
    >
      <div className="relative mx-auto flex w-full max-w-7xl grow flex-col px-10">
        <h2 className="text-center font-brand text-4xl text-white">
          Videos you might like
        </h2>

        <div className="grow">
          <div className="scrollbar-hide flex flex-row items-stretch overflow-x-auto">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex shrink-0 basis-full flex-col p-5"
                ref={(el) => (videosRef.current[video.id] = el)}
              >
                <div className="grow">
                  {playingVideoId === video.id ? (
                    <YoutubeVideo
                      videoId={video.id}
                      className={cx(
                        "h-full rounded-t-3xl",
                        video.id !== playingVideoId && "hidden"
                      )}
                      onReady={onPlayerReady}
                    />
                  ) : null}

                  <VideoPreviewMobile
                    video={video}
                    className={cx(
                      "h-full rounded-t-3xl",
                      video.id === playingVideoId && "hidden"
                    )}
                    playBtnClassName=""
                    playBtnWrapperClassName="flex grow items-center justify-center mt-12"
                    titleWrapperClassName="px-6 py-3"
                    titleClassName="text-[16px]"
                    authorClassName="px-6 py-3 text-[16px]"
                    durationClassName="px-6 py-3 text-[16px]"
                    onClick={onPlay}
                  />
                </div>

                <div className="rounded-b-3xl bg-white p-8 text-[14px]">
                  Wild animal suffering is about harms to the wellbeing of
                  animals living in the wild. This is frequently confused with
                  the ways species, populations of animals, or ecosystems can be
                  affected. These are entities, not individuals who can feel and
                  suffer.
                </div>
              </div>
            ))}
          </div>
        </div>

        <DotNavigation
          className="mx-5 mb-5"
          items={videos.map((video) => video.id)}
          activeItem={visibleVideoId}
          onNavigate={(videoId) => {
            scrollTo(videoId);
            onNavigate(videoId);
          }}
        />
      </div>
    </section>
  );
}
