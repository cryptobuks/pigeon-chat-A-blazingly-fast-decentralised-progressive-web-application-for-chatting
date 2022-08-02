import styles from "./formInput.module.css";

const FormInput = ({
  type = "text",
  onChange = () => {},
  value = "",
  label = "",
}) => {
  return (
    <div className={styles.form_input_wrapper}>
      {label ? (
        <label>
          <p className={styles.form_label}>{label}</p>
          <input
            value={value}
            onChange={onChange}
            className={styles.form_input}
            type={type}
          />
        </label>
      ) : (
        <input
          value={value}
          onChange={onChange}
          className={styles.form_input}
          type={type}
        />
      )}
    </div>
  );
};

export default FormInput;
