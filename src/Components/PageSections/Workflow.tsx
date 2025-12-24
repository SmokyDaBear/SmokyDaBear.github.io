import { arrowDown } from "../../icons/icons";

export function Workflow() {
  return (
    <section id="workflow" className="bg-two">
      <h2 className="section-title">My Process</h2>
      <p className="section-subtitle">
        Curious about how it works? I follow a structured workflow to ensure efficient project delivery and high-quality results.
      </p>
      <br />
      <div className="workflow">
        <div className="workflow-card"><div className="title">Discovery & Planning</div> <p>I collaborate with you to understand your goals, target audience, and project requirements. Together, we create a detailed plan and timeline.</p></div>
        <div className="m-auto">{arrowDown("large")}</div>
        <div className="workflow-card"><div className="title">Design & Development</div><p> I create wireframes and design mockups for your approval. Once approved, I develop the website using best practices and modern technologies.</p></div>
        <div className="m-auto">{arrowDown("large")}</div>
        <div className="workflow-card"><div className="title">Testing & Quality Assurance</div> <p>I conduct thorough testing to ensure the website functions correctly across different devices and browsers. I address any issues that arise during this phase.</p></div>
        <div className="m-auto">{arrowDown("large")}</div>
        <div className="workflow-card"><div className="title">Launch & Deployment</div> <p>Once testing is complete and you're satisfied with the final product, I deploy the website to your hosting environment and ensure everything is running smoothly.</p></div>
        <div className="m-auto">{arrowDown("large")}</div>
        <div className="workflow-card"><div className="title">Ongoing Maintenance & Support</div> <p>I provide ongoing support and maintenance to keep your website up-to-date, secure, and performing optimally.</p></div>
      </div>
    </section>
  );
}