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
  const [authRedirect, setAuthRedirect] = useState(false);
  const { userDBRef } = useGunDB();
  const clientRouter = useRouter();

  console.log("Yawa...", userDetails);

  useEffect(() => {
    //client.push doesn't run this
    setAuthLoading(true);
    //set user details based on exisiting session, if any
    (async () => {
      if (userDetails.alias === null || userDetails.alias.length === 0) {
        console.log("Session details are not present...");
        let isSession = await checkUserSession(userDBRef);
        if (isSession) {
          console.log("Setting user details from session...");
          let sessionUserDetails = await getUserDetailsFromDB(userDBRef);
          setUserDetails(sessionUserDetails);
        } else {
          console.log('Setting user details as "no user"..');
          setUserDetails(userNotPresentState);
        }
      }
      setAuthLoading(false);
    })();
  }, [userDBRef, authRedirect]);

  const handleUserLogout = () => {
    logoutUser(userDBRef);
    setUserDetails(userNotPresentState);
    clientRouter.push("/login");
  };

  const handleAuthenticationCallback = async (userObject) => {
    //if authentication fails
    if (userObject.err) {
      setAuthError({ message: "Invalid Credentials", isError: true });
      return;
    }
    clientRouter.push("/chat");
    let sessionUserDetails = await getUserDetailsFromDB(userDBRef);
    setUserDetails(sessionUserDetails);
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
    setAuthRedirect,
    setAuthError,
    setUserDetails,
    handleUserLogout,
    handleUserLogin,
  };
};

export default useAuthState;
