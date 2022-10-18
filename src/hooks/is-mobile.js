import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

const isWindowInMobileWidth = () => window.innerWidth < 768;

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(isWindowInMobileWidth());

  useEffect(() => {
    const handleResize = debounce(
      () => setIsMobile(isWindowInMobileWidth()),
      100
    );

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
