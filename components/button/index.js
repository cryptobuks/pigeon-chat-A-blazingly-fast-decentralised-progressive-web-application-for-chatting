import styles from "./button.module.css";

const Button = ({
  onClick = () => {},
  label = "button",
  variant = "primary",
}) => {
  const variantToClassMap = {
    primary: "button_bg_primary",
    secondary: "button_bg_secondary",
  };

  return (
    <button
      className={`
      ${styles.button} 
      ${
        variantToClassMap[variant]
          ? styles[variantToClassMap[variant]]
          : styles[variantToClassMap["primary"]] //default
      }`}
      onClick={onClick}
    >
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
