import { useForm } from "@formspree/react";
import { LogoImg } from "./LogoImg";
import "../styles/forms.css";
import { FSInput, FSSelect, FSSingleSelect } from "./form-components/FSInput";

export function IntakeQuestionsForm() {
  const [state, handleSubmit] = useForm("mblqpgql");

  if (state.succeeded) {
    return (
      <section id="get-started-success" className="form-success-page">
        <div className="form-container">
          <h2>Thank You!</h2>
          <p>
            Your message has been sent successfully. I will follow up based on
            your contact preferences.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="get-started" className="form-page">
      <div className="form-container">
        <LogoImg />
        <h2>Get Started</h2>
        <p className="description">
          Ready to grow your business? Let's start by getting some basic
          information about your business and needs. If any of the questions
          don't apply to you, feel free to leave them blank.
        </p>
        <form onSubmit={handleSubmit}>
          <FSInput
            state={state}
            inputs={[
              { id: "business-name", label: "Business Name" },
              {
                id: "industry",
                label: "Industry",
                placeholder: "e.g., Retail, Food Service, Tech, etc.",
              },
              {
                id: "business-info",
                label: "Additional Info",
                type: "textarea",
                placeholder: "What products or services do you offer?",
                fullWidth: true,
              },
            ]}
            question="Let's start with some basic information about your business."
          />
          <FSInput
            state={state}
            question="Who should we address in our communications with you?"
            inputs={[
              { id: "first-name", label: "First Name" },
              { id: "last-name", label: "Last Name" },
            ]}
            required
          />

          <FSInput
            state={state}
            inputs={[
              { id: "email", label: "Email Address", required: true },
              { id: "phone", label: "Phone Number" },
            ]}
            question="Now let's get some contact information for follow-up"
          />
          <p>What are your contact preferences?</p>
          <FSSingleSelect
            id="contact-preferences"
            label="Contact Preferences"
            state={state}
            fullWidth={true}
            options={[
              { label: "Email", value: "email" },
              { label: "Phone", value: "phone" },
              { label: "Either", value: "either" },
            ]}
          />

          <FSInput
            state={state}
            inputs={[{ id: "current-url", label: "Current Website URL" }]}
            question="Do you have an existing website? If so, please provide the URL."
          />
          <p>What services are you interested in? (Select all that apply)</p>
          <FSSelect
            id="services-interested"
            label="Interested Services"
            fullWidth={true}
            multiple={true}
            options={[
              { value: "web-dev", label: "Web Development" },
              { value: "ecommerce", label: "E-commerce Solutions" },
              { value: "ui", label: "UI/UX Design" },
              { value: "website-redesign", label: "Website Redesign" },
              { value: "consulting", label: "Consulting" },
              { value: "api-integration", label: "API Integration" },
            ]}
            state={state}
          />
          <FSInput
            state={state}
            inputs={[
              {
                id: "message",
                label: "Message",
                type: "textarea",
                fullWidth: true,
                placeholder: "Describe your needs and goals here...",
              },
            ]}
            fullWidth={true}
            question="Please provide any additional details or questions you have:"
          />
          <p>What is your budget range for this project?</p>
          <FSSingleSelect
            id="budget"
            label="Budget"
            state={state}
            fullWidth={true}
            allowCustom={true}
            customPlaceholder="Other"
            options={[
              { label: "$150 - $500", value: "150-500" },
              { label: "$500 - $1000", value: "500-1000" },
              { label: "$1000+", value: "1000+" },
              { label: "Not sure / Just exploring", value: "not-sure" },
            ]}
          />
          <p>How soon do you need this project completed?</p>
          <FSSingleSelect
            id="timeline"
            label="Project Timeline"
            state={state}
            fullWidth={true}
            allowCustom={true}
            customPlaceholder="Other"
            options={[
              { label: "Immediately", value: "immediately" },
              { label: "1-2 weeks", value: "1-2-weeks" },
              { label: "1+ months", value: "1+-months" },
              { label: "Ongoing", value: "ongoing" },
              { label: "Not sure", value: "not-sure" },
            ]}
          />

          <FSInput
            state={state}
            inputs={[
              {
                id: "referral",
                label: "How did you hear about us?",
                placeholder: "e.g., Google, Friend, Social Media, etc.",
              },
            ]}
            question="Finally, we'd love to know how you found us!"
          />
          <button
            className="square-btn"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
