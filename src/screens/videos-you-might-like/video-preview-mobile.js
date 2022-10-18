import { PlayIcon } from "../../components/play-icon";
import { cx } from "../../utils/cx";

export function VideoPreviewMobile({
  video,
  onClick,
  className,
  playBtnWrapperClassName,
  playBtnClassName,
  titleWrapperClassName,
  authorClassName,
  durationClassName,
  titleClassName,
}) {
  return (
    <div
      className={cx(
        "relative z-10 flex cursor-pointer flex-col bg-cover bg-center p-8",
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
            "rounded-xl bg-slate-900/80 font-bold",
            authorClassName
          )}
        >
          {video.author}
        </div>
        <div
          className={cx(
            "rounded-xl bg-slate-900/80 text-right",
            durationClassName
          )}
        >
          {video.duration}
        </div>
      </div>

      <div className={playBtnWrapperClassName}>
        <div className="rounded-full bg-slate-900/50">
          <PlayIcon className={playBtnClassName} />
        </div>
      </div>

      <div
        className={cx(
          "self-start rounded-xl bg-slate-900/80",
          titleWrapperClassName
        )}
      >
        <div className={cx("font-bold", titleClassName)}>{video.title}</div>
      </div>
    </div>
  );
}
