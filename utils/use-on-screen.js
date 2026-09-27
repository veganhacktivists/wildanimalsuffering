import { useEffect, useState } from "react";

export function useOnScreen(ref) {
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setOnScreen(entry.isIntersecting),
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return onScreen;
}
