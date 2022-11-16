import { links } from "../utils/constants";

export function Header() {
  return (
    <header className="absolute left-0 z-10 flex w-full items-start p-10 text-gray">
      <div className="flex flex-1 items-center">
        <span className="hidden font-light md:block">
          Illustrations by{" "}
          <a
            className="font-normal underline"
            href={links.kateRodman}
            target="_blank"
            rel="noreferrer"
          >
            Kate Rodman
          </a>
        </span>
        {/* <SearchIcon size={23} /> */}
      </div>
    </header>
  );
}
