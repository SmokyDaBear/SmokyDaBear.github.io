
import "../styles/project.css";
import { Hero } from "../Components/PageSections/Hero";
import { LaunchCTA } from "../Components/PageSections/LaunchCTA";
import { Offerings } from "../Components/PageSections/Offerings";
import { Projects } from "../Components/PageSections/Projects";
import { WhyVerdant } from "../Components/PageSections/WhyVerdant";
import { Contact } from "../Components/PageSections/Contact";
import Faq from "./Faq";

export function Home() {

  return (
    <>
      <Hero />
      <LaunchCTA />
      <Offerings />
      <WhyVerdant />
      <Projects />
      <Contact />
      <Faq />
    </>
  );
}
