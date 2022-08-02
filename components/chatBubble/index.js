import { useAuth } from "../../context/Auth";
import styles from "./chatBubble.module.css";

const ChatBubble = ({ textMessage, timeInNonISOFormat, author = "You" }) => {
  let { userDetails } = useAuth();

  const selfText = userDetails.alias === author;

  const getPublishedTime = (timeNumber) => {
    let isoDTTM = new Date(timeNumber).toISOString();
    let dttmArray = isoDTTM.split("T");
    return `${dttmArray[0]} ${dttmArray[1].slice(0, 5)}`;
  };
  return (
    <div
      className={`${styles.component_wrapper} ${
        !selfText && styles.component_wrapper__alternate
      }`}
    >
      {!selfText && (
        <section className={styles.author_name_wrapper}>
          <p className={styles.author_name_text}>{author}</p>
        </section>
      )}
      <section className={styles.text_message_wrapper}>
        <p
          className={`${styles.text_message} ${
            selfText && styles.text_message__alternate
          }`}
        >
          {textMessage}
        </p>
      </section>
      <section className={styles.text_metadata_wrapper}>
        <p
          className={`${styles.text_dttm} ${
            selfText && styles.text_dttm__alternate
          }`}
        >
          {getPublishedTime(timeInNonISOFormat)}
        </p>
      </section>
    </div>
  );
};

export default ChatBubble;
