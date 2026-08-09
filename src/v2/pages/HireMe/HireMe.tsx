import "./HireMe.css";
import { useForm } from "@formspree/react";
import { useRef, useState } from "react";
import { formspreeId } from "../../data/site";
import { SendIcon, WarningIcon, ChevronLeft, ChevronRight } from "../../lib/icons";
import {
  ChoiceField,
  TextFields,
} from "../../components/FormControls/FormControls";
import { ScheduleCallField } from "../../components/DatePicker/DatePicker";

const STEPS = [
  "Your Business",
  "About You",
  "Contact Info",
  "Your Project",
  "Timeline & Budget",
  "Final Details",
];

/* Fields shown in the pre-submit review, grouped by the step they live on. */
const REVIEW_SECTIONS: {
  step: number;
  fields: { name: string; label: string }[];
}[] = [
  {
    step: 0,
    fields: [
      { name: "business-name", label: "Business Name" },
      { name: "industry", label: "Industry" },
      { name: "business-info", label: "Additional Info" },
    ],
  },
  {
    step: 1,
    fields: [
      { name: "first-name", label: "First Name" },
      { name: "last-name", label: "Last Name" },
    ],
  },
  {
    step: 2,
    fields: [
      { name: "email", label: "Email Address" },
      { name: "phone", label: "Phone Number" },
      { name: "contact-preferences", label: "Contact Preference" },
    ],
  },
  {
    step: 3,
    fields: [
      { name: "current-url", label: "Current Website URL" },
      { name: "services-interested", label: "Services" },
    ],
  },
  {
    step: 4,
    fields: [
      { name: "budget", label: "Budget" },
      { name: "timeline", label: "Timeline" },
    ],
  },
];

