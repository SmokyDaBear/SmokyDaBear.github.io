import "./ContactForm.css";
import { useForm } from "@formspree/react";
import { formspreeId } from "../../data/site";
import { MailIcon, SendIcon } from "../../lib/icons";
import { TextFields } from "../FormControls/FormControls";
import { ScheduleCallField } from "../DatePicker/DatePicker";

export function ContactForm() {
  const [state, handleSubmit] = useForm(formspreeId);

  if (state.succeeded) {
    return (
      <div className="contact-form contact-success">
        <span className="contact-icon">
          <SendIcon size={28} />
        </span>
        <h3>Thank you!</h3>
        <p>
          Your message has been sent successfully. I will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <span className="contact-icon">
        <MailIcon size={28} />
      </span>
      <h3>Contact Me</h3>
      <p className="contact-blurb">
        Fill out this form to get in touch. I'm always open to new projects, so
        don't hesitate to reach out.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <TextFields
            state={state}
            inputs={[
              { id: "first-name", label: "First Name", required: true },
              { id: "last-name", label: "Last Name" },
              {
                id: "email",
                label: "Email",
                type: "email",
                required: true,
                placeholder: "email@example.com",
              },
              {
                id: "phone",
                label: "Phone",
                type: "tel",
                placeholder: "(123) 456-7890",
              },
              {
                id: "message",
                label: "Message",
                type: "textarea",
                required: true,
                fullWidth: true,
                placeholder: "Your message here...",
              },
            ]}
          />
          <ScheduleCallField />
        </div>
        <button
          type="submit"
          className="btn btn-primary contact-submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
          <SendIcon size={16} />
        </button>
      </form>
    </div>
  );
}
