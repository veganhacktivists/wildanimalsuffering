import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="fixed left-0 z-10 flex w-full items-start p-10 text-gray-700">
      <div className="flex flex-1 items-center">
        <Navigation />
        <a
          className="ml-10 hidden underline md:block"
          href="https://katerodman.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-light">Illustrations by</span> Kate Rodman
        </a>
        {/* <SearchIcon size={23} /> */}
      </div>
    </header>
  );
}
