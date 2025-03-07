import { Outlet } from "react-router-dom";
import classes from "./ChatScreenLayout.jsx.module.css";
import clsx from "clsx";
import RightSidebar from "./RightSidebar/RightSidebar";
import Navbar from "./Navbar/Navbar";
import Sidebar from "Layout/AirdropAndStakinLayout/Sidebar/Sidebar";
import { useState } from "react";
const ChatScreenLayout = () => {
  const [sidebar, setSidebar] = useState(true);
  const [rightSidebar, setRightSidebar] = useState(true);
  return (
    <main className={classes.wrapper}>
      <Navbar
        setSidebar={setSidebar}
        sidebar={sidebar}
        rightSidebar={rightSidebar}
        setRightSidebar={setRightSidebar}
      />
      <Sidebar setSidebar={setSidebar} sidebar={sidebar} />
      <div className={clsx(classes.container, "container2")}>
        <Outlet />
      </div>
      <RightSidebar setSidebar={setRightSidebar} sidebar={rightSidebar} />
    </main>
  );
};
export default ChatScreenLayout;
