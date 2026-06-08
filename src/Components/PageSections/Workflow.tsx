import {
  arrowRight,
  arrowDown,
  leftArrow,
  searchIcon,
  webDev,
  qualityCheck,
  rocketLaunch,
  support,
} from "../../icons/icons";

const steps = [
  {
    icon: searchIcon,
    title: "Discovery & Planning",
    description:
      "I collaborate with you to understand your goals, target audience, and project requirements. Together, we create a detailed plan and timeline.",
  },
  {
    icon: webDev,
    title: "Design & Development",
    description:
      "I create wireframes and design mockups for your approval. Once approved, I develop the website using best practices and modern technologies.",
  },
  {
    icon: qualityCheck,
    title: "Testing & QA",
    description:
      "I conduct thorough testing across devices and browsers, ensuring everything functions correctly before a single line goes live.",
  },
  {
    icon: rocketLaunch,
    title: "Launch & Deployment",
    description:
      "Once you're satisfied with the final product, I deploy to your hosting environment and confirm everything is running smoothly.",
  },
  {
    icon: support,
    title: "Maintenance & Support",
    description:
      "My commitment doesn't end at launch — I provide ongoing support to keep your site secure, up-to-date, and performing optimally.",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="bg-two">
      <h2 className="section-title">My Process</h2>
      <p className="section-subtitle">
        A clear, structured workflow from your first idea to a live, maintained
        website.
      </p>
      <div className="workflow-snake">
        <div className="workflow-card" style={{ gridArea: "c1" }}>
          <div className="wf-icon">{steps[0].icon("large")}</div>
          <div className="title">{steps[0].title}</div>
          <p>{steps[0].description}</p>
        </div>

        <div className="wf-arrow wf-arrow-right" style={{ gridArea: "a1" }}>
          {arrowRight("large")}
        </div>

        <div className="workflow-card" style={{ gridArea: "c2" }}>
          <div className="wf-icon">{steps[1].icon("large")}</div>
          <div className="title">{steps[1].title}</div>
          <p>{steps[1].description}</p>
        </div>

        <div className="wf-arrow wf-arrow-right wf-arrow-turn2" style={{ gridArea: "a2" }}>
          {arrowRight("large")}
        </div>

        <div className="workflow-card" style={{ gridArea: "c3" }}>
          <div className="wf-icon">{steps[2].icon("large")}</div>
          <div className="title">{steps[2].title}</div>
          <p>{steps[2].description}</p>
        </div>

        <div className="wf-arrow wf-arrow-turn" style={{ gridArea: "a3" }}>
          {arrowDown("large")}
        </div>

        <div className="workflow-card" style={{ gridArea: "c4" }}>
          <div className="wf-icon">{steps[3].icon("large")}</div>
          <div className="title">{steps[3].title}</div>
          <p>{steps[3].description}</p>
        </div>

        <div className="wf-arrow wf-arrow-left" style={{ gridArea: "a4" }}>
          {leftArrow("large")}
        </div>

        <div className="workflow-card" style={{ gridArea: "c5" }}>
          <div className="wf-icon">{steps[4].icon("large")}</div>
          <div className="title">{steps[4].title}</div>
          <p>{steps[4].description}</p>
        </div>
      </div>
    </section>
  );
}
