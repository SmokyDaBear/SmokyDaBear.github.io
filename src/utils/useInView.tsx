import { useEffect, useState } from "react";

export const useInView = (
  ref: React.RefObject<HTMLElement | null>,
  rootMargin: number = 0
): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: `${rootMargin}px`,
      }
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref, rootMargin]);

  return isInView;
};
