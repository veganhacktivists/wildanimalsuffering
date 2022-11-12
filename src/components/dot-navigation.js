import { cx } from "../utils/cx";
import { DotIcon } from "./dot-icon";

export function DotNavigation({ className, items, activeItem, onNavigate }) {
  return (
    <div className={cx("flex justify-around", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="cursor-pointer"
          onClick={() => onNavigate(item)}
        >
          {item === activeItem ? (
            <DotIcon size={24} />
          ) : (
            <DotIcon size={24} className="opacity-50" />
          )}
        </span>
      ))}
    </div>
  );
}

export function scrollIntoView(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}
