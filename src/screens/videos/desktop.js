import { cx } from "../../utils/cx";
import { VerticalScrollbar } from "./vertical-scrollbar";
import { VideoPreview } from "./video-preview";
import { videos } from "./videos";
import { YoutubeVideo } from "./youtube-video";

export function VideosDesktop({
  className,
  playingVideoId,
  onPlayerReady,
  onPlay,
}) {
  return (
    <section
      id="videos"
      className={cx("videos relative min-h-screen flex-col py-24", className)}
    >
      <div className="relative mx-auto flex w-full max-w-7xl grow flex-col space-y-10 px-8">
        <h2 className="text-center font-brand text-4xl text-white">
          Videos you might like
        </h2>

        <div className="mx-8 grid grow grid-cols-12 gap-8 overflow-hidden p-2 xl:mx-32 2xl:mx-96">
          <div className="col-span-8 flex flex-col">
            {playingVideoId !== null ? (
              <YoutubeVideo
                videoId={playingVideoId}
                className="grow"
                onReady={onPlayerReady}
              />
            ) : (
              <VideoPreview
                video={videos[0]}
                className="grow rounded-t-xl p-5"
                playBtnWrapperClassName="flex grow items-center justify-center"
                titleWrapperClassName="px-6 py-3"
                authorClassName="text-lg"
                titleClassName="text-xl uppercase"
                onClick={onPlay}
              />
            )}

            <div className="rounded-b-xl bg-khaki p-4 text-lg shadow-[0px_0px_3px_1px_rgba(255,255,255,1)]">
              Wild animal suffering is about harms to the wellbeing of animals
              living in the wild. This is frequently confused with the ways
              species, populations of animals, or ecosystems can be affected.
              These are entities, not individuals who can feel and suffer. In
              this video, you&apos;ll hear about the meanings of &quot;wild
              animal suffering&quot; and related terms.
            </div>
          </div>

          <VerticalScrollbar className="col-span-4">
            {videos.map((video) => (
              <VideoPreview
                key={video.id}
                video={video}
                className="rounded-xl p-3"
                playBtnWrapperClassName="flex grow items-center mt-12 mb-4"
                playBtnClassName="w-12 h-12"
                titleWrapperClassName="px-2 py-1"
                authorClassName="text-sm"
                titleClassName="text-sm"
                onClick={onPlay}
              />
            ))}
          </VerticalScrollbar>
        </div>
      </div>
    </section>
  );
}
