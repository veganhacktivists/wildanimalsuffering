import { cx } from "../../utils/cx";

export function Resource({
  thumbnail,
  title,
  subtext = "",
  children,
  links,
  containThumbnail = false,
}) {
  return (
    <div className="flex w-9/10 flex-shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white bg-white/50 pb-4 lg:w-auto lg:flex-row lg:pb-0">
      <div className="grid place-items-center bg-resource bg-cover">
        <img
          src={`/images/other-resources/${thumbnail}`}
          alt=""
          className={cx(
            "aspect-square h-full w-full md:aspect-video lg:aspect-square lg:w-56",
            containThumbnail ? "object-contain lg:h-4/5" : "object-cover"
          )}
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 overflow-hidden p-4 lg:p-6">
        <h3 className="text-xl font-bold line-clamp-2 lg:text-2xl lg:line-clamp-none">
          {title}
        </h3>
        <span>{subtext}</span>

        <p className="line-clamp-3 lg:line-clamp-none">{children}</p>
      </div>
      <div className="flex flex-col gap-4 px-4 lg:w-56 lg:py-6 lg:pr-6">
        {links.map(([text, url], i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="block rounded-full bg-brown p-1 text-center text-xl font-medium uppercase text-white hover:bg-brown/80"
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}
