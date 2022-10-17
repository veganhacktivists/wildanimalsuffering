import { useContext, useState } from "react";
import { Context } from "../../state";
import { cx } from "../../utils/html";
import { VerticalScrollbar } from "./vertical-scrollbar";
import { VideoPreview } from "./video-preview";
import { YoutubeVideo } from "./youtube-video";
import { videos } from "./videos";

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
    document.querySelectorAll(".yt-iframe").forEach((iframe) => {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "stopVideo" }),
        "*"
      );
    });
  };

  const play = (videoId) => {
    setCurrentVideoId(videoId);
    stopAll();
    videoPlayers[videoId]?.playVideo();
  };

  const youtubeVideos = () => {
    return videos.map((video) => (
      <YoutubeVideo
        key={video.id}
        videoId={video.id}
        className={cx("h-4/5", video.id !== currentVideoId && "hidden")}
        onReady={onReady}
      />
    ));
  };

  const mainVideoPreview = () => {
    if (currentVideoId !== null) {
      return null;
    }

    return (
      <VideoPreview
        video={videos[0]}
        className="h-4/5 rounded-t-xl p-5"
        playBtnWrapperClassName="flex grow items-center justify-center mt-12"
        titleWrapperClassName="px-6 py-3"
        authorClassName="text-lg"
        titleClassName="text-xl uppercase"
        onClick={play}
      />
    );
  };

  const videoPreviews = () => {
    return videos.map((video) => (
      <VideoPreview
        key={video.id}
        video={video}
        className="rounded-xl p-3"
        playBtnWrapperClassName="flex grow items-center mt-12 mb-4"
        playBtnClassName="w-12 h-12"
        titleWrapperClassName="px-2 py-1"
        authorClassName="text-xs"
        titleClassName="text-sm"
        onClick={play}
      />
    ));
  };

  return (
    <section
      id="videos-screen"
      data-name="Videos"
      className="videos screen-content box-border !pb-32"
    >
      <div className="full-screen h-full w-full flex-col">
        <div className="split-screen h-screen-50vh flex w-full flex-col items-center justify-center py-16 text-center">
          <h1>{lang["videos-you-might-like"]}</h1>
        </div>

        <div className="mx-8 grid h-full grid-cols-12 gap-8 overflow-hidden p-2 xl:mx-32 2xl:mx-96">
          <div className="col-span-9 h-full">
            {youtubeVideos()}

            {mainVideoPreview()}

            <div className="h-1/5 rounded-b-xl bg-khaki p-4 text-lg text-black shadow-[0px_0px_3px_1px_rgba(255,255,255,1)]">
              {lang["video-caption"]}
            </div>
          </div>

          <VerticalScrollbar className="col-span-3">
            {videoPreviews()}
          </VerticalScrollbar>
        </div>
      </div>
    </section>
  );
};

export { VideosYouMightLike };
