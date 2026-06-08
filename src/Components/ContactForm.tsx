import { useForm, ValidationError } from "@formspree/react";
import { email as emailIcon, paperAirplane } from "../icons/icons";


export function ContactForm() {
  const [state, handleSubmit] = useForm("mblqpgql");

  if (state.succeeded) {
    return (
      <>

        <div className="form-container">
          <h2>Thank You!</h2>
          {paperAirplane("large")}
          <p>
            Your message has been sent successfully. I will get back to you
            soon.
          </p>
        </div>
      </>
    );
  }

  return (
    <>

      <div
        className="form-container"

      >
        <div className="form-icon-wrap">
          {emailIcon("large")}
        </div>
        <h2>Contact Me</h2>
        <p>
          Fill out this form to get in touch with me. I'm always open to new
          projects so don't hesitate to reach out.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              type="text"
              name="first-name"
              required
              placeholder="First name"
            />
            <ValidationError
              prefix="First Name"
              field="first-name"
              errors={state.errors}
            />
          </div>

          <div className="input-wrap">
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              name="last-name"
              placeholder="Last name"
            />
            <ValidationError
              prefix="Last Name"
              field="last-name"
              errors={state.errors}
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="email@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="input-wrap">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="(123) 456-7890"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className="input-wrap full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message here..."
              maxLength={1000}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="square-btn bg-shift submit-btn"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"} {paperAirplane("small")}
          </button>
        </form>
      </div>
    </>
  );
}
