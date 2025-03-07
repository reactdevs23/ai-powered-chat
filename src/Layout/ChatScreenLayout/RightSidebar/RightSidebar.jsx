import classes from "./RightSidebar.module.css";

import clsx from "clsx";
import { Button, Tabs } from "components/common";
import Devider2 from "components/common/Devider2/Devider";

import { useState } from "react";
import { MdClose } from "react-icons/md";
import ChatSettings from "./ChatSetting";
import AppSettings from "./AppSettings";

const RightSidebar = ({ sidebar, setSidebar }) => {
  const [activeTab, setActiveTab] = useState("Chat");

  return (
    <section
      className={clsx(
        classes.sidebar,
        sidebar ? classes.showSidebar : classes.hideSidebar,
        "overflow"
      )}
    >
      <div className={classes.header}>
        <Tabs
          tabs={["Chat", "App"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <button
          className={classes.sidebarButton}
          onClick={() => setSidebar((prev) => !prev)}
        >
          <MdClose />
        </button>{" "}
      </div>
      <Devider2 className={classes.devider} />
      {activeTab === "Chat" && <ChatSettings />}
      {activeTab === "App" && <AppSettings />}
    </section>
  );
};
export default RightSidebar;
