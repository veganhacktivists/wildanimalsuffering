import { cx } from "../../utils/cx";

export function YoutubeVideoItem({ active = false, video, ...props }) {
  return (
    <button
      className={cx(
        "relative aspect-[2/1] w-full flex-shrink-0 overflow-hidden rounded-2xl border-2",
        active ? "border-white shadow-glow" : "border-white border-opacity-40"
      )}
      {...props}
    >
      <img
        className="absolute inset-0 h-full w-full rounded-xl object-cover"
        src={`/images/videos/thumbnail-${video.id}-small.jpeg`}
        alt=""
      />
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-black to-black/0 opacity-60"></div>
      <div className="absolute left-0 bottom-0 flex w-full flex-col items-start p-5 text-left text-white">
        <span className="text-xs">{video.author}</span>
        <span className="text-xs font-semibold lg:text-sm xl:text-base">
          {video.title}
        </span>
      </div>
    </button>
  );
}
