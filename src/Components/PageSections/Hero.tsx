import { sectionSeparator } from "../../icons/icons";

export function Hero() {

  return <section id="hero">
    {/* <img
      className="hero-image"
      src="/slides/trees-hero.webp"
      alt="Forest background"
      fetchPriority="high"
    /> */}
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