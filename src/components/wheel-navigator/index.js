import {
  canGoDown,
  canGoLeft,
  canGoRight,
  canGoUp,
} from "../../state/navigation";
import { Context } from "../../state";
import { useContext, useEffect } from "react";

const WheelNavigator = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const onWheel = (event) => {
      if (event.deltaY > 0) {
        if (canGoDown(state)) {
          dispatch({ type: "NEXT_SCREEN" });
        } else if (canGoRight(state)) {
          dispatch({ type: "NEXT_ANIMAL_STAT" });
        }
      } else {
        if (canGoUp(state)) {
          dispatch({ type: "PREV_SCREEN" });
        } else if (canGoLeft(state)) {
          dispatch({ type: "PREV_ANIMAL_STAT" });
        }
      }
    };

    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  });
};

export { WheelNavigator };
