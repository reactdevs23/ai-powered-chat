import { Outlet } from "react-router-dom";
import classes from "./ChatScreenLayout.jsx.module.css";
import clsx from "clsx";
import RightSidebar from "./RightSidebar/RightSidebar";
const ChatScreenLayout = () => {
  return (
    <main className={classes.wrapper}>
      <div className={clsx(classes.container, "container2")}>
        <Outlet />
      </div>
      <RightSidebar />
    </main>
  );
};
export default ChatScreenLayout;
