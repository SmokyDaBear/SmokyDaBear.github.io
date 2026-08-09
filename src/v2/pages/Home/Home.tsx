import "./Home.css";
import { ArrowRight, ArrowUpRight } from "../../lib/icons";
import { serviceIcon } from "../../lib/icons";
import { paths } from "../../lib/router";
import { featuredProjects, projects } from "../../data/projects";
import { processSteps, services, techLogos } from "../../data/site";
import { ProjectTileGrid } from "../../components/ProjectTile/ProjectTile";

export function Home() {
  const featured = featuredProjects();

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero section">
        <div className="container hero-inner">
          <div className="hero-copy fade-up">
            <span className="kicker">Verdant Webworks</span>
            <h1>
              Websites that <span className="hero-accent">grow</span> with your
              business.
            </h1>
            <p className="lede">
              I'm Jes — a web developer building fast, responsive sites and web
              apps that bring in customers and leave a lasting impression. From
              storefronts to custom tools, I take projects from idea to launch.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href={paths.projects}>
                See my work <ArrowRight size={18} />
              </a>
              <a className="btn btn-ghost btn-lg" href={paths.hire}>
                Hire me
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>{projects.length}+</dt>
                <dd>Projects shipped</dd>
              </div>
              <div>
                <dt>100%</dt>
                <dd>Responsive builds</dd>
              </div>
              <div>
                <dt>1:1</dt>
                <dd>Direct communication</dd>
              </div>
            </dl>
          </div>

          <div className="hero-collage" aria-hidden="true">
            {featured.map((project) => (
              <a
                key={project.slug}
                className="collage-card"
                href={paths.project(project.slug)}
                tabIndex={-1}
              >
                <img src={project.cover} alt="" loading="eager" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Tech marquee ---------- */}
      <section className="tech-strip" aria-label="Technologies I work with">
        <div className="tech-track">
          {[...techLogos, ...techLogos].map((logo, i) => (
            <span
              className="tech-item"
              key={`${logo.name}-${i}`}
              aria-hidden={i >= techLogos.length}
            >
              <img className="tech-logo" src={logo.src} alt="" loading="lazy" />
              {logo.name}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section">
        <div className="container">
          <span className="kicker">What I do</span>
          <h2>Every layer of a modern website</h2>
          <p className="lede">
            Design, build, integrate, and optimize — whether it's a brand-new
            site or new life for an existing one.
          </p>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <span className="service-icon">{serviceIcon(service.icon)}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured work ---------- */}
      <section className="section">
        <div className="container">
          <div className="featured-heading">
            <div>
              <span className="kicker">Featured work</span>
              <h2>Recent projects</h2>
            </div>
            <a className="btn btn-ghost" href={paths.projects}>
              View all projects <ArrowRight size={16} />
            </a>
          </div>
          <ProjectTileGrid projects={featured} />
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section">
        <div className="container">
          <span className="kicker">How it works</span>
          <h2>A clear path from idea to launch</h2>
          <ol className="process-grid">
            {processSteps.map((step, i) => (
              <li className="process-step" key={step.title}>
                <span className="process-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2>Have a project in mind?</h2>
              <p>
                Tell me about it — I'll follow up with ideas, a timeline, and a
                quote. No pressure, no jargon.
              </p>
            </div>
            <a className="btn btn-primary btn-lg cta-btn" href={paths.hire}>
              Start a project <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
