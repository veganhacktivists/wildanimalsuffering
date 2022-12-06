import { useEffect } from "react";

export function useVisitorStats() {
  useEffect(() => {
    try {
      fetch("https://wildanimalsuffering-stats.vercel.app/visitor");
    } catch (err) {
      // Fail silently
    }
  }, []);
}
