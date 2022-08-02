import initializeDB from "./initializeDB";
const getUserSession = async () => {
  let sessionDetails = {
    alias: null,
    publicKey: null,
  };
  let dbNode = initializeDB();

  //user DB reference
  let userDB = dbNode.user().recall({ sessionStorage: true });

  let gunSessionDetails = await userDB.is; //userDB.is returns undefined when user is not present

  if (gunSessionDetails?.pub) {
    //if public key is present

    sessionDetails = {
      alias: await userDB.get("alias"), //username
      publicKey: gunSessionDetails.pub,
    };
  }
  //check for user session details in 'session' DB
  return sessionDetails;
};

export default getUserSession;
