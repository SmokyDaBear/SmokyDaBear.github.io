import { useState } from "react";
import type { TFaq } from "../types";
import { faqs } from "../data";
import { SearchBar } from "../Components/SearchBar";
import { chevronDown, chevronRight } from "../icons/icons";

export function FaqCard({
  question,
  answer,
  open,
  onClick,
}: TFaq & { open?: boolean; onClick?: () => void }) {
  return (
    <div className={"faq-card" + (open ? " open" : "")} onClick={onClick}>
      <h3 className="faq-question flex-row align-start">
        <span>{open ? chevronDown("small") : chevronRight("small")}</span>{" "}
        {question}
      </h3>
      <p>{answer}</p>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="section-subtitle">
        Find answers to common questions about my services and processes.
      </div>
      <p className="section-subtitle">
        {" "}
        Don't see your answer here? Try searching, or send me a message.
      </p>
      <div className="center-flex">
        <SearchBar />
      </div>
      <br />
      {faqs.map((faq, index) => (
        <FaqCard
          key={index}
          question={faq.question}
          answer={faq.answer}
          open={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
