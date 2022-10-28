import { cx } from "../../utils/cx";
import { DotIcon } from "../../components/dot-icon";

export function DotNavigation({ className, items, activeItem, onNavigate }) {
  return (
    <div className={cx("flex justify-between", className)}>
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
