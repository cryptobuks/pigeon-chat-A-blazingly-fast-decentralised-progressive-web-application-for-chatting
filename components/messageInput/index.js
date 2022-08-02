import Button from "../button";
import styles from "./messageInput.module.css";

const MessageInput = ({
  onMessageType = () => {},
  onMessageSend = () => {},
  value = "",
}) => {
  return (
    <div className={styles.component_wrapper}>
      <input
        onChange={onMessageType}
        className={styles.message_input}
        value={value}
      />
      <Button onClick={onMessageSend} label="send" />
    </div>
  );
};

export default MessageInput;
