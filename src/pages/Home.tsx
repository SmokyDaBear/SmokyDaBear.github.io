
import "../styles/project.css";
import { Hero } from "../Components/PageSections/Hero";
import { Offerings } from "../Components/PageSections/Offerings";
import { Projects } from "../Components/PageSections/Projects";
import { WhyVerdant } from "../Components/PageSections/WhyVerdant";
import { Contact } from "../Components/PageSections/Contact";
import { Workflow } from "../Components/PageSections/Workflow";

export function Home() {

  return (
    <>
      <Hero />
      <Offerings />
      <WhyVerdant />
      <Projects />
      <Workflow />
      <Contact />
    </>
  );
}
