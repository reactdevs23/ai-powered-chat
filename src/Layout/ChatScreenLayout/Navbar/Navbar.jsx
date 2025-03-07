import { Button, Dropdown, Heading, Text } from "components/common";
import classes from "./Navbar.module.css";
import { TbSettings } from "react-icons/tb";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { PiSidebar } from "react-icons/pi";

const aiModels = ["GPT-4o", "Llama 3.2 3B", "DeepSeek R1671B", "Dolphin 72B"];
const Navbar = ({ setSidebar, setRightSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // select Ai model dropdown
  const [showSelectAiDropdown, setShowSelectAiDropdown] = useState(false);
  const [selectedAiModel, setSelectedAiModel] = useState("GPT-4o");
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
        <Heading primitive25 base medium>
          New Chat
        </Heading>
        <Dropdown
          className={classes.dropdown}
          items={aiModels}
          isActive={showSelectAiDropdown}
          setIsActive={setShowSelectAiDropdown}
          selectedValue={selectedAiModel}
          setSelectedAiModel={setSelectedAiModel}
          onSelect={(val) => setSelectedAiModel(val)}
        />{" "}
        <Button
          primitive800
          sm
          className={classes.settingButton}
          onClick={() => setRightSidebar((prev) => !prev)}
        >
          <TbSettings />
        </Button>
      </nav>
    </div>
  );
};
export default Navbar;
