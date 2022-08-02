import { useState } from "react";
import { useAuth } from "../../context/Auth";

const useLoginState = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const { handleUserLogin, authError } = useAuth();

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
    authError,
    handleUserNameOnChange,
    handlePasswordOnChange,
    handleOnLogin,
  };
};

export default useLoginState;
