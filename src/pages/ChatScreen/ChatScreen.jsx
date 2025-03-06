import ChatBox from "components/ChatScreen/ChatBox/ChatBox";
import classes from "./ChatScreen.module.css";
const ChatScreen = () => {
  return (
    <div className={classes.wrapper}>
      <ChatBox />
    </div>
  );
};
export default ChatScreen;
