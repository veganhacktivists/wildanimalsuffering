import { Navigation } from "./navigation";

export function Header() {
  return (
    <>
      {/* Mobile */}
      <div className="fixed top-0 left-0 flex w-full shrink-0 items-center justify-between p-10 md:hidden">
        <Navigation />
        {/* <SearchIcon size={23} /> */}
      </div>

      {/* Desktop */}
      <div className="fixed top-0 left-0 hidden shrink-0 items-center p-20 md:flex">
        <Navigation />
        <a
          className="ml-16 text-2xl text-gray-700 underline"
          href="https://katerodman.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="font-light">Illustrations by</span> Kate Rodman
        </a>
      </div>
    </>
  );
}
