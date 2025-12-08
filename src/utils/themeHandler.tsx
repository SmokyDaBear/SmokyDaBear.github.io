export function useTheme() {
  const root = document.documentElement;

  const setTheme = (theme: "light" | "dark") => {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    return;
  };

  const toggleTheme = () => {
    const currentTheme = root.getAttribute("data-theme");
    if (currentTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const getTheme = () => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (storedTheme) {
      root.setAttribute("data-theme", storedTheme);
      return storedTheme;
    } else if (prefersDark) {
      root.setAttribute("data-theme", "dark");
      return "dark";
    } else {
      root.setAttribute("data-theme", "light");
      return "light";
    }
  };

  return { setTheme, getTheme, toggleTheme };
}
