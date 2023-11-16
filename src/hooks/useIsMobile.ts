import { useEffect, useState } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const viewportWidth =
        window.innerWidth ??
        document.documentElement.clientWidth ??
        document.body.clientWidth;
      setIsMobile(viewportWidth < 768);
    };

    if (typeof window === "undefined") return;

    checkIsMobile();

    const debouncedCheckIsMobile = debounce(checkIsMobile, 200);

    window.addEventListener("resize", debouncedCheckIsMobile);

    return () => {
      window.removeEventListener("resize", debouncedCheckIsMobile);
    };
  }, []);

  const debounce = (func: () => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    };
  };

  return isMobile;
};

export default useIsMobile;
