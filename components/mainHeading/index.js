import styles from "./mainHeading.module.css";

const MainHeading = ({ text }) => {
  return <h1 className={styles.main_heading}>{text}</h1>;
};

export default MainHeading;
