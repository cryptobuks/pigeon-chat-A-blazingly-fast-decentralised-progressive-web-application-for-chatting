import initializeDB from "./initializeDB";
const logoutUser = () => {
  let dbNode = initializeDB();
  //user DB reference
  let userDB = dbNode.user();

  userDB.leave();
};

export default logoutUser;
