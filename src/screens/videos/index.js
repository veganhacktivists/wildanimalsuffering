import { useState } from "react";
import { VideosDesktop } from "./desktop";
import { VideosMobile } from "./mobile";
import "./videos.css";

export function Videos() {
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
      <VideosDesktop
        className="hidden md:block"
        playingVideoId={playingVideoId}
        onReady={onReady}
        onPlay={play}
      />
      <VideosMobile
        className="md:hidden"
        playingVideoId={playingVideoId}
        onReady={onReady}
        onPlay={play}
      />
    </>
  );
}
