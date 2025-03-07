import { Outlet } from "react-router-dom";
import classes from "./AiCharactersLayout.module.css";
import { useState } from "react";
import Sidebar from "Layout/AirdropAndStakinLayout/Sidebar/Sidebar";
import clsx from "clsx";

const AiCharactersLayout = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <main className={classes.wrapper}>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <div className={clsx(classes.container, "container2")}>
        <Outlet />
      </div>
    </main>
  );
};
export default AiCharactersLayout;
