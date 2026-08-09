import { useState } from "react";

import { projects } from "../../../old/data";
import {
  chevronDown,
  chevronUp,
  gridIcon,
  listIcon,
} from "../../icons/icons";
import { ProjectCard } from "../../Components/ProjectCard";

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isGridView, setIsGridView] = useState(!(window.innerWidth >= 768));
  return <section id="projects" className="projects-section">
    <h2 className="section-title">Featured Projects</h2>
    <p className="section-subtitle">
      A selection of my recent work showcasing my skills and expertise.
    </p>

    <div className="center-flex">
      <button
        className={"toggle-btn " + (isGridView ? "current" : "")}
        onClick={() => setIsGridView(true)}
      >
        Grid
        {gridIcon()}
      </button>
      <button
        className={"toggle-btn " + (isGridView ? "" : "current")}
        onClick={() => setIsGridView(false)}
      >
        List {listIcon()}
      </button>
    </div>

    <div className={`projects-container ${isGridView ? "grid" : "list"}`}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          hide={!showAllProjects && project.featured !== true}
        />
      ))}
    </div>
    <button
      onClick={() => setShowAllProjects(!showAllProjects)}
      className="square-btn m-auto m-b-md"
    >
      {showAllProjects ? (
        <>{chevronUp("small")} Show Featured</>
      ) : (
        <>{chevronDown("small")} Show All</>
      )}
    </button>
  </section>
}