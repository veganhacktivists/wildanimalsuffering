import Rainfall from "react-rain-animation";

import "react-rain-animation/lib/style.css";

// FIXME inline styles should be replaced with class.
export function RainfallEffect() {
  return (
    <Rainfall
      numDrops="75"
      style={{
        background:
          "linear-gradient(top, rgba(73, 108, 135, 1) 0%, rgba(220, 220, 220, 0.5) 100%)",
      }}
    />
  );
}
