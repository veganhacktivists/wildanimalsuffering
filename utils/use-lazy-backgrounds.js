import { useEffect } from "react";

// Marks each section once it comes within a screen of the viewport, which is
// what the `near:` variant waits for before applying a background image.
export function useLazyBackgrounds(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.dataset.near = "";
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "100% 0px" },
    );

    for (const section of ref.current.children) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [ref]);
}
