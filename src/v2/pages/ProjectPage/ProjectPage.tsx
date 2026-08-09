import "./ProjectPage.css";
import { getProject, similarProjects } from "../../data/projects";
import { paths } from "../../lib/router";
import {
  ChevronLeft,
  ExternalLinkIcon,
  GitHubIcon,
  ArrowUpRight,
} from "../../lib/icons";
import { Gallery } from "../../components/Gallery/Gallery";
import { Chip, ChipRow } from "../../components/Chip/Chip";
import { ProjectTileGrid } from "../../components/ProjectTile/ProjectTile";

export function ProjectPage({ slug }: { slug: string }) {
  const project = getProject(slug);

  if (!project) {
    return (
      <section className="section project-missing">
        <div className="container">
          <h1>Project not found</h1>
          <p className="lede">
            That project doesn't exist (or may have been renamed).
          </p>
          <a className="btn btn-primary" href={paths.projects}>
            <ChevronLeft size={16} /> Back to all projects
          </a>
        </div>
      </section>
    );
  }

  const similar = similarProjects(project);
  const images = [project.cover, ...project.gallery];

  return (
    <article className="section project-page">
      <div className="container">
        <a className="project-back" href={paths.projects}>
          <ChevronLeft size={16} /> All projects
        </a>

        <header className="project-header">
          <ChipRow>
            {project.categories.map((category) => (
              <Chip key={category}>{category}</Chip>
            ))}
          </ChipRow>
          <h1>{project.title}</h1>
          <p className="lede">{project.summary}</p>
        </header>

        <div className="project-layout">
          <div className="project-main">
            <Gallery images={images} title={project.title} />
            <div className="project-description">
              <h2>About this project</h2>
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="project-aside">
            <div className="aside-card">
              <h3>Links</h3>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    className={
                      "btn " +
                      (link.kind === "live" ? "btn-primary" : "btn-ghost")
                    }
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.kind === "source" ? (
                      <GitHubIcon size={16} />
                    ) : (
                      <ExternalLinkIcon size={16} />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="aside-card">
              <h3>Tags</h3>
              <ChipRow>
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </ChipRow>
            </div>

            <div className="aside-card aside-cta">
              <h3>Want something like this?</h3>
              <p>I can build a version tailored to your business.</p>
              <a className="btn btn-primary" href={paths.hire}>
                Start a project <ArrowUpRight size={15} />
              </a>
            </div>
          </aside>
        </div>

        {similar.length > 0 && (
          <section className="project-similar">
            <span className="kicker">Keep browsing</span>
            <h2>Similar projects</h2>
            <ProjectTileGrid projects={similar} />
          </section>
        )}
      </div>
    </article>
  );
}
