import styles from "../../styles/signup.module.css";
import useSingupState from "./useSignupState";

import MainHeading from "../../components/mainHeading";
import FormInput from "../../components/formInput";
import Button from "../../components/button";

const SingupView = () => {
  const {
    userName,
    password,
    signupError,
    handleUserNameOnChange,
    handlePasswordOnChange,
    handleOnSignup,
  } = useSingupState();

  return (
    <div className={styles.page_wrapper}>
      <main className={styles.form_wrapper}>
        <MainHeading text="Sign in to a blazingly fast experience" />
        {signupError.isError && <h4>{signupError.message}</h4>}
        <FormInput value={userName || ""} onChange={handleUserNameOnChange} />
        <FormInput
          value={password || ""}
          type="password"
          onChange={handlePasswordOnChange}
        />
        <div className={styles.button_wrapper}>
          <Button label="SignUp" onClick={handleOnSignup} variant="secondary" />
        </div>
      </main>
    </div>
  );
};

export default SingupView;
