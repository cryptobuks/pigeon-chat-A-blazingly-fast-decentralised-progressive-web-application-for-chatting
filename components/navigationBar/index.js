import styles from "./navigationBar.module.css";

import { useAuth } from "../../context/Auth";
import Button from "../button";

const NavigationBar = () => {
  const { userDetails, handleUserLogout } = useAuth();

  return (
    <div className={styles.component_wrapper}>
      <h4>{userDetails.alias || "You are not logged in"}</h4>
      <Button label="logout" variant="secondary" />
    </div>
  );
};

export default NavigationBar;
