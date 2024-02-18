import styles from "./input.module.css";

interface InputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: any) => void;
  className?: string;
}

export const Input = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  className = "",
}: InputProps) => {
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e?.target?.value);
    }
  };

  return (
    <input
      type={type}
      id={id}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={handleChanges}
    />
  );
};
