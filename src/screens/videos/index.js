import { useState } from "react";
import { VideosDesktop } from "./desktop";
import { VideosMobile } from "./mobile";
import useIsMobile from "../../hooks/is-mobile";
import "./videos.css";

export function Videos() {
  const isMobile = useIsMobile();

  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [activePlayer, setActivePlayer] = useState(null);

  const play = (event) => {
    setActivePlayer(event.target);

    // For some reason, without this, it only works the first time (at least on FF)
    setTimeout(() => {
      event.target.playVideo();
    }, 500);
  };

  const stop = () => {
    activePlayer?.stopVideo();
  };

  return isMobile ? (
    <VideosMobile
      className="md:hidden"
      playingVideoId={playingVideoId}
      onPlay={(videoId) => setPlayingVideoId(videoId)}
      onPlayerReady={play}
      onNavigate={stop}
    />
  ) : (
    <VideosDesktop
      className="hidden md:flex"
      playingVideoId={playingVideoId}
      onPlay={(videoId) => setPlayingVideoId(videoId)}
      onPlayerReady={play}
    />
  );
}
