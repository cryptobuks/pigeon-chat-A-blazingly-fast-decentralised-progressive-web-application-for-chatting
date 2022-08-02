import styles from "../../styles/login.module.css";
import useLoginState from "./useLoginState";

import Button from "../../components/button";
import FormInput from "../../components/formInput";
import MainHeading from "../../components/mainHeading";

const LoginView = () => {
  let {
    userName,
    password,
    authError,
    handleUserNameOnChange,
    handlePasswordOnChange,
    handleOnLogin,
  } = useLoginState();
  return (
    <div className={styles.page_wrapper}>
      <main className={styles.form_wrapper}>
        <MainHeading text="Login to your profile" />
        {authError.isError && <h3>{authError.message}</h3>}
        <FormInput
          label="Your username "
          value={userName || ""}
          onChange={handleUserNameOnChange}
        />
        <FormInput
          value={password || ""}
          type="password"
          onChange={handlePasswordOnChange}
          label="Your password"
        />
        {/* <button onClick={handleOnLogin}>Login</button> */}
        <div className={styles.button_container}>
          <Button label="Login" onClick={handleOnLogin} />
        </div>
      </main>
    </div>
  );
};

export default LoginView;
