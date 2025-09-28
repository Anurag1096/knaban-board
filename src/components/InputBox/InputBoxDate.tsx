import Styles from "@/components/InputBox/InputBoxDate.module.css";

interface InputBoxDateState {
  name: string;
  id?: string;
  min?: string;
  value: string;
  max?: string;
  required?: boolean;
  readonly: boolean;
  handleChange?: () => void;
}

const InputBoxDate = ({
  id,
  value,
  name,
  min,
  max,
  required,
  handleChange,
  readonly,
}: InputBoxDateState) => {
  return (
    <>
      <input
        type="date"
        id={id}
        name={name}
        value={value}
        className={Styles["input--date"]}
        onChange={handleChange}
        required={required}
        min={min}
        max={max}
        readOnly={readonly}
      />
    </>
  );
};

export default InputBoxDate;
