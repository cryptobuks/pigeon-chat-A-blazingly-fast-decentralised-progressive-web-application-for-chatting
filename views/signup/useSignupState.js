import { useState, useEffect } from "react";
import { useGunDB } from "../../context/GunDB/";
import { useRouter } from "next/router";
// import createNewUser from "../../utils/gunDB/createNewUser";
import { createNewUser } from "../../utils/adapters/gunDBAdapters";
import { useFeedback } from "../../context/Feedback";

const useSignupState = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signupError, setSignupError] = useState({
    message: "",
    isError: false,
  });

  const { handleFeedbackConfigUpdate } = useFeedback();
  const clientRouter = useRouter();
  const { userDBRef } = useGunDB();

  useEffect(() => {
    // if (authError.isError) {
    let feedbackObject = {
      open: signupError.isError,
      message: "There was an error registring the user",
      type: "error",
      autoHide: true,
      autoHideTimeOut: 3000,
      toggleOpenCloseHandler: () =>
        setSignupError({ ...signupError, isError: false }),
    };
    handleFeedbackConfigUpdate("signup", feedbackObject);
    // }
  }, [signupError]);

  const handleUserNameOnChange = (e) => {
    setUserName(e.currentTarget.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onUserCreationCB = (userObject) => {
    if (userObject.err) {
      setSignupError({
        message: "Error signing you up. Try again later.",
        isError: true,
      });
      return;
    }

    //on successfull creation go to login

    clientRouter.push("/login");
  };

  const handleOnSignup = () => {
    createNewUser({ userName, password }, userDBRef, onUserCreationCB);
  };

  return {
    userName,
    password,
    signupError,
    handleUserNameOnChange,
    handlePasswordOnChange,
    handleOnSignup,
  };
};

export default useSignupState;
