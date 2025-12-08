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
      <h2>Services Offered</h2>
      <p>
        I specialize in a range of web development services tailored to meet
        your needs. Whether you're looking for a stunning portfolio site, a
        robust e-commerce platform, or a dynamic web application, I've got you
        covered.
      </p>
      <ul className="unstyled-list skills-list">
        <li>Custom Website Design and Development</li>
        <li>Responsive and Mobile-First Design</li>
        <li>Content Management Systems (CMS)</li>
        <li>E-commerce Solutions</li>
        <li>Website Maintenance and Support</li>
        <li>SEO Optimization</li>
      </ul>
      {services.map((service) => {
        return <ServiceCard key={service.name} service={service} />;
      })}
      <br />
      <p className={"m-auto center-text italic"}>
        Ready to take your online presence to the next level? Hire me today to
        discuss your project and how I can help bring your vision to life!
      </p>
      <br />
    </section>
  );
}
