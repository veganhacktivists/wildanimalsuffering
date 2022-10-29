import YouTube from "react-youtube";

export function YoutubeVideo({ videoId, onReady, className }) {
  return (
    <YouTube
      videoId={videoId}
      className={className}
      iframeClassName="yt-iframe relative z-30 w-full h-full rounded-t-xl"
      opts={{
        height: null,
        width: null,
        playerVars: {
          origin: window.location.origin,
        },
      }}
      onReady={onReady}
    />
  );
}
