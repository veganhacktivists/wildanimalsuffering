import { cx } from "../utils/cx";

export function NavigationLink({ id, name }) {
  return (
    <a
      href={`/#${id}`}
      className={cx(
        "relative space-y-2 bg-menu-back-light text-left text-menu-front-light",
        "hover:bg-menu-back-light",
        "rounded-xl py-2 px-8"
      )}
    >
      {name}
    </a>
  );
}
