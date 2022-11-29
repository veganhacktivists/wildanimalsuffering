import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="absolute left-0 flex w-full items-start p-10 text-gray md:text-white">
      <Navigation />
      <span className="ml-8 mt-1 hidden font-light md:block">
        Illustrations by{" "}
        <a
          className="font-normal underline"
          href="https://katerodman.com/"
          target="_blank"
          rel="noreferrer"
        >
          Kate Rodman
        </a>
      </span>
    </header>
  );
}
