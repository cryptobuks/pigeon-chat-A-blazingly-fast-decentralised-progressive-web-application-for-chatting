import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { useFeedback } from "../../context/Feedback";

const useLoginState = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const { handleUserLogin, authError, setAuthError } = useAuth();
  const { handleFeedbackConfigUpdate } = useFeedback();

  useEffect(() => {
    // if (authError.isError) {
    let feedbackObject = {
      open: authError.isError,
      message: "There was an error login in the user",
      type: "error",
      autoHide: true,
      autoHideTimeOut: 3000,
      toggleOpenCloseHandler: () =>
        setAuthError({ ...authError, isError: false }),
    };
    handleFeedbackConfigUpdate("login", feedbackObject);
    // }
  }, [authError]);

  const handleUserNameOnChange = (e) => {
    setUserName(e.currentTarget.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleOnLogin = () => {
    handleUserLogin(userName, password);
  };

  return {
    userName,
    password,
    handleUserNameOnChange,
    handlePasswordOnChange,
    handleOnLogin,
  };
};

export default useLoginState;
