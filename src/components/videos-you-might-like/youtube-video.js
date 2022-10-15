import YouTube from "react-youtube";

const YoutubeVideo = ({ videoId, onReady, className }) => {
  return (
    <YouTube
      videoId={videoId}
      className={className}
      iframeClassName="relative z-10 w-full h-full rounded-xl shadow-[0px_0px_3px_1px_rgba(255,255,255,1)]"
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
