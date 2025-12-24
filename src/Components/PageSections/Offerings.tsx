import { services } from "../../data";
import { ServiceCard, ServiceCardHireLink } from "../ServiceCard";
export function Offerings() {
  return <section id="services">
    <h2 className="section-title">What I Offer</h2>
    <p className="section-subtitle">
      Explore the range of services I provide to help bring your ideas to
      life.
    </p>
    <div className="services-container">
      {services.map((service, index) => (
        <ServiceCard key={service.name} service={service} index={index} />
      ))}
      <ServiceCardHireLink />
    </div>
  </section>
};