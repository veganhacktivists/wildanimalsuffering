import { cx } from "~/utils/cx";

export function Organization({ name, children, imageUrl, links }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/20 p-6 text-white lg:flex-row lg:items-start xl:gap-5">
			<img className="h-24 w-24 object-contain md:h-24 md:w-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24" src={imageUrl} alt="" />

      <div className="flex h-full flex-col items-center lg:items-start">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="mt-3 text-sm leading-relaxed">{children}</div>

        <div className="mt-5 grid w-full grid-cols-2 items-end gap-3 font-medium capitalize text-black md:flex">
          {links.map(([text, url], i) => (
            <a
              key={text}
              href={url}
              target="_blank"
              rel="noreferrer"
              className={cx(
                "rounded-xl px-5 py-1 text-center",
                i % 3 === 0 && "bg-primary",
                i % 3 === 1 && "bg-primary-light",
                i % 3 === 2 && "col-span-2 bg-primary-lighter",
              )}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
