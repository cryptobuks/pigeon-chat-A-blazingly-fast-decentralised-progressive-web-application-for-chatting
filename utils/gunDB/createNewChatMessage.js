import initializeDB from "./initializeDB";
const createNewChatMessage = async (messageString) => {
  let dbNode = initializeDB();
  let allMessages = dbNode.get("chatroom");
  console.log("Creating new messages...");
  allMessages.set({
    message: messageString,
  });
};

export default createNewChatMessage;
