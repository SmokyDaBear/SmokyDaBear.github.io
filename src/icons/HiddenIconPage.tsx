import { useState } from "react";
import {
  arrowUpRight,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  clock,
  closeIcon,
  email,
  gitHub,
  gridIcon,
  hamburger,
  leftArrow,
  linkedIn,
  linkIcon,
  listIcon,
  phone,
  rightArrow,
  searchIcon,
  sEO,
  uI,
  warning,
  webDev,
} from "./icons";

export function HiddenIconPage() {
  const [burgerActive, setBurgerActive] = useState(true);
  return (
    <>
      <section id="hidden-icon-page">
        <h1>Hidden Icon Page</h1>
        <p>
          This is a hidden page that showcases a few icons I was testing. If you
          find this page, let me know.
        </p>
        <div className="icon-display">
          {linkIcon("large")}

          {warning("large")}
          {warning("large", true)}
          {clock("large")}
          {leftArrow("large")}
          {rightArrow("large")}
          {hamburger({
            active: burgerActive,
            handleClick: () => {
              setBurgerActive(!burgerActive);
            },
          })}
          {arrowUpRight("large")}
          {webDev("large")}
          {uI("large")}
          {sEO("large")}
          {phone("large")}
          {email("large")}
          {gitHub("large")}
          {linkedIn("large")}
          {gridIcon("large")}
          {listIcon("large")}
          {searchIcon("large")}
          {chevronUp("large")}
          {chevronDown("large")}
          {chevronLeft("large")}
          {chevronRight("large")}
          {closeIcon("large")}
        </div>
      </section>
    </>
  );
}
