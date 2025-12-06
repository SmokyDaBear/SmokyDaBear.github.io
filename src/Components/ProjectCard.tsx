import type { project } from "../data";
import { gitHub, linkIcon } from "../icons/icons";

export function ProjectCard({
  project,
  hide,
}: {
  project: project;
  hide?: boolean;
}) {
  return (
    <div className={`project-card ${hide ? "hidden" : ""}`}>
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="project-description">{project.description}</p>
        </div>
        <div className="project-links">
          {project.pageUrl && (
            <a
              href={project.pageUrl}
              className="square-btn green-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkIcon("small")}
              View Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              className="square-btn green-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              {gitHub("small")}
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
