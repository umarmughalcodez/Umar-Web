// hooks/useSmoothScroll.ts
import { useCallback } from "react";

const useSmoothScroll = () => {
  const scrollToElement = useCallback((id: string, offset = 0) => {
    const element = document.querySelector(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL without jumping
      window.history.pushState(null, "", id);
    }
  }, []);

  return scrollToElement;
};

export default useSmoothScroll;
