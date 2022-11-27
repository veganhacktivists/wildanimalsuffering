import { cx } from "../utils/cx";

export function NavigationLink({ id, name }) {
  return (
    <a
      href={`/#${id}`}
      className={cx(
        "relative mb-2 bg-menu-back-light text-left text-menu-front-light",
        "hover:bg-menu-back-light",
        "rounded-xl p-0 py-2 px-8"
      )}
    >
      {name}
    </a>
  );
}
