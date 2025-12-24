import type { Tservice } from "../types";
import "../styles/services.css";
import { useRef } from "react";
import { useInView } from "../utils/useInView";

export function ServiceCard({ service }: { service: Tservice; index: number }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(cardRef, 100);
  return (
    <>
      <div
        key={service.name}
        className={"service-card" + (inView ? " slide-up" : "")}
        ref={cardRef}
      >
        <img
          src={service.icon}
          alt={service.name + " icon"}
          className="service-icon"
        />
        <h3 className="service-name">{service.name}</h3>
        <p className="service-description">{service.description}</p>
      </div>
    </>
  );
}

export function ServiceCardHireLink() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(cardRef, 100);
  return (
    <div className={"service-card" + (inView ? " slide-up" : "")} ref={cardRef}>
      <h3 className="service-name">Interested in working together?</h3>
      <p className="service-description">
        I'm excited to help bring your project to life. Let's discuss how I can
        contribute to your success.
      </p>
      <a href="#contact" className="square-btn hire-button">
        Hire Me
      </a>
    </div>
  );
}