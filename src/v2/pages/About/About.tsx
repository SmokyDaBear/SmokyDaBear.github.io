import "./About.css";
import { skills } from "../../data/site";
import { paths } from "../../lib/router";
import { ArrowRight } from "../../lib/icons";
import { Chip, ChipRow } from "../../components/Chip/Chip";

const interests = [
  {
    title: "Hardware & Tinkering",
    description:
      "Building projects with Arduinos, modding games, and custom PC builds - where the fascination with tech began.",
  },
  {
    title: "Automotive Background",
    description:
      "Years in parts sales, auto repair, and service writing - I know how real businesses talk to real customers.",
  },
  {
    title: "Outdoors & Photography",
    description:
      "Hiking and photography keep the eye sharp - good composition translates straight into good layouts.",
  },
];

export function About() {
  return (
    <>
      <section className="section about-page dots-bg">
        <div className="container">
          <div className="about-intro">
            <div className="about-photo-wrap">
              <img
                className="about-photo"
                src="/profile-animated.png"
                alt="Portrait of Jes"
                width={280}
                height={280}
              />
            </div>
            <div className="about-bio">
              <span className="kicker">About me</span>
              <h1>Hi, I'm Jes.</h1>
              <p>
                I'm a passionate web developer with a knack for creating
                beautiful and functional websites. I focus on delivering sites
                that bring in customers and leave a lasting impression, and I'm
                continually gaining technical knowledge and sharpening my
                skills.
              </p>
              <p>
                I've been fascinated with computers and technology from a young
                age. Starting with modding video games and building custom PCs,
                I eventually transitioned to creating websites and web
                applications as a natural progression.
              </p>
              <p>
                In my spare time I enjoy building projects with Arduinos, hiking,
                photography, and exploring new technologies. I also bring a
                background in automotive, from parts sales, auto repair, and
                service writing - which taught me how businesses actually win
                and keep customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Toolbox</span>
          <h2>Skills &amp; technologies</h2>
          <div className="about-skills">
            <ChipRow>
              {skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </ChipRow>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Beyond the code</span>
          <h2>What shapes my work</h2>
          <div className="interest-grid">
            {interests.map((interest) => (
              <article className="interest-card" key={interest.title}>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </article>
            ))}
          </div>
          <div className="about-cta">
            <p>Curious what I could build for you?</p>
            <a className="btn btn-primary" href={paths.hire}>
              Let's talk <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
