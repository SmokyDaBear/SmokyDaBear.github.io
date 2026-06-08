import { useRef, type JSX } from "react";
import { clock, hammerAndChisel, handShake, phone, plus } from "../../icons/icons";
import { LogoImg } from "../LogoImg";
import { useInView } from "../../utils/useInView";

const commitments = [
  {
    icon: handShake(),
    title: "Personalized Service",
    description:
      "I take the time to understand your business and tailor solutions to meet your specific needs. I focus on building relationships, and providing a personalized experience.",
  },
  {
    icon: hammerAndChisel(),
    title: "Quality Craftsmanship",
    description:
      "I am dedicated to delivering high-quality work that reflects your brand's values and vision. I pay close attention to detail and strive for excellence in every project.",
  },
  {
    icon: phone(),
    title: "Clear Communication",
    description:
      "I maintain open lines of communication throughout the project to ensure transparency and collaboration. I am always available to address your questions and concerns.",
  },
  {
    icon: clock(),
    title: "Timely Delivery",
    description:
      "I respect your time and strive to complete projects on schedule without compromising quality. I keep you informed every step of the way.",
  },
  {
    icon: plus(),
    title: "Ongoing Support",
    description:
      "My commitment doesn't end with project completion; I'm here to help your website evolve with your business. I offer continuous support and maintenance to ensure your site remains up-to-date and effective.",
  },
];

const CommitmentListItem = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, 100);
  return (
    <li ref={ref} className={`commitment-item${isInView ? " animate" : ""}`}>
      <div className="title">
        {icon}
        {title}
      </div>
      <p>{description}</p>
    </li>
  );
};

export function WhyVerdant() {
  return (
    <section id="why-us" className="bg-two">
      <div className="why-layout">
        <div className="why-text-card">
          <div className="why-logo-wrap">
            <LogoImg preferredSize={120} borderRadius={12} borderThickness={2} />
          </div>
          <h2 className="why-heading">Why Verdant?</h2>
          <p className="why-text">
            I'm Jess, a web developer from Tulsa with a passion for design and a focus on building clean,
            high-performance websites that
            reflect your brand and drive real results.
          </p>
          <p className="why-text">
            Your website is often the first thing a potential customer sees. That
            first impression sets the tone for your entire business. I build
            sites that are visually compelling, intuitive to use, and engineered
            to turn visitors into clients.
          </p>
        </div>

        <div className="why-commitments">
          <h3 className="commitments-heading">My Commitments to You</h3>
          <ul className="commitments-list">
            {commitments.map((commitment, index) => (
              <CommitmentListItem
                key={index}
                icon={commitment.icon}
                title={commitment.title}
                description={commitment.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
