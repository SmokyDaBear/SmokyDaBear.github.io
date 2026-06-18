import { useForm } from "@formspree/react";
import { LogoImg } from "./LogoImg";
import { FSInput, FSSelect, FSSingleSelect } from "./form-components/FSInput";
import "../styles/forms.css";
import { useState } from "react";
import { paperAirplane, warning } from "../icons/icons";

const STEPS = [
  { label: "Your Business" },
  { label: "About You" },
  { label: "Contact Info" },
  { label: "Your Project" },
  { label: "Timeline & Budget" },
  { label: "Final Details" },
];

export function IntakeQuestionsForm() {
  const [state, handleSubmit] = useForm("mblqpgql");
  const [currentStep, setCurrentStep] = useState(0);
  const [enterDir, setEnterDir] = useState<"right" | "left">("right");

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactPref, setContactPref] = useState("");

  const missing: string[] = [];
  if (!firstName.trim()) missing.push("First Name");
  if (contactPref === "phone") {
    if (!phone.trim()) missing.push("Phone Number");
  } else {
    if (!email.trim()) missing.push("Email Address");
  }
  const missingRequired = missing.length > 0;

  const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const t = e.target as unknown as HTMLInputElement;
    if (t.name === "first-name") setFirstName(t.value);
    if (t.name === "email") setEmail(t.value);
    if (t.name === "phone") setPhone(t.value);
  };

  const navigate = (target: number) => {
    if (target === currentStep) return;
    setEnterDir(target > currentStep ? "right" : "left");
    setCurrentStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stepClass = (i: number) =>
    `wizard-step${currentStep === i ? ` visible wizard-enter-${enterDir}` : " hidden"}`;

  if (state.succeeded) {
    return (
      <section id="get-started-success" className="form-success-page">
        <div className="form-container">
          <h2>Thank You!</h2>
          <p>
            Your message has been sent. I'll follow up based on your contact
            preferences.
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
          Ready to grow your business? Let's get some basic information about
          your needs. Feel free to leave anything that doesn't apply blank.
        </p>

        <form className="wizard-form" onSubmit={handleSubmit} onChange={handleFormChange} noValidate>
          <div className="wizard-steps-area">
            {/* Step 1 — Business Info */}
            <div className={stepClass(0)}>
              <div className="step-label">
                Step 1 of 6 &middot; Your Business
              </div>
              <p>Let's start with some basic info about your business.</p>
              <FSInput
                state={state}
                inputs={[
                  { id: "business-name", label: "Business Name" },
                  {
                    id: "industry",
                    label: "Industry",
                    placeholder: "e.g., Retail, Food Service, Tech",
                  },
                  {
                    id: "business-info",
                    label: "Additional Info",
                    type: "textarea",
                    placeholder: "What products or services do you offer?",
                    fullWidth: true,
                  },
                ]}
              />
            </div>

            {/* Step 2 — Contact Name */}
            <div className={stepClass(1)}>
              <div className="step-label">Step 2 of 6 &middot; About You</div>
              <p>Who should we address in our communications?</p>
              <FSInput
                state={state}
                inputs={[
                  { id: "first-name", label: "First Name", required: true },
                  { id: "last-name", label: "Last Name" },
                ]}
              />
            </div>

            {/* Step 3 — Contact Info */}
            <div className={stepClass(2)}>
              <div className="step-label">
                Step 3 of 6 &middot; Contact Info
              </div>
              <p>How can we reach you?</p>
              <FSInput
                state={state}
                inputs={[
                  {
                    id: "email",
                    label: "Email Address",
                    required: contactPref !== "phone",
                    type: "email",
                  },
                  {
                    id: "phone",
                    label: "Phone Number",
                    type: "tel",
                    required: contactPref === "phone",
                  },
                ]}
              />
              <FSSingleSelect
                id="contact-preferences"
                label="Contact Preferences"
                state={state}
                fullWidth
                onSelect={setContactPref}
                options={[
                  { label: "Email", value: "email" },
                  { label: "Phone", value: "phone" },
                  { label: "Either", value: "either" },
                ]}
              />
            </div>

            {/* Step 4 — Project Details */}
            <div className={stepClass(3)}>
              <div className="step-label">Step 4 of 6 &middot; Your Project</div>
              <p>Tell us about your project.</p>
              <FSInput
                state={state}
                inputs={[{ id: "current-url", label: "Current Website URL" }]}
              />
              <p>What services are you interested in?</p>
              <FSSelect
                id="services-interested"
                label="Interested Services"
                fullWidth
                multiple
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
            </div>
            {/* Step 5 - Timeline and Budget*/}
            <div className={stepClass(4)}>
              <div className="step-label">
                Step 5 of 6 &middot; Timeline and Budget
              </div>
              <p>How soon do you need your site, and what is your budget?</p>
              <FSSingleSelect
                id="budget"
                label="Budget"
                state={state}
                fullWidth
                allowCustom
                customPlaceholder="Other"
                options={[
                  { label: "$150 - $500", value: "150-500" },
                  { label: "$500 - $1000", value: "500-1000" },
                  { label: "$1000+", value: "1000+" },
                  { label: "Not sure / Just exploring", value: "not-sure" },
                ]}
              />
              <FSSingleSelect
                id="timeline"
                label="Project Timeline"
                state={state}
                fullWidth
                allowCustom
                customPlaceholder="Other"
                options={[
                  { label: "Immediately", value: "immediately" },
                  { label: "1-2 weeks", value: "1-2-weeks" },
                  { label: "1+ months", value: "1+-months" },
                  { label: "Ongoing", value: "ongoing" },
                  { label: "Not sure", value: "not-sure" },
                ]}
              />
            </div>
            {/* Step 5 — Final Details */}
            <div className={stepClass(5)}>
              <div className="step-label">
                Step 6 of 6 &middot; Final Details
              </div>
              <p>Almost done! A few more details.</p>
              <FSInput
                state={state}
                inputs={[
                  {
                    id: "message",
                    label: "Message",
                    type: "textarea",
                    fullWidth: true,
                    placeholder: "Describe your needs and goals...",
                  },
                ]}
              />
              <FSInput
                state={state}
                inputs={[
                  {
                    id: "referral",
                    label: "How did you hear about us?",
                    placeholder: "e.g., Google, Friend, Social Media",
                  },
                ]}
              />
            </div>
          </div>{/* end wizard-steps-area */}

          {currentStep === STEPS.length - 1 && missingRequired && (
            <div className="wizard-required-msg">
              {warning("small")}
              <span>
                {missing.join(" and ")} {missing.length === 1 ? "is" : "are"} required
              </span>
            </div>
          )}

          {/* Nav buttons */}
          <div className="wizard-nav">
            <button
              type="button"
              className="square-btn wizard-back"
              style={{ visibility: currentStep === 0 ? "hidden" : "visible" }}
              onClick={() => navigate(currentStep - 1)}
            >
              &#8592; Back
            </button>
            {currentStep < STEPS.length - 1 ? (
              <button
                type="button"
                className="square-btn bg-shift"
                onClick={() => navigate(currentStep + 1)}
              >
                Next &#8594;
              </button>
            ) : (
              <button
                type="submit"
                className="square-btn bg-shift submit-btn"
                disabled={state.submitting || missingRequired}
              >
                {state.submitting ? "Submitting..." : "Submit"} {missingRequired ? warning() : paperAirplane()}
              </button>
            )}
          </div>
        </form>

        {/* Step dot indicators */}
        <div className="wizard-dots" role="tablist" aria-label="Form steps">
          {STEPS.map((step, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === currentStep}
              aria-label={`Step ${i + 1}: ${step.label}`}
              title={step.label}
              className={`wizard-dot${i === currentStep ? " active" : ""}${i < currentStep ? " completed" : ""}`}
              onClick={() => navigate(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
