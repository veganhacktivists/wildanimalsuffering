import ICONS from "../../utils/icons";
import { cx } from "../../utils/html";

const VideoPreviewMobile = ({
  video,
  onClick,
  className,
  playBtnWrapperClassName,
  playBtnClassName,
  titleWrapperClassName,
  authorClassName,
  durationClassName,
  titleClassName,
}) => {
  return (
    <div
      className={cx(
        "flex flex-col bg-center bg-cover cursor-pointer relative z-10 p-8",
        className
      )}
      style={{
        backgroundImage: `url('https://img.youtube.com/vi/${video.id}/0.jpg')`,
      }}
      onClick={() => onClick(video.id)}
    >
      <div className="flex flex-row justify-between">
        <div
          className={cx(
            "font-bold bg-slate-900/80 rounded-xl",
            authorClassName
          )}
        >
          {video.author}
        </div>
        <div
          className={cx(
            "text-right bg-slate-900/80 rounded-xl",
            durationClassName
          )}
        >
          {video.duration}
        </div>
      </div>

      <div className={playBtnWrapperClassName}>
        <div className="bg-slate-900/50 rounded-full">
          <img src={ICONS.VIDEO_PLAY} alt="Play" className={playBtnClassName} />
        </div>
      </div>

      <div
        className={cx(
          "self-start bg-slate-900/80 rounded-xl",
          titleWrapperClassName
        )}
      >
        <div className={cx("font-bold", titleClassName)}>{video.title}</div>
      </div>
    </div>
  );
};

export { VideoPreviewMobile };
