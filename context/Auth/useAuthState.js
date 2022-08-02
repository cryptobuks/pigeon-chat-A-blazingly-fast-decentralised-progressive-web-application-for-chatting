import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  checkUserSession,
  getUserDetailsFromDB,
  authenticateUser,
  logoutUser,
} from "../../utils/adapters/authAdapters";
import { useGunDB } from "../GunDB/index.js";

const initialUserState = {
  alias: null,
  publicKey: null,
};

const initialErrorState = {
  isError: false,
  message: null,
};

const userNotPresentState = {
  alias: "",
  publicKey: "",
};

const useAuthState = () => {
  const [userDetails, setUserDetails] = useState(initialUserState);
  const [authError, setAuthError] = useState(initialErrorState);
  const [authLoading, setAuthLoading] = useState(true);
  const { userDBRef } = useGunDB();
  const clientRouter = useRouter();

  useEffect(() => {
    setAuthLoading(true);
    //set user details based on exisiting session, if any
    (async () => {
      if (userDetails.alias === null || userDetails.alias.length === 0) {
        console.log("Session details are present...");
        let isSession = await checkUserSession(userDBRef);
        if (isSession) {
          console.log("Setting user details from session...");
          setUserDetails(await getUserDetailsFromDB(userDBRef));
        } else {
          console.log('Setting user details as "no user"..');
          setUserDetails(userNotPresentState);
        }
      }
      setAuthLoading(false);
    })();
  }, [userDBRef]);

  const handleUserLogout = () => {
    console.log(`Loggin out ${userDetails.alias}...`);
    logoutUser(userDBRef);
    setUserDetails(userNotPresentState);
    clientRouter.push("/login");
  };

  const handleAuthenticationCallback = (userObject) => {
    //if authentication fails
    if (userObject.err) {
      setAuthError({ message: "Invalid Credentials", isError: true });
      return;
    }
    clientRouter.push("/chat");
  };
  const handleUserLogin = (userName, password) => {
    authenticateUser(
      { userName, password },
      userDBRef,
      handleAuthenticationCallback
    );
  };

  return {
    userDetails,
    authError,
    authLoading,
    setUserDetails,
    handleUserLogout,
    handleUserLogin,
  };
};

export default useAuthState;
