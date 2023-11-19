/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useScroll = (elementId?: string) => {
  const [scrollData, setScrollData] = useState<ScrollData>({
    document: window.document.documentElement,
    currentY: 0,
    currentX: 0,
    clientHeight: 0,
    scrollHeight: 0,
    isScrolling: false,
    isScrollingUpwards: false,
    isScrollingDownwards: false,
  });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const controlNavbar = () => {
    const targetElement = elementId
      ? document.getElementById(elementId)
      : window;

    if (!targetElement) return;

    const doc = elementId
      ? (targetElement as HTMLElement)
      : (targetElement as Window).document.documentElement;

    const currentY = elementId
      ? (targetElement as HTMLElement).scrollTop
      : (targetElement as Window).scrollY;

    const currentX = elementId
      ? (targetElement as HTMLElement).scrollLeft
      : (targetElement as Window).scrollX;

    const clientHeight = (
      elementId
        ? (targetElement as HTMLElement)
        : (targetElement as Window).document.documentElement
    ).clientHeight;

    const scrollHeight = (
      elementId
        ? (targetElement as HTMLElement)
        : (targetElement as Window).document.documentElement
    ).scrollHeight;

    const isScrolling = currentY !== lastScrollY;
    const isScrollingUpwards = currentY < lastScrollY;
    const isScrollingDownwards = currentY > lastScrollY;

    setScrollData({
      document: doc,
      currentY,
      currentX,
      clientHeight,
      scrollHeight,
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
          document: window.document.documentElement,
          currentY: 0,
          currentX: 0,
          clientHeight: 0,
          scrollHeight: 0,
          isScrolling: false,
          isScrollingUpwards: false,
          isScrollingDownwards: false,
        });
      }, 200),
    );
  };

  useEffect(() => {
    const targetElement = elementId
      ? document.getElementById(elementId)
      : window;

    if (!targetElement) return;

    targetElement.addEventListener("scroll", controlNavbar);

    return () => {
      targetElement.removeEventListener("scroll", controlNavbar);
    };
  }, [elementId, lastScrollY, scrollTimeout]);

  return scrollData;
};

export interface ScrollData {
  document: HTMLElement;
  currentY: number;
  currentX: number;
  clientHeight: number;
  scrollHeight: number;
  isScrolling: boolean;
  isScrollingUpwards: boolean;
  isScrollingDownwards: boolean;
}

export default useScroll;
