import { ErrorMessage } from "./ErrorMessage";
import { useState } from "react";
import { ShowPasswordCheckBox } from "./ShowPasswordCheckBox";

type TPasswordInputProps = {
  label: string;
  errorMessage: string;
  show: boolean;
  props: React.ComponentProps<"input">;
  hasSharedState?: boolean;
  currentSharedState?: boolean;
};

export function PasswordInput({
  label,
  errorMessage,
  show,
  props,
  hasSharedState,
  currentSharedState,
}: TPasswordInputProps) {
  const [showPassword, setShowPassword] = useState(
    hasSharedState && currentSharedState !== undefined
      ? currentSharedState
      : false
  );
  return (
    <div className="password-input-container">
      <div className="input-wrap">
        <label htmlFor={label}>{label}</label>
        <input {...props} type={showPassword ? "text" : "password"} />
        <ErrorMessage message={errorMessage} show={show} />
      </div>
      {!hasSharedState && (
        <ShowPasswordCheckBox
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      )}
    </div>
  );
}
