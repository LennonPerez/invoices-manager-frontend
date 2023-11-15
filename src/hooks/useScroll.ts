/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollData, setScrollData] = useState<ScrollData>({
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

    const currentScrollY = window.scrollY;
    const isScrolling = currentScrollY !== lastScrollY;
    const isScrollingUpwards = currentScrollY < lastScrollY;
    const isScrollingDownwards = currentScrollY > lastScrollY;

    setScrollData({
      isScrolling,
      isScrollingUpwards,
      isScrollingDownwards,
    });
    setLastScrollY(currentScrollY);

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    setScrollTimeout(
      setTimeout(() => {
        setScrollData({
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
  isScrolling: boolean;
  isScrollingUpwards: boolean;
  isScrollingDownwards: boolean;
};

export default useScroll;
