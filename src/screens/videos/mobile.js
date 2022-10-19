import { useRef, useState } from "react";
import { cx } from "../../utils/cx";
import { DotNavigation } from "./dot-navigation";
import { VideoPreviewMobile } from "./video-preview-mobile";
import { videos } from "./videos";
import { YoutubeVideo } from "./youtube-video";

export function VideosMobile({ className, playingVideoId, onReady, onPlay }) {
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
      data-name="Videos"
      className={cx("videos screen-content box-border", className)}
    >
      <div className="full-screen h-full w-full flex-col">
        <div className="split-screen h-screen-20vh flex w-full flex-col items-center justify-center text-center">
          <h1>Videos you might like</h1>
        </div>

        <div className="h-2/3">
          <div className="flex h-full flex-row overflow-x-auto">
            {videos.map((video) => (
              <div
                key={video.id}
                className="h-full shrink-0 basis-full p-5"
                ref={(el) => (videosRef.current[video.id] = el)}
              >
                <div className="h-2/3">
                  <YoutubeVideo
                    videoId={video.id}
                    className={cx(
                      "h-full rounded-t-3xl",
                      video.id !== playingVideoId && "hidden"
                    )}
                    onReady={onReady}
                  />

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

                <div className="h-1/3 rounded-b-3xl bg-white p-8 text-[14px] text-black">
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
          className="mx-5 mt-20"
          items={videos.map((video) => video.id)}
          activeItem={visibleVideoId}
          onNavigate={(videoId) => scrollTo(videoId)}
        />
      </div>
    </section>
  );
}
