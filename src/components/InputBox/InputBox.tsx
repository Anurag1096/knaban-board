import Styles from "@/components/InputBox/InputBox.module.css";

interface InputBoxState extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "text" | "textarea" | "email" | "password" | "search" | "number";
  inputName: string;
  disabled?: boolean;
  value: string;
  required: boolean;
  readonly: boolean;
  placeholder?: string;
  autocomplete: string;
  id?: string;
  handleChagne?: () => void;
}

export const InputBox = ({
  variant = "text",
  placeholder = "Enter",
  inputName,
  required,
  id,
  autocomplete,
  disabled,
  readonly,
  value,
  handleChagne,
}: InputBoxState) => {
  return (
    <input
      id={id}
      type={variant}
      name={inputName}
      value={value}
      onChange={handleChagne}
      placeholder={placeholder}
      className={Styles["input--box"]}
      autoComplete={autocomplete}
      disabled={disabled}
      readOnly={readonly}
      required={required}
    />
  );
};
// --------------------------------------