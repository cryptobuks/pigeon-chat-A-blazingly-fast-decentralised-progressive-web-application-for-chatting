import { useState, useEffect } from "react";
import { useGunDB } from "../../context/GunDB/";
import { useRouter } from "next/router";
// import createNewUser from "../../utils/gunDB/createNewUser";
import { createNewUser } from "../../utils/adapters/gunDBAdapters";

const useSignupState = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signupError, setSignupError] = useState({
    message: "",
    isError: false,
  });
  const clientRouter = useRouter();
  const { userDBRef } = useGunDB();

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
