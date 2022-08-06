import styles from "./navigationBar.module.css";

import { useAuth } from "../../context/Auth";
import Button from "../button";

const NavigationBar = () => {
  const { userDetails, handleUserLogout } = useAuth();

  console.log("User details in navbar...", userDetails);

  return (
    <div className={styles.component_wrapper}>
      <h4>{userDetails.alias || "You are not logged in"}</h4>
      <Button label="logout" variant="secondary" onClick={handleUserLogout} />
    </div>
  );
};

export default NavigationBar;
