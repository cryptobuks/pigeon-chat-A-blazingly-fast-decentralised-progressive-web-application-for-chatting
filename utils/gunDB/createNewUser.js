import initializeDB from "./initializeDB";
const createNewUser = (userName, password, callBack) => {
  let dbNode = initializeDB();
  //user DB reference
  let userDB = dbNode.user();

  userDB.create(userName, password, callBack);
};

export default createNewUser;
