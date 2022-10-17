import { cx } from "../../utils/html";
import dotInactiveIcon from "../../../assets/icons/dot-inactive.svg";
import dotActiveIcon from "../../../assets/icons/dot-active.svg";

const DotNavigation = ({ className, items, activeItem, onNavigate }) => {
  return (
    <div className={cx("flex justify-between", className)}>
      {items.map((item, key) => (
        <span key={item} className="cursor-pointer">
          {item === activeItem ? (
            <img src={dotActiveIcon} alt={key + 1} />
          ) : (
            <img
              src={dotInactiveIcon}
              alt={key + 1}
              onClick={() => onNavigate(item)}
            />
          )}
        </span>
      ))}
    </div>
  );
};

export { DotNavigation };
