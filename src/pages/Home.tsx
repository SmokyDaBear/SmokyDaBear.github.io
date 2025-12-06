import { projects, services } from "../data";
import { ServiceCard } from "../Components/ServiceCard";
import { sectionSeparator } from "../icons/icons";
import { Suspense, useState } from "react";
import { ProjectCard } from "../Components/ProjectCard";
import "../styles/project.css";

export function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  return (
    <>
      <section id="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">
            I'm a passionate developer specializing in creating amazing web
            experiences.
          </p>
        </div>
        <Suspense
          fallback={
            <img src="/hero-image.jpg" alt="Hero" className="hero-image" />
          }
        >
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-image.jpg"
          >
            <source src="/forest.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Suspense>
        {sectionSeparator()}
      </section>

      <section id="services">
        <h2 className="section-title">What I Offer</h2>
        <p className="section-subtitle">
          Explore the range of services I provide to help bring your ideas to
          life.
        </p>
        <div className="servicesContainer">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </section>
      <section id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of my recent work showcasing my skills and expertise.
        </p>

        <div className="projects-container">
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
          className="square-btn green-glow m-auto m-b-md"
        >
          {showAllProjects ? "Show Featured" : "Show All"}
        </button>
      </section>
    </>
  );
}
