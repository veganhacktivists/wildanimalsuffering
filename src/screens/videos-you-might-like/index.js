import { useState } from "react";
import { VideosYouMightLikeDesktop } from "./desktop";
import { VideosYouMightLikeMobile } from "./mobile";
import "./videos-you-might-like.css";
import useIsMobile from "../../hooks/is-mobile";

export function VideosYouMightLike() {
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
    <VideosYouMightLikeMobile
      className="md:hidden"
      playingVideoId={playingVideoId}
      onPlay={(videoId) => setPlayingVideoId(videoId)}
      onPlayerReady={play}
      onNavigate={stop}
    />
  ) : (
    <VideosYouMightLikeDesktop
      className="hidden md:block"
      playingVideoId={playingVideoId}
      onPlay={(videoId) => setPlayingVideoId(videoId)}
      onPlayerReady={play}
    />
  );
}
