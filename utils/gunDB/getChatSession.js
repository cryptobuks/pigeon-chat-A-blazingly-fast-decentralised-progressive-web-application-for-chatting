import initializeDB from "./initializeDB";
const getChatSession = async (callBack) => {
  let dbNode = initializeDB();
  let allMessages = dbNode.get("chatroom");
  console.log("Fetching new messages...");
  let messagesGG = [];
  allMessages.map().on((data) => {
    if (data.message) {
      callBack(data.message);
      CreateNewMessageArray(data.message, messagesGG);
    }
  });
  console.log("All messages", messagesGG);
};

function CreateNewMessageArray(newMessage, existingMessageArray) {
  console.log("All message", newMessage, existingMessageArray);
  existingMessageArray.push(newMessage);
}

export default getChatSession;
