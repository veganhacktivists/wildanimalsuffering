import YouTube from "react-youtube";

const YoutubeVideo = ({ videoId, onReady, className }) => {
  return (
    <YouTube
      videoId={videoId}
      className={className}
      iframeClassName="yt-iframe relative z-10 w-full h-full rounded-t-xl"
      opts={{
        height: null,
        width: null,
        playerVars: {
          origin: window.location.origin,
        },
      }}
      onReady={(event) => onReady(videoId, event)}
    />
  );
};

export { YoutubeVideo };
