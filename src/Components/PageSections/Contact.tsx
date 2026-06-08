import { email, gitHub, linkedIn, upWork } from "../../icons/icons";
import { ContactForm } from "../ContactForm";

export function Contact() {
  return <section id="contact" className="bg-two">
    <h2 className="section-title">Get in Touch</h2>
    <p className="section-subtitle text-secondary">
      I'm excited to hear about your project and how I can help. Let's work
      together to create something amazing!
    </p>
    <div className="flex-split">
      <div className="split-section">
        <h3>Contact Information</h3>
        <p className="text-secondary">
          Email me
        </p>

        <a href="mailto:verdantwebworks@gmail.com" className="page-link">{email()}verdantwebworks@gmail.com</a>

        <p className="text-secondary">Hire me on Upwork</p>

        <a
          href="https://www.upwork.com/freelancers/~01413f31170a9eb390"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          {upWork()} Upwork Profile
        </a>
        <p className="text-secondary">Social Links</p>
        <a
          href="https://github.com/SmokyDaBear"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          {gitHub()} GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jes-green/"
          target="_blank"
          rel="noopener noreferrer"
          className="page-link"
        >
          {linkedIn()} LinkedIn
        </a>

      </div>
      <div className="split-section priority">
        <ContactForm />
      </div>
    </div>
  </section>
}