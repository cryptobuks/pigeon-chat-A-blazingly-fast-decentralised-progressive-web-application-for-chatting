import styles from "../../styles/chat.module.css";

import NavigationBar from "../../components/navigationBar";
import ChatBubble from "../../components/chatBubble";

import useChatState from "./useChatState";
import MessageInput from "../../components/messageInput";
import MainHeading from "../../components/mainHeading";

const ChatView = () => {
  const {
    messages,
    userMessage,
    checkDB,
    handleMessageTyping,
    handleMessageSend,
  } = useChatState();
  return (
    <div className={styles.page_wrapper}>
      <section className={styles.navigation_wrapper}>
        <NavigationBar />
      </section>
      <main className={styles.content_wrapper}>
        <section className={styles.conversation_wrapper}>
          {messages.length ? (
            <>
              {messages.map((chatObject) => (
                <ChatBubble
                  key={`${chatObject.dttm}_${Math.random()}`}
                  textMessage={chatObject.message}
                  timeInNonISOFormat={chatObject.dttm}
                  author={chatObject.alias}
                />
              ))}
            </>
          ) : (
            <div className={styles.conversation_empty_state}>
              <MainHeading text="Strike a converstation" />
            </div>
          )}
        </section>
        <section className={styles.user_actions_wrapper}>
          <MessageInput
            onMessageType={handleMessageTyping}
            onMessageSend={handleMessageSend}
            value={userMessage}
          />
        </section>
      </main>
    </div>
  );
};

export default ChatView;
