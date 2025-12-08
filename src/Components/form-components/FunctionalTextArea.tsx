import { ErrorMessage } from "./ErrorMessage";

export const FunctionalTextArea = ({
  label,
  errorMessage,
  show,
  props,
}: {
  label: string;
  errorMessage: string;
  show: boolean;
  props: React.ComponentProps<"textarea">;
}) => {
  return (
    <>
      <div className="input-wrap">
        <label>{label}:</label>
        <textarea {...props} />
      </div>
      <ErrorMessage message={errorMessage} show={show} />
    </>
  );
};
