import "./FormControls.css";
import { ValidationError } from "@formspree/react";
import { useState } from "react";
import type {
  FieldValues,
  SubmissionError,
  SubmissionSuccess,
} from "@formspree/core";

export type FormState = {
  errors: SubmissionError<FieldValues> | null;
  result: SubmissionSuccess | null;
  submitting: boolean;
  succeeded: boolean;
};

export type TextFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
};

export function TextField({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  fullWidth = false,
  state,
}: TextFieldProps & { state: FormState }) {
  const [filled, setFilled] = useState(false);
  const showMarker = required && !filled;
  const trackFill = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFilled(e.target.value.trim().length > 0);

  const labelEl = (
    <label className="field-label" htmlFor={id}>
      {label}
      {showMarker && (
        <span className="required-marker" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );

  return (
    <div className={"field" + (fullWidth ? " full-width" : "")}>
      {labelEl}
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder ?? label}
          required={required}
          maxLength={5000}
          onChange={trackFill}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder ?? label}
          required={required}
          maxLength={type === "email" ? 254 : type === "tel" ? 20 : 200}
          onChange={trackFill}
        />
      )}
      <ValidationError prefix={label} field={id} errors={state.errors} />
    </div>
  );
}

export function TextFields({
  state,
  inputs,
}: {
  state: FormState;
  inputs: TextFieldProps[];
}) {
  return (
    <>
      {inputs.map((input) => (
        <TextField key={input.id} {...input} state={state} />
      ))}
    </>
  );
}

function CheckMark() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Button-based single or multi select. Submits its value through a
 * hidden input so it works with Formspree like a native field.
 */
export function ChoiceField({
  id,
  label,
  options,
  state,
  multiple = false,
  required = false,
  fullWidth = false,
  allowCustom = false,
  customPlaceholder = "Please specify...",
  onSelect,
}: {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  state: FormState;
  multiple?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  allowCustom?: boolean;
  customPlaceholder?: string;
  onSelect?: (value: string) => void;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [customValue, setCustomValue] = useState("");

  const pick = (value: string) => {
    setSelected((prev) => {
      if (multiple) {
        return prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value];
      }
      return [value];
    });
    onSelect?.(value);
  };

  const customActive = selected.includes("custom");
  const submitValue = [
    ...selected.filter((v) => v !== "custom"),
    ...(customActive && customValue ? [customValue] : []),
  ].join(", ");

  const renderOption = (value: string, optionLabel: string) => {
    const isSelected = selected.includes(value);
    return (
      <button
        type="button"
        key={value}
        className={"choice" + (isSelected ? " selected" : "")}
        onClick={() => pick(value)}
        role="option"
        aria-selected={isSelected}
      >
        <span className="choice-check">{isSelected && <CheckMark />}</span>
        <span>{optionLabel}</span>
      </button>
    );
  };

  return (
    <div className={"field" + (fullWidth ? " full-width" : "")}>
      <span className="field-label">{label}</span>
      <div
        className="choice-list"
        role="listbox"
        aria-label={label}
        aria-multiselectable={multiple || undefined}
      >
        {options.map((option) => renderOption(option.value, option.label))}
        {allowCustom && renderOption("custom", "Other")}
      </div>
      {customActive && (
        <input
          type="text"
          className="custom-input"
          placeholder={customPlaceholder}
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          aria-label={`${label} — custom value`}
          maxLength={200}
        />
      )}
      <input
        type="hidden"
        name={id}
        value={submitValue}
        required={required && submitValue.length === 0}
      />
      <ValidationError prefix={label} field={id} errors={state.errors} />
    </div>
  );
}
