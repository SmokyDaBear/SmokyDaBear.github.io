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
      <h1 className="hero-title">Grow Your<br /><span className="hero-accent">Business</span></h1>
      <p className="hero-subtitle">
        Verdant Webworks builds custom, high-performance websites tailored to
        your brand — responsive, polished, and designed to make a lasting first
        impression.
      </p>
      <div className="buttons">
        <a href="#projects" className="square-btn bg-shift">
          View My Work
        </a>
        <a href="#get-started" className="square-btn bg-shift">
          Start a Project
        </a>
      </div>
    </div>
    <div className="fade-out overlay"></div>
    <div className="blur overlay"></div>
    {sectionSeparator()}
  </section>

}