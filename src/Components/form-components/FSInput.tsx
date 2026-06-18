import { ValidationError } from "@formspree/react";
import { useState } from "react";

import type {
  SubmissionError,
  SubmissionSuccess,
  FieldValues,
} from "@formspree/core";

type FormState = {
  errors: SubmissionError<FieldValues> | null;
  result: SubmissionSuccess | null;
  submitting: boolean;
  succeeded: boolean;
};

type inputProps = {
  id: string;
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  type?: string;
  required?: boolean;
};

interface FSInput {
  state: FormState;
  inputs: inputProps[];
  question?: string;
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
}

export function FSInputSingle({
  id,
  label,
  type,
  required,
  fullWidth,
  placeholder,
  state,
}: inputProps & { state: FormState }) {
  const [isFilled, setIsFilled] = useState(false);
  const showAsterisk = required && !isFilled;
  const trackFill = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setIsFilled(e.target.value.trim().length > 0);

  if (type === "textarea") {
    return (
      <div className={`input-wrap ${fullWidth ? " full-width" : ""}`}>
        <label htmlFor={id}>{label}{showAsterisk && <span className="required-marker" aria-hidden="true"> *</span>}</label>
        <textarea
          id={id}
          name={id}
          placeholder={placeholder || label}
          required={required || false}
          maxLength={5000}
          onChange={trackFill}
        />
        <ValidationError prefix={label} field={id} errors={state.errors} />
      </div>
    );
  }
  return (
    <>
      <div className={`input-wrap ${fullWidth ? "full-width" : ""}`}>
        <label htmlFor={id}>{label}{showAsterisk && <span className="required-marker" aria-hidden="true"> *</span>}</label>
        <input
          id={id}
          type={type || "text"}
          name={id}
          placeholder={placeholder || label}
          required={required || false}
          maxLength={type === "email" ? 254 : type === "tel" ? 15 : 100}
          onChange={trackFill}
        />
        <ValidationError prefix={label} field={id} errors={state.errors} />
      </div>
    </>
  );
}

export function FSInput({
  state,
  inputs,
  question,
  placeholder,
  required,
  fullWidth = false,
}: FSInput) {
  return (
    <>
      {question && <p>{question}</p>}

      {inputs.map((input) => (
        <FSInputSingle
          key={input.id}
          id={input.id}
          label={input.label}
          type={input.type}
          required={input.required || required}
          fullWidth={input.fullWidth || fullWidth}
          placeholder={input.placeholder || placeholder}
          state={state}
        />
      ))}
    </>
  );
}

export function FSSelect({
  id,
  label,
  options,
  required,
  fullWidth,
  state,
  multiple = false,
  allowCustom = false,
  customPlaceholder = "Please specify...",
}: {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  fullWidth?: boolean;
  state: FormState;
  multiple?: boolean;
  allowCustom?: boolean;
  customPlaceholder?: string;
}) {
  if (!multiple) {
    return (
      <FSSingleSelect
        id={id}
        label={label}
        options={options}
        fullWidth={fullWidth}
        required={required}
        state={state}
        allowCustom={allowCustom}
        customPlaceholder={customPlaceholder}
      />
    );
  }

  // Multi-select custom UI with checkboxes
  return (
    <FSMultiSelect
      id={id}
      label={label}
      options={options}
      fullWidth={fullWidth}
      required={required}
      state={state}
      allowCustom={allowCustom}
      customPlaceholder={customPlaceholder}
    />
  );
}

// Separate components to keep FSSelect clean

export function FSSingleSelect({
  id,
  label,
  options,
  required,
  fullWidth,
  state,
  allowCustom = false,
  customPlaceholder = "Please specify...",
  onSelect,
}: {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  fullWidth?: boolean;
  state: FormState;
  allowCustom?: boolean;
  customPlaceholder?: string;
  onSelect?: (value: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [customValue, setCustomValue] = useState("");

  return (
    <div className={`input-wrap ${fullWidth ? " full-width" : ""}`}>
      <label>{label}</label>
      <div className="multi-select" role="listbox" aria-label={label}>
        {options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <button
              type="button"
              key={option.value}
              className={`multi-option ${isSelected ? "selected" : ""}`}
              onClick={() => { setSelected(option.value); onSelect?.(option.value); }}
              role="option"
              aria-selected={isSelected}
            >
              <span className="check-box" aria-hidden="true">
                {isSelected && (
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 4"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className="option-label">{option.label}</span>
            </button>
          );
        })}
        {allowCustom && (
          <button
            type="button"
            className={`multi-option ${selected === "custom" ? "selected" : ""
              }`}
            onClick={() => { setSelected("custom"); onSelect?.("custom"); }}
          >
            <span className="check-box" aria-hidden="true">
              {selected === "custom" && (
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5L6.5 12L13 4"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span className="option-label">"Other"</span>
          </button>
        )}
      </div>
      {allowCustom && selected === "custom" && (
        <input
          type="text"
          placeholder={customPlaceholder}
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          className="custom-input"
          aria-label="Custom value"
          maxLength={200}
        />
      )}
      {/* Hidden input carries single value for form submission */}
      <input
        type="hidden"
        name={id}
        value={
          selected === "custom" && customValue ? customValue : selected ?? ""
        }
        required={
          required && (!selected || (selected === "custom" && !customValue))
        }
      />
      <ValidationError prefix={label} field={id} errors={state.errors} />
    </div>
  );
}

function FSMultiSelect({
  id,
  label,
  options,
  required,
  fullWidth,
  state,
  allowCustom = false,
  customPlaceholder = "Please specify...",
}: {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  fullWidth?: boolean;
  state: FormState;
  allowCustom?: boolean;
  customPlaceholder?: string;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [customValue, setCustomValue] = useState("");

  const toggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className={`input-wrap ${fullWidth ? " full-width" : ""}`}>
      <label>{label}</label>
      <div
        className="multi-select"
        role="listbox"
        aria-multiselectable="true"
        aria-label={label}
      >
        {options.map((option) => {
          const isSelected = selected.includes(option.value);
          return (
            <button
              type="button"
              key={option.value}
              className={`multi-option ${isSelected ? "selected" : ""}`}
              onClick={() => toggle(option.value)}
              role="option"
              aria-selected={isSelected}
            >
              <span className="check-box" aria-hidden="true">
                {isSelected && (
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 4"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className="option-label">{option.label}</span>
            </button>
          );
        })}
        {allowCustom && (
          <button
            type="button"
            className={`multi-option ${selected.includes("custom") ? "selected" : ""
              }`}
            onClick={() => toggle("custom")}
          >
            <span className="check-box" aria-hidden="true">
              {selected.includes("custom") && (
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5L6.5 12L13 4"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span className="option-label">"Other"</span>
          </button>
        )}
      </div>
      {allowCustom && selected.includes("custom") && (
        <input
          type="text"
          placeholder={customPlaceholder || "Please Specify..."}
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          className="custom-input"
          aria-label="Custom value"
          maxLength={200}
        />
      )}
      {/* Hidden input carries comma-separated values for form submission */}
      <input
        type="hidden"
        name={id}
        value={[
          ...selected.filter((v) => v !== "custom"),
          ...(selected.includes("custom") && customValue ? [customValue] : []),
        ].join(",")}
        required={
          required &&
          (selected.length === 0 ||
            (selected.includes("custom") && !customValue))
        }
      />
      <ValidationError prefix={label} field={id} errors={state.errors} />
    </div>
  );
}
