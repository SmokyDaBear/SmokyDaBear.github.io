import type { project } from "../types";
import { gitHub, linkIcon } from "../icons/icons";
import { useInView } from "../utils/useInView";
import { useRef } from "react";

export function ProjectCard({
  project,
  hide,
}: {
  project: project;
  hide?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, 100);

  return (
    <div
      ref={ref}
      className={`project-card ${hide ? "hidden" : ""} ${
        isInView ? " animate" : ""
      }`}
    >
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
