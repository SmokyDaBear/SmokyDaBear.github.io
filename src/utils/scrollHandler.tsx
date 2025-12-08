import { useEffect, useState } from "react";

export function ScrollHandler(heightOffset: number = 0) {
  const [currentScrollY, setCurrentScrollY] = useState(
    window.scrollY - heightOffset
  );

  useEffect(() => {
    const updateScrollPosition = (position: number) => {
      setCurrentScrollY(position - heightOffset);
    };
    const handleScroll = () => updateScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heightOffset]);

  return currentScrollY;
}
