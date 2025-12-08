export function About() {
  return (
    <section className="text-center center-flex flex-col">
      <h2>About Me</h2>
      <img
        width="200"
        height="200"
        src="/profile-animated.png"
        alt="Profile Picture"
        className="profile-picture"
      />
      <p>
        Welcome to my portfolio! I'm Jess, a passionate web developer with a
        knack for creating beautiful and functional websites.
      </p>
      <p>
        I am focused on delivering websites that bring in customers and leave a
        lasting impression. I'm continually gaining technical knowledge and
        improving my skills. I'm always open to new projects, so feel free to
        send an email or use the contact form at the bottom of the page to get
        in touch!
      </p>
      <h3>Skills & Technologies</h3>
      <ul className="unstyled-list skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Responsive Design</li>
        <li>UI/UX Principles</li>
        <li>SEO Best Practices</li>
      </ul>
    </section>
  );
}
