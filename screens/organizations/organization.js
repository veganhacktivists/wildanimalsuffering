import { cx } from "~/utils/cx";

export function Organization({ name, children, imageUrl, links }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white/20 p-6 text-white lg:flex-row lg:items-start xl:gap-5">
      <img className="aspect-square lg:w-16 xl:w-24" src={imageUrl} alt="" />

      <div className="flex h-full flex-col items-center lg:items-start">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="mt-3 flex-1 text-sm leading-relaxed">{children}</div>

        <div className="mt-5 grid w-full grid-cols-2 items-end gap-4 font-medium capitalize text-black lg:block lg:space-x-4">
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
