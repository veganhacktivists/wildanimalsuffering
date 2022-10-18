import { cx } from "../utils/cx";

export function NavigationLink({ id, name }) {
  return (
    <a
      href={`/#${id}`}
      className={cx(
        "relative bg-menu-back-light p-16 text-left text-7xl text-menu-front-light",
        "hover:bg-menu-back-light",
        "md:rounded-xl md:p-0 md:py-4 md:px-8 md:text-xl"
      )}
    >
      {name}
    </a>
  );
}
