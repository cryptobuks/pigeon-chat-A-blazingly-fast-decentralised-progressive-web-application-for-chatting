import { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import { useGunDB } from "../../context/GunDB";
import {
  getAllMessages,
  createNewMessage,
} from "../../utils/adapters/gunDBAdapters";

const useChatState = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isNewMessage, setIsNewMessage] = useState(false);

  const { chatDBRef } = useGunDB();
  const { userDetails } = useAuth();

  useEffect(() => {
    //when the component loads, initialize chat DB
    getAllMessages(chatDBRef, getAllMessagesCallback);
  }, [chatDBRef]);

  useEffect(() => {
    if (isNewMessage) {
      getAllMessages(chatDBRef, getAllMessagesCallback);
      setIsNewMessage(false);
    }
  }, [isNewMessage]);

  //handlers
  const handleMessageTyping = (e) => setUserMessage(e.currentTarget.value);

  const handleMessageSend = async () => {
    createNewMessage(chatDBRef, userMessage, userDetails);
    setUserMessage("");
    setIsNewMessage(true);
  };

  function getAllMessagesCallback(allMessages) {
    setMessages(allMessages);
  }

  function checkDB() {
    getAllMessages(chatDBRef, getAllMessagesCallback);
  }

  return {
    messages,
    userMessage,
    handleMessageTyping,
    handleMessageSend,
    checkDB,
  };
};

export default useChatState;
