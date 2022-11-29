import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="absolute left-0 z-20 flex w-full items-start p-10 text-gray md:text-white">
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

      <a
        className="absolute top-0 right-0 z-20 m-10 hidden w-20 opacity-75 hover:opacity-100 md:block"
        href="https://veganhacktivists.org"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/logo-vh.svg" alt="Vegan Hacktivists Logo" />
      </a>
    </header>
  );
}
