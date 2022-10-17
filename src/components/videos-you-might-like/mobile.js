import { useContext, useRef, useState } from "react";
import { cx } from "../../utils/html";
import { videos } from "./videos";
import { Context } from "../../state";
import { VideoPreviewMobile } from "./video-preview-mobile";
import { YoutubeVideo } from "./youtube-video";
import { DotNavigation } from "../dot-navigation";

const VideosYouMightLikeMobile = ({
  className,
  playingVideoId,
  onReady,
  onPlay,
}) => {
  const [state] = useContext(Context);
  const { translations, locale } = state;
  const lang = translations[locale];
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
      id="videos-screen"
      data-name="Videos"
      className={cx("videos screen-content box-border", className)}
    >
      <div className="full-screen flex-col w-full h-full">
        <div className="flex justify-center split-screen flex-col h-screen-20vh w-full text-center items-center">
          <h1>{lang["videos-you-might-like"]}</h1>
        </div>

        <div className="h-2/3">
          <div className="flex flex-row h-full overflow-x-auto">
            {videos.map((video) => (
              <div
                key={video.id}
                className="basis-full shrink-0 h-full p-5"
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
                    playBtnWrapperClassName="flex grow items-center justify-center mt-12"
                    titleWrapperClassName="px-6 py-3"
                    titleClassName="text-[16px]"
                    authorClassName="px-6 py-3 text-[16px]"
                    durationClassName="px-6 py-3 text-[16px]"
                    onClick={onPlay}
                  />
                </div>

                <div className="h-1/3 rounded-b-3xl bg-white text-black p-8 text-[14px]">
                  {lang["video-caption-mobile"]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <DotNavigation
          className="mt-20 mx-5"
          items={videos.map((video) => video.id)}
          activeItem={visibleVideoId}
          onNavigate={(videoId) => scrollTo(videoId)}
        />
      </div>
    </section>
  );
};

export { VideosYouMightLikeMobile };
