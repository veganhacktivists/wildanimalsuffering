import { useState } from "react";
import { translations } from "../../utils/translations";
import { VideosYouMightLikeDesktop } from "./desktop";
import { VideosYouMightLikeMobile } from "./mobile";
import "./videos-you-might-like.css";

// FIXME Remove translations for now
const lang = translations.en;

export function VideosYouMightLike() {
  const [videoPlayers, setVideoPlayers] = useState({});
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const onReady = (videoId, event) => {
    setVideoPlayers({ ...videoPlayers, [videoId]: event.target });
  };

  const stopAll = () => {
    document.querySelectorAll(".yt-iframe").forEach((iframe) => {
      // @ts-ignore
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "stopVideo" }),
        "*"
      );
    });
  };

  const play = (videoId) => {
    setPlayingVideoId(videoId);
    stopAll();
    videoPlayers[videoId]?.playVideo();
  };

  return (
    <>
      <VideosYouMightLikeDesktop
        className="hidden md:block"
        playingVideoId={playingVideoId}
        onReady={onReady}
        onPlay={play}
      />
      <VideosYouMightLikeMobile
        className="md:hidden"
        playingVideoId={playingVideoId}
        onReady={onReady}
        onPlay={play}
      />
    </>
  );
}
