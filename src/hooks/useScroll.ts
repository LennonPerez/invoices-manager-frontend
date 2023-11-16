/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollData, setScrollData] = useState<ScrollData>({
    currentY: 0,
    currentX: 0,
    isScrolling: false,
    isScrollingUpwards: false,
    isScrollingDownwards: false,
  });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const controlNavbar = () => {
    if (typeof window === "undefined") return;

    const currentY = window.scrollY;
    const currentX = window.scrollX;
    const isScrolling = currentY !== lastScrollY;
    const isScrollingUpwards = currentY < lastScrollY;
    const isScrollingDownwards = currentY > lastScrollY;

    setScrollData({
      currentY,
      currentX,
      isScrolling,
      isScrollingUpwards,
      isScrollingDownwards,
    });
    setLastScrollY(currentY);

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    setScrollTimeout(
      setTimeout(() => {
        setScrollData({
          currentY: 0,
          currentX: 0,
          isScrolling: false,
          isScrollingUpwards: false,
          isScrollingDownwards: false,
        });
      }, 200),
    );
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, scrollTimeout]);

  return scrollData;
};

export type ScrollData = {
  currentY: number;
  currentX: number;
  isScrolling: boolean;
  isScrollingUpwards: boolean;
  isScrollingDownwards: boolean;
};

export default useScroll;
