import { useEffect, useState } from "react";

/**
 * Minimal hash router. Routes:
 *   #/               → home
 *   #/projects       → all projects
 *   #/projects/:slug → single project page
 *   #/about          → about
 *   #/hire-me        → intake form
 */
export type Route =
  | { name: "home" }
  | { name: "projects" }
  | { name: "project"; slug: string }
  | { name: "about" }
  | { name: "hire" }
  | { name: "not-found" };

export const paths = {
  home: "#/",
  projects: "#/projects",
  project: (slug: string) => `#/projects/${slug}`,
  about: "#/about",
  hire: "#/hire-me",
};

export function parseRoute(hash: string): Route {
  const parts = hash
    .replace(/^#\/?/, "")
    .split("?")[0]
    .split("/")
    .filter(Boolean);

  if (parts.length === 0) return { name: "home" };
  switch (parts[0]) {
    case "projects":
    case "work":
      return parts.length > 1
        ? { name: "project", slug: parts[1] }
        : { name: "projects" };
    case "about":
      return { name: "about" };
    case "hire-me":
    case "hire":
    case "get-started":
      return { name: "hire" };
    case "home":
      return { name: "home" };
    default:
      return { name: "not-found" };
  }
}

export function navigate(path: string) {
  window.location.hash = path;
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    parseRoute(window.location.hash)
  );

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}
