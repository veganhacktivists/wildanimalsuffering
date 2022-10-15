import classNames from "classnames";
import ICONS from "../../utils/icons";

const VideoPreview = ({
  video,
  onClick,
  className,
  playBtnWrapperClassName,
  playBtnClassName,
  titleWrapperClassName,
  authorClassName,
  titleClassName,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col bg-center bg-cover shadow-[0px_0px_3px_1px_rgba(255,255,255,1)] cursor-pointer relative z-10",
        className
      )}
      style={{
        backgroundImage: `url('https://img.youtube.com/vi/${video.id}/0.jpg')`,
      }}
      onClick={() => onClick(video.id)}
    >
      <div className={playBtnWrapperClassName}>
        <div className="bg-slate-900/50 rounded-full">
          <img src={ICONS.VIDEO_PLAY} alt="Play" className={playBtnClassName} />
        </div>
      </div>

      <div
        className={classNames(
          "self-start bg-slate-900/80 rounded-xl",
          titleWrapperClassName
        )}
      >
        <div className={classNames("mt-auto", authorClassName)}>
          {video.author} - {video.duration}
        </div>
        <div className={classNames("font-bold", titleClassName)}>
          {video.title}
        </div>
      </div>
    </div>
  );
};

export { VideoPreview };
