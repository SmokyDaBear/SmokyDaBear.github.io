type TShowPasswordCheckBoxProps = {
  label?: string;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
};

export function ShowPasswordCheckBox({
  label,
  showPassword,
  setShowPassword,
}: TShowPasswordCheckBoxProps) {
  return (
    <>
      <label htmlFor="show-password">
        <input
          type="checkbox"
          checked={showPassword}
          onChange={(e) => setShowPassword(e.target.checked)}
        />{" "}
        {label ? label : "Show Password"}
      </label>
    </>
  );
}
