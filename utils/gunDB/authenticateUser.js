import initializeDB from "./initializeDB";
const authenticateUser = (userName, password, callBack) => {
  let dbNode = initializeDB();
  //user DB reference
  let userDB = dbNode.user().recall({ sessionStorage: true });
  userDB?.auth(userName, password, callBack);
};

export default authenticateUser;
