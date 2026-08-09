import "./Projects.css";
import { useState } from "react";
import { allCategories, projects } from "../../data/projects";
import { ProjectTileGrid } from "../../components/ProjectTile/ProjectTile";
import { Chip, ChipRow } from "../../components/Chip/Chip";

export function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  const categories = allCategories();
  const visible = filter
    ? projects.filter((p) => p.categories.includes(filter))
    : projects;

  return (
    <section className="section projects-page">
      <div className="container">
        <span className="kicker">Portfolio</span>
        <h1>Projects</h1>
        <p className="lede">
          A selection of client work, web apps, and concept builds. Open any
          project for the full story, screenshots, and links.
        </p>

        <div className="projects-filter">
          <ChipRow>
            <Chip active={filter === null} onClick={() => setFilter(null)}>
              All ({projects.length})
            </Chip>
            {categories.map((category) => (
              <Chip
                key={category}
                active={filter === category}
                onClick={() =>
                  setFilter(filter === category ? null : category)
                }
              >
                {category}
              </Chip>
            ))}
          </ChipRow>
        </div>

        <ProjectTileGrid projects={visible} />
      </div>
    </section>
  );
}
