import "../../styles/carousel.css";
import { codeIcons } from "../../icons/icons";

export function EndlessCarousel() {
  return (
    <>
      <div className="carousel">
        <div className="fade-start"></div>
        <div className="content" aria-hidden="true">
          {Object.values(codeIcons).map((icon, index) => (
            <div className="carousel-item" key={index}>
              {icon("large")}
            </div>
          ))}
        </div>
        <div className="content" aria-hidden="true">
          {Object.values(codeIcons).map((icon, index) => (
            <div className="carousel-item" key={index}>
              {icon("large")}
            </div>
          ))}
        </div>
        <div className="fade-end"></div>
      </div>
    </>
  );
}