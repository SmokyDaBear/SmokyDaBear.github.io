import { EndlessCarousel } from "../Components/PageSections/EndlessCarousel";

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
      <div className="text-block">
        <p>
          Welcome to my portfolio! I'm Jess, a passionate web developer with a
          knack for creating beautiful and functional websites.
        </p>
        <p>
          I am focused on delivering websites that bring in customers and leave a
          lasting impression. I'm continually gaining technical knowledge and
          improving my skills.
        </p>
        <p>I have been fascinated with computers and technology from a young age, which has driven my passion for web development. Starting with modding video games and building custom PCs, I eventually transitioned to creating websites and web applications.</p>
        <p>In my spare time, I also enjoy building projects with Arduinos, hiking, photography, and exploring new
          technologies. I also have a background in Automotive, with experience in parts sales, auto repair, and service writing.
        </p>
      </div>
      <h3>Skills & Technologies</h3>
      <EndlessCarousel />
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
