export function LaunchCTA() {
  return (
    <section id="launch-cta">
      <div className="cta-grid">
        <div className="cta-card">
          <img src="/code-icon.png" alt="Custom web development" className="cta-img" />
          <h3 className="cta-heading">Custom Code, Built for You</h3>
          <p>Every project is hand-crafted to fit your brand — no shortcuts, just clean and performant code built to last.</p>
          <a href="#projects" className="square-btn bg-shift">Explore Projects</a>
        </div>
        <div className="cta-card cta-card-launch">
          <img src="/lift-off.png" alt="Launch your business online" className="cta-img" />
          <h3 className="cta-heading">Ready to take your business to the next level?</h3>
          <p>Your next great website is just a conversation away. Let's build something worth visiting.</p>
          <a href="#get-started" className="square-btn bg-shift">Start a Project</a>
        </div>
      </div>
    </section>
  );
}
