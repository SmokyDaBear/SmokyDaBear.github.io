import { Suspense } from "react";
import { sectionSeparator } from "../../icons/icons";

export function Hero() {

  return <section id="hero">
    <Suspense
      fallback={
        <img src="/forest-hero.png" alt="Hero" className="hero-image" />
      }
    >
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/forest-hero.png"
      >
        <source src="/forest.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Suspense>
    <div className="hero-content">
      <h1 className="hero-title">Welcome to My Portfolio</h1>
      <p className="hero-subtitle">
        I'm a passionate developer specializing in creating amazing web
        experiences.
      </p>
      <div className="buttons">
        <a href="#projects" className="square-btn">
          View Projects
        </a>
        <a href="#get-started" className="square-btn">
          Hire Me
        </a>
      </div>
    </div>
    <div className="fade-out-overlay"></div>
    {sectionSeparator()}
  </section>

}