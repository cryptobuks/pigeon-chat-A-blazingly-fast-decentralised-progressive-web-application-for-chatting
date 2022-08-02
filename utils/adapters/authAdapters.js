export const checkUserSession = async (userDBReference) => {
  let userDetails = await userDBReference?.is;
  return userDetails?.pub ? true : false;
};

export const getUserDetailsFromDB = async (userDBReference) => {
  let userName = await userDBReference?.get("alias");
  let publicKey = await userDBReference?.is?.pub;

  return {
    alias: userName,
    publicKey,
  };
};

export const authenticateUser = async (
  userDetails,
  userDBReference,
  authenticationCallback
) => {
  //works callback style
  userDBReference.auth(
    userDetails.userName,
    userDetails.password,
    authenticationCallback
  );
};

export const logoutUser = async (userDBReference) => {
  userDBReference.leave();
};
