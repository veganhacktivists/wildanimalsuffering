import ICONS from "../../utils/icons";
import { cx } from "../../utils/html";

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
      className={cx(
        "relative z-10 flex cursor-pointer flex-col bg-cover bg-center shadow-[0px_0px_3px_1px_rgba(255,255,255,1)]",
        className
      )}
      style={{
        backgroundImage: `url('https://img.youtube.com/vi/${video.id}/0.jpg')`,
      }}
      onClick={() => onClick(video.id)}
    >
      <div className={playBtnWrapperClassName}>
        <div className="rounded-full bg-slate-900/50">
          <img src={ICONS.VIDEO_PLAY} alt="Play" className={playBtnClassName} />
        </div>
      </div>

      <div
        className={cx(
          "self-start rounded-xl bg-slate-900/80",
          titleWrapperClassName
        )}
      >
        <div className={cx("mt-auto", authorClassName)}>
          {video.author} - {video.duration}
        </div>

        <div className={cx("font-bold", titleClassName)}>{video.title}</div>
      </div>
    </div>
  );
};

export { VideoPreview };
