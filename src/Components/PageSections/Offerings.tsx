import { services } from "../../../old/data";
import { ServiceCard, ServiceCardHireLink } from "../ServiceCard";
export function Offerings() {
  return <section id="services">
    <h2 className="section-title">Services</h2>
    <p className="section-subtitle">
      End-to-end web development — from initial concept to a polished,
      production-ready product.
    </p>
    <div className="services-container">
      {services.map((service, index) => (
        <ServiceCard key={service.name} service={service} index={index} />
      ))}
      <ServiceCardHireLink />
    </div>
  </section>
};