import type { ComponentProps } from "react";
import { ErrorMessage } from "./ErrorMessage";

type TFunctionalFormInputProps = {
  label: string;
  errorMessage?: string;
  show?: boolean;
  props: ComponentProps<"input">;
};

export const FunctionalFormInput = (inputProps: TFunctionalFormInputProps) => {
  const { label, errorMessage, show, props } = inputProps;
  return (
    <>
      <div className="input-wrap">
        <label>{label}:</label>
        <input {...props} />
      </div>
      {errorMessage && show !== undefined && (
        <ErrorMessage message={errorMessage} show={show} />
      )}
    </>
  );
};
