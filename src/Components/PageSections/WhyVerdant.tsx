import { useEffect, useRef, useState, type JSX } from "react";
import { clock, hammerAndChisel, handShake, phone, plus } from "../../icons/icons";

type IconFn = (size?: "large" | "small") => JSX.Element;

const commitments: { icon: IconFn; title: string; image: string; description: string }[] = [
  {
    icon: handShake,
    title: "Personalized Service",
    image: "/slides/partnership.webp",
    description:
      "I take the time to understand your business and tailor solutions to meet your specific needs. I focus on building relationships, and providing a personalized experience.",
  },
  {
    icon: hammerAndChisel,
    title: "Quality Craftsmanship",
    image: "/slides/crafting.webp",
    description:
      "I am dedicated to delivering high-quality work that reflects your brand's values and vision. I pay close attention to detail and strive for excellence in every project.",
  },
  {
    icon: phone,
    title: "Clear Communication",
    image: "/slides/communication.webp",
    description:
      "I maintain open lines of communication throughout the project to ensure transparency and collaboration. I am always available to address your questions and concerns.",
  },
  {
    icon: clock,
    title: "Timely Delivery",
    image: "/slides/deliveries.webp",
    description:
      "I respect your time and strive to complete projects on schedule without compromising quality. I keep you informed every step of the way.",
  },
  {
    icon: plus,
    title: "Ongoing Support",
    image: "/slides/support.webp",
    description:
      "My commitment doesn't end with project completion; I'm here to help your website evolve with your business. I offer continuous support and maintenance to ensure your site remains up-to-date and effective.",
  },
];

const INTERVAL_MS = 5000;

export function WhyVerdant() {
  const [active, setActive] = useState(0);
  const [enterDir, setEnterDir] = useState<"right" | "left">("right");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setEnterDir("right");
      setActive(prev => (prev + 1) % commitments.length);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (index: number) => {
    if (index === active) return;
    setEnterDir(index > active ? "right" : "left");
    setActive(index);
    resetTimer();
  };

  const current = commitments[active];

  return (
    <section id="why-us" className="bg-two">
      <div className="why-container">
        <h2 className="why-heading">Why Verdant?</h2>
        <p className="why-text">
          I'm Jess, a developer with a passion for design and a
          focus on building clean, high-performance websites that reflect your
          brand and drive real results. Your website is often the first thing a
          potential customer sees — I build sites that turn that first impression
          into lasting clients.
        </p>

        <div className="commitment-slideshow">
          {/* ── Main slide area ── */}
          <div className="commitment-slide-main">
            <div className={`commitment-slide enter-${enterDir}`} key={active}>
              <div className="commitment-slide-img">
                <img src={current.image} alt={current.title} />
                <div className="commitment-slide-header">
                  <span className="commitment-slide-icon">{current.icon("large")}</span>
                  <span className="commitment-slide-title">{current.title}</span>
                </div>
                <p className="commitment-slide-caption">{current.description}</p>
              </div>
            </div>

            {/* ── Dot navigation ── */}
            <div className="wizard-dots">
              {commitments.map((c, i) => (
                <button
                  key={i}
                  type="button"
                  className={`wizard-dot${i === active ? " active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={c.title}
                />
              ))}
            </div>
          </div>

          {/* ── Desktop sidebar ── */}
          <ul className="commitment-sidebar" aria-label="Commitments">
            {commitments.map((c, i) => (
              <li
                key={i}
                className={`commitment-sidebar-item${i === active ? " active" : ""}`}
                onClick={() => goTo(i)}
              >
                <span className="commitment-sidebar-icon">{c.icon("small")}</span>
                <span>{c.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
