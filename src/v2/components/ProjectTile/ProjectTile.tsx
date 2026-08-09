import "./ProjectTile.css";
import type { Project } from "../../types";
import { paths } from "../../lib/router";
import { ArrowRight } from "../../lib/icons";

export function ProjectTile({ project }: { project: Project }) {
  const href = paths.project(project.slug);
  return (
    <article className="project-tile">
      <a
        className="tile-media"
        href={href}
        aria-label={`${project.title} — see more`}
        tabIndex={-1}
      >
        <img src={project.cover} alt={`${project.title} preview`} loading="lazy" />
      </a>
      <div className="tile-bar">
        <h3 className="tile-title">{project.title}</h3>
        <a className="tile-more" href={href}>
          See more <ArrowRight size={15} />
        </a>
      </div>
    </article>
  );
}

export function ProjectTileGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-tile-grid">
      {projects.map((project) => (
        <ProjectTile key={project.slug} project={project} />
      ))}
    </div>
  );
}