export function HireMe() {
  const [state, handleSubmit] = useForm(formspreeId);
  const [currentStep, setCurrentStep] = useState(0);
  const [enterDir, setEnterDir] = useState<"right" | "left">("right");

  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Record<string, string>>({});

  // Choice pills and the date picker write to hidden inputs, which never
  // fire change events — so snapshot the whole form after any interaction.
  const syncValues = () => {
    const form = formRef.current;
    if (!form) return;
    const next: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      if (typeof value === "string") next[key] = value;
    });
    setValues(next);
  };

  const contactPref = values["contact-preferences"] ?? "";
  const missing: { label: string; name: string; step: number }[] = [];
  if (!values["first-name"]?.trim()) {
    missing.push({ label: "First Name", name: "first-name", step: 1 });
  }
  if (contactPref === "phone") {
    if (!values["phone"]?.trim()) {
      missing.push({ label: "Phone Number", name: "phone", step: 2 });
    }
  } else if (!values["email"]?.trim()) {
    missing.push({ label: "Email Address", name: "email", step: 2 });
  }
  const firstMissing = missing[0];
  const missingRequired = missing.length > 0;

  const navigateStep = (target: number) => {
    if (target === currentStep || target < 0 || target >= STEPS.length) return;
    setEnterDir(target > currentStep ? "right" : "left");
    setCurrentStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stepClass = (i: number) =>
    "wizard-step" +
    (currentStep === i ? ` visible enter-${enterDir}` : " hidden");

  if (state.succeeded) {
    return (
      <section className="section hire-page">
        <div className="container">
          <div className="wizard-card wizard-success">
            <span className="wizard-success-icon">
              <SendIcon size={28} />
            </span>
            <h1>Thank you!</h1>
            <p className="lede">
              Your message has been sent. I'll follow up based on your contact
              preferences.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section hire-page">
      <div className="container">
        <header className="hire-header">
          <span className="kicker">Hire me</span>
          <h1>Let's get started</h1>
          <p className="lede">
            Ready to grow your business? A few quick questions and I'll have
            what I need to follow up with ideas and a quote. Anything that
            doesn't apply — just leave it blank.
          </p>
        </header>

        <div className="wizard-card">
          <div className="wizard-progress">
            <span className="wizard-progress-label">
              Step {currentStep + 1} of {STEPS.length} &middot;{" "}
              {STEPS[currentStep]}
            </span>
            <span className="wizard-progress-track">
              <span
                className="wizard-progress-fill"
                style={{
                  width: `${((currentStep + 1) / STEPS.length) * 100}%`,
                }}
              />
            </span>
          </div>

          <form
            ref={formRef}
            className="wizard-form"
            onSubmit={handleSubmit}
            onChange={syncValues}
            onClick={() => window.setTimeout(syncValues, 0)}
            noValidate
          >
            <div className="wizard-steps-area">
              <div className={stepClass(0)}>
                <p className="wizard-step-blurb">
                  Let's start with some basic info about your business.
                </p>
                <div className="form-grid">
                  <TextFields
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
              </div>

              <div className={stepClass(1)}>
                <p className="wizard-step-blurb">
                  Who should I address in our communications?
                </p>
                <div className="form-grid">
                  <TextFields
                    state={state}
                    inputs={[
                      { id: "first-name", label: "First Name", required: true },
                      { id: "last-name", label: "Last Name" },
                    ]}
                  />
                </div>
              </div>

              <div className={stepClass(2)}>
                <p className="wizard-step-blurb">How can I reach you?</p>
                <div className="form-grid">
                  <TextFields
                    state={state}
                    inputs={[
                      {
                        id: "email",
                        label: "Email Address",
                        type: "email",
                        required: contactPref !== "phone",
                      },
                      {
                        id: "phone",
                        label: "Phone Number",
                        type: "tel",
                        required: contactPref === "phone",
                      },
                    ]}
                  />
                  <ChoiceField
                    id="contact-preferences"
                    label="Contact Preference"
                    state={state}
                    fullWidth
                    options={[
                      { label: "Email", value: "email" },
                      { label: "Phone", value: "phone" },
                      { label: "Either", value: "either" },
                    ]}
                  />
                </div>
              </div>

              <div className={stepClass(3)}>
                <p className="wizard-step-blurb">Tell me about your project.</p>
                <div className="form-grid">
                  <TextFields
                    state={state}
                    inputs={[
                      {
                        id: "current-url",
                        label: "Current Website URL",
                        fullWidth: true,
                      },
                    ]}
                  />
                  <ChoiceField
                    id="services-interested"
                    label="What services are you interested in?"
                    state={state}
                    fullWidth
                    multiple
                    options={[
                      { value: "Web Development", label: "Web Development" },
                      { value: "E-commerce", label: "E-commerce Solutions" },
                      { value: "UI/UX Design", label: "UI/UX Design" },
                      { value: "Website Redesign", label: "Website Redesign" },
                      { value: "Consulting", label: "Consulting" },
                      { value: "API Integration", label: "API Integration" },
                    ]}
                  />
                </div>
              </div>

              <div className={stepClass(4)}>
                <p className="wizard-step-blurb">
                  How soon do you need your site, and what's your budget?
                </p>
                <div className="form-grid">
                  <ChoiceField
                    id="budget"
                    label="Budget"
                    state={state}
                    fullWidth
                    allowCustom
                    customPlaceholder="Other amount"
                    options={[
                      { label: "$150 - $500", value: "$150 - $500" },
                      { label: "$500 - $1000", value: "$500 - $1000" },
                      { label: "$1000+", value: "$1000+" },
                      {
                        label: "Not sure / Just exploring",
                        value: "Not sure",
                      },
                    ]}
                  />
                  <ChoiceField
                    id="timeline"
                    label="Project Timeline"
                    state={state}
                    fullWidth
                    allowCustom
                    customPlaceholder="Other timeline"
                    options={[
                      { label: "Immediately", value: "Immediately" },
                      { label: "1-2 weeks", value: "1-2 weeks" },
                      { label: "1+ months", value: "1+ months" },
                      { label: "Ongoing", value: "Ongoing" },
                      { label: "Not sure", value: "Not sure" },
                    ]}
                  />
                </div>
              </div>

              <div className={stepClass(5)}>
                <p className="wizard-step-blurb">
                  Almost done! A few more details.
                </p>
                <div className="form-grid">
                  <TextFields
                    state={state}
                    inputs={[
                      {
                        id: "message",
                        label: "Message",
                        type: "textarea",
                        fullWidth: true,
                        placeholder: "Describe your needs and goals...",
                      },
                      {
                        id: "referral",
                        label: "How did you hear about me?",
                        placeholder: "e.g., Google, Friend, Social Media",
                        fullWidth: true,
                      },
                    ]}
                  />
                  <ScheduleCallField />
                </div>

                <div className="wizard-review">
                  <h2>Make sure everything looks correct</h2>
                  <p className="wizard-review-blurb">
                    One last look before you send it off — hit Edit to jump back
                    and change anything.
                  </p>
                  {REVIEW_SECTIONS.map(({ step, fields }) => (
                    <section className="review-group" key={step}>
                      <header className="review-group-head">
                        <h3>{STEPS[step]}</h3>
                        <button
                          type="button"
                          className="review-edit"
                          onClick={() => navigateStep(step)}
                        >
                          Edit
                        </button>
                      </header>
                      <dl className="review-rows">
                        {fields.map(({ name, label }) => {
                          const isMissing = missing.some(
                            (m) => m.name === name
                          );
                          const value = values[name]?.trim();
                          return (
                            <div
                              className={
                                "review-row" + (isMissing ? " missing" : "")
                              }
                              key={name}
                            >
                              <dt>{label}</dt>
                              <dd>{isMissing ? "Required" : value || "—"}</dd>
                            </div>
                          );
                        })}
                      </dl>
                    </section>
                  ))}
                </div>
              </div>
            </div>

            {currentStep === STEPS.length - 1 && firstMissing && (
              <div className="wizard-required-msg" role="alert">
                <WarningIcon size={16} />
                <span>
                  {missing.map((m) => m.label).join(" and ")}{" "}
                  {missing.length === 1 ? "is" : "are"} required
                </span>
                <button
                  type="button"
                  className="fix-now"
                  onClick={() => navigateStep(firstMissing.step)}
                >
                  Fix Now
                </button>
              </div>
            )}

            <div className="wizard-nav">
              <button
                type="button"
                className="btn btn-ghost"
                style={{ visibility: currentStep === 0 ? "hidden" : "visible" }}
                onClick={() => navigateStep(currentStep - 1)}
              >
                <ChevronLeft size={16} /> Back
              </button>
              {currentStep < STEPS.length - 1 ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigateStep(currentStep + 1)}
                >
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={state.submitting || missingRequired}
                >
                  {state.submitting ? "Submitting..." : "Submit"}
                  {missingRequired ? (
                    <WarningIcon size={16} />
                  ) : (
                    <SendIcon size={16} />
                  )}
                </button>
              )}
            </div>
          </form>

          <div className="wizard-dots" role="tablist" aria-label="Form steps">
            {STEPS.map((label, i) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={i === currentStep}
                aria-label={`Step ${i + 1}: ${label}`}
                title={label}
                className={
                  "wizard-dot" +
                  (i === currentStep ? " active" : "") +
                  (i < currentStep ? " completed" : "")
                }
                onClick={() => navigateStep(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
