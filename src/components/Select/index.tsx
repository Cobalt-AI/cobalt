import styles from "./select.module.css";

interface InputProps {
  id?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: string) => void;
  className?: string;
  dataOptions?: string[];
}

export const Select = ({
  id,
  placeholder,
  value,
  onChange,
  className = "",
  dataOptions = [],
}: InputProps) => {
  const handleChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <select
      id={id}
      className={`${styles.input} ${className}`}
      value={value}
      onChange={handleChanges}
    >
      <option selected disabled hidden>
        {placeholder}
      </option>
      {dataOptions.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
