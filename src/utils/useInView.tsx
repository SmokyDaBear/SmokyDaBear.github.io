import { useEffect, useState, useRef, useMemo } from "react";

export const useInView = (
  ref: React.RefObject<HTMLElement | null>,
  rootMargin: number = 0
): boolean => {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const rafRef = useRef<number | null>(null);

  // Memoize observer options to prevent unnecessary recreations
  const observerOptions = useMemo(
    () => ({
      rootMargin: `${rootMargin}px`,
    }),
    [rootMargin]
  );

  useEffect(() => {
    const element = ref.current;

    // Early return if element doesn't exist
    if (!element) return;

    // Cleanup previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create observer with memoized callback using requestAnimationFrame
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Cancel any pending RAF before scheduling a new one
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
        }

        // Schedule state update on next animation frame
        rafRef.current = requestAnimationFrame(() => {
          setIsInView((prev) => {
            // Only update state if value actually changed
            if (prev !== entry.isIntersecting) {
              return entry.isIntersecting;
            }
            return prev;
          });
          rafRef.current = null;
        });
      },
      observerOptions
    );

    observerRef.current.observe(element);

    // Cleanup function
    return () => {
      // Cancel any pending animation frame
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [ref, observerOptions]);

  return isInView;
};
