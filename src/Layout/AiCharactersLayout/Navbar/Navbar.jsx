import classes from "./Navbar.module.css";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { PiSidebar } from "react-icons/pi";

const Navbar = ({ setSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={clsx(classes.wrapper, isScrolled && classes.wrapperBg)}>
      <nav className={clsx(classes.nav, "container2")}>
        <button
          className={classes.sidebarButton}
          onClick={() => setSidebar((prev) => !prev)}
        >
          <PiSidebar />
        </button>
      </nav>
    </div>
  );
};
export default Navbar;
