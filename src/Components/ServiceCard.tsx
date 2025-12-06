import type { Tservice } from "../data";
import "../styles/services.css";

export function ServiceCard({ service }: { service: Tservice }) {
  return (
    <>
      <div key={service.name} className="serviceCard">
        <img
          src={service.icon}
          alt={service.name + " icon"}
          className="serviceIcon"
        />
        <h3 className="serviceName">{service.name}</h3>
        <p className="serviceDescription">{service.description}</p>
      </div>
    </>
  );
}
