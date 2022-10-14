import { useContext, useState } from "react";
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

  const onReady = function (videoId, event) {
    setVideoPlayers({ ...videoPlayers, [videoId]: event.target });
  };

  const stopAll = function () {
    for (const videoPlayer of Object.values(videoPlayers)) {
      videoPlayer.stopVideo();
    }
  };

  const play = function (videoId) {
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

            <div className="col-span-3 h-full space-y-6 overflow-y-scroll p-2 py-[3px] pr-12">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { VideosYouMightLike };
