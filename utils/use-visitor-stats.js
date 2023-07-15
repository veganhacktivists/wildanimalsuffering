import { useEffect, useState } from "react";

export function useVisitorStats() {
  const [visitors, setVisitors] = useState(0);

  async function loadStats() {
    try {
      const res = await fetch(
        "https://wildanimalsuffering-stats.vercel.app/visitor",
      );

      if (res.ok) {
        const data = await res.json();
        setVisitors(data.visitors);
      }
    } catch (err) {
      // Fail silently
    }
  }

  // Fetch stats on page load.
  useEffect(() => {
    loadStats();
  }, []);

  return visitors;
}
