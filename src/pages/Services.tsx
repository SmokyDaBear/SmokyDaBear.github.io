import { services } from "../data";
import type { Tservice } from "../types";

function ServiceCard({
  service,
}: {
  service: Tservice;
  ref?: React.Ref<HTMLElement>;
}) {
  return (
    <div className="service-card-lg" id={service.name}>
      <img
        src={service.icon}
        alt={service.name + " icon"}
        className="service-icon-lg"
      />
      <div className="service-text">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <p>{service.descriptionLong}</p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="services-page center-flex flex-col">
      <h2 className="section-title">Services Offered</h2>
      <p className="section-subtitle">
        End-to-end web development tailored to your business — from a polished
        landing page to a full-scale web application.
      </p>
      <ul className="skill-list skills-list">
        <li>Custom Website Design &amp; Development</li>
        <li>Responsive &amp; Mobile-First Design</li>
        <li>Content Management Systems (CMS)</li>
        <li>E-commerce Solutions</li>
        <li>Website Maintenance &amp; Support</li>
        <li>SEO Optimization</li>
      </ul>
      {services.map((service) => {
        return <ServiceCard key={service.name} service={service} />;
      })}
      <br />
      <p className="m-auto center-text italic">
        Ready to take your business to the next level?{" "}
        <a href="#get-started" className="accent-underline">Start a project today.</a>
      </p>
      <br />
    </section>
  );
}
