import Dropdown from "pages/ManageAccount/Dropdown/Dropdown";
import classes from "./Sidebar.module.css";
import { useState } from "react";
import clsx from "clsx";
import { Text } from "components/common";
import { IoMdMore } from "react-icons/io";
const SingleChat = ({ chat }) => {
  //chat modify dropdown
  const [activeChat, setActiveChat] = useState("");
  const handleActiveChat = (chat) => {
    setActiveChat(chat);
  };
  const [showChatModifyDropdown, setShowChatModifyDropdown] = useState(false);
  const [selectedChatModifyAction, setSelectedChatModifyAction] =
    useState("Edit");
  return (
    <div
      className={clsx(
        activeChat === chat && classes.activeChatContainer,
        classes.chatContainer
      )}
    >
      <Text
        primitive200
        sm
        className={clsx(classes.chat)}
        onClick={() => handleActiveChat(chat)}
      >
        {chat}
      </Text>
      <Dropdown
        sm
        items={["Rename", "Delete"]}
        isActive={showChatModifyDropdown}
        setIsActive={setShowChatModifyDropdown}
        selectedValue={selectedChatModifyAction}
        onSelect={(val) => setSelectedChatModifyAction(val)}
      >
        <button
          className={classes.moreButton}
          onClick={() => setShowChatModifyDropdown((prev) => !prev)}
        >
          <IoMdMore />
        </button>
      </Dropdown>
    </div>
  );
};
export default SingleChat;
