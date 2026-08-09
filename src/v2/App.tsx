import "./base.css";
import { useEffect } from "react";
import type { Route } from "./lib/router";
import { paths, useRoute } from "./lib/router";
import { useTheme } from "./lib/theme";
import { getProject } from "./data/projects";
import { siteName } from "./data/site";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";
import { About } from "./pages/About/About";
import { HireMe } from "./pages/HireMe/HireMe";

function routeTitle(route: Route): string {
  switch (route.name) {
    case "home":
      return siteName;
    case "projects":
      return `Projects — ${siteName}`;
    case "project": {
      const project = getProject(route.slug);
      return project ? `${project.title} — ${siteName}` : siteName;
    }
    case "about":
      return `About — ${siteName}`;
    case "hire":
      return `Hire Me — ${siteName}`;
    case "not-found":
      return `Page not found — ${siteName}`;
  }
}

function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <span className="kicker">404</span>
        <h1>Page not found</h1>
        <p className="lede">
          That page doesn't exist. Try the homepage or browse my projects.
        </p>
        <p>
          <a className="btn btn-primary" href={paths.home}>
            Back home
          </a>
        </p>
      </div>
    </section>
  );
}

function App() {
  const route = useRoute();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = routeTitle(route);
  }, [route]);

  return (
    <>
      <Header route={route} theme={theme} toggleTheme={toggleTheme} />
      <main>
        {route.name === "home" && <Home />}
        {route.name === "projects" && <Projects />}
        {route.name === "project" && <ProjectPage slug={route.slug} />}
        {route.name === "about" && <About />}
        {route.name === "hire" && <HireMe />}
        {route.name === "not-found" && <NotFound />}
      </main>
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
