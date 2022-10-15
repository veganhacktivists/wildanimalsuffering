import { useContext, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { Context } from "../../state";
import { YoutubeVideo } from "./youtube-video";
import { VideoPreview } from "./video-preview";
import classNames from "classnames";
import videos from "./videos";

import "./videos-you-might-like.css";

const VideosYouMightLike = () => {
  const [state] = useContext(Context);
  const { translations, locale } = state;
  const lang = translations[locale];

  const [videoPlayers, setVideoPlayers] = useState({});
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const onReady = (videoId, event) => {
    setVideoPlayers({ ...videoPlayers, [videoId]: event.target });
  };

  const stopAll = () => {
    for (const videoPlayer of Object.values(videoPlayers)) {
      videoPlayer.stopVideo();
    }
  };

  const play = (videoId) => {
    setCurrentVideoId(videoId);
    stopAll();
    videoPlayers[videoId].playVideo();
  };

  return (
    <>
      <section
        id="videos-screen"
        data-name="Videos"
        className="videos screen-content box-border !pb-32"
      >
        <div className="full-screen flex-col w-full h-full">
          <div className="py-16 flex justify-center split-screen flex-col h-screen-50vh w-full text-center items-center">
            <h1>{lang["videos-you-might-like"]}</h1>
          </div>

          <div className="grid grid-cols-12 gap-8 mx-8 xl:mx-32 2xl:mx-96 h-full overflow-hidden p-2">
            <div className="col-span-9 h-full">
              {videos.map((video) => {
                return (
                  <YoutubeVideo
                    key={video.id}
                    videoId={video.id}
                    className={classNames("h-[80%]", {
                      hidden: video.id !== currentVideoId,
                    })}
                    onReady={onReady}
                  />
                );
              })}

              {currentVideoId === null && (
                <VideoPreview
                  key={videos[0].id}
                  video={videos[0]}
                  className="h-[80%] p-5 rounded-t-xl"
                  playBtnWrapperClassName="flex grow items-center justify-center mt-12"
                  titleWrapperClassName="px-6 py-3"
                  authorClassName="text-lg"
                  titleClassName="text-xl uppercase"
                  onClick={play}
                />
              )}

              <div className="rounded-b-xl bg-khaki text-black h-[20%] p-4 text-lg shadow-[0px_0px_3px_1px_rgba(255,255,255,1)]">
                {lang["video-caption"]}
              </div>
            </div>

            <Scrollbar
              className="col-span-3"
              noScrollX="true"
              contentProps={{
                renderer: (props) => {
                  const { elementRef, ...restProps } = props;
                  return (
                    <div
                      {...restProps}
                      ref={elementRef}
                      className="!space-y-6 !p-2"
                    />
                  );
                },
              }}
              scrollerProps={{
                renderer: (props) => {
                  const { elementRef, ...restProps } = props;
                  return (
                    <div {...restProps} ref={elementRef} className="!pr-7" />
                  );
                },
              }}
              trackYProps={{
                renderer: (props) => {
                  const { elementRef, ...restProps } = props;
                  return (
                    <div
                      {...restProps}
                      ref={elementRef}
                      className="!bg-white !w-[2px] !overflow-visible"
                    />
                  );
                },
              }}
              thumbYProps={{
                renderer: (props) => {
                  const { elementRef, ...restProps } = props;
                  return (
                    <div
                      {...restProps}
                      ref={elementRef}
                      className="!bg-white !ml-[-4px] !mr-[-4px] !w-auto"
                    />
                  );
                },
              }}
            >
              {videos.map((video) => {
                return (
                  <VideoPreview
                    key={video.id}
                    video={video}
                    className="h-[31%] p-3 rounded-xl"
                    playBtnWrapperClassName="flex grow items-center mt-12"
                    playBtnClassName="w-12 h-12"
                    titleWrapperClassName="px-2 py-1"
                    authorClassName="text-xs"
                    titleClassName="text-sm"
                    onClick={play}
                  />
                );
              })}
            </Scrollbar>
          </div>
        </div>
      </section>
    </>
  );
};

export { VideosYouMightLike };
