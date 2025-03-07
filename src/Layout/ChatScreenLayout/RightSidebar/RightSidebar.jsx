import classes from "./RightSidebar.module.css";

import clsx from "clsx";
import { Button, Tabs } from "components/common";
import Devider2 from "components/common/Devider2/Devider";

import { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import ChatSettings from "./ChatSetting";
import AppSettings from "./AppSettings";
import useOnClickOutside from "hooks";

const RightSidebar = ({ sidebar, setSidebar }) => {
  const [activeTab, setActiveTab] = useState("Chat");
  const ref = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1280);

  // Handle screen resize to update `isSmallScreen`
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };
    window.addEventListener("resize", handleResize);

    // Initialize the sidebar state if screen is small
    if (isSmallScreen) {
      setSidebar(false);
    }

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen, setSidebar]);

  // Call the hook conditionally based on screen size
  useOnClickOutside(ref, () => {
    if (isSmallScreen) setSidebar(false);
  });

  return (
    <section
      ref={ref}
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
