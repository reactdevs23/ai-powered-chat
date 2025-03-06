import classes from "./RightSidebar.module.css";

import { Button, Dropdown, Text } from "components/common";
import Devider2 from "components/common/Devider2/Devider";
import Switch from "components/common/Switch/Switch";

import { useState } from "react";

const themeModes = ["Dark", "Light"];
const languages = ["Eng", "Hi", "Ben"];
const themeColors = [
  { name: "Teal", value: "#00D995" },
  { name: "Blue", value: "#418EE0" },
  { name: "Pink", value: "#DA5397" },
  { name: "Indigo", value: "#6165E8" },
  { name: "Orange", value: "#E47934" },
  { name: "Green", value: "#2F593F" },
];

const AppSettings = ({ sidebar, setSidebar }) => {
  //theme mode dropdown
  const [showThemeModeDropdown, setShowThemeModeDropdown] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("Dark");

  //select language dropdown
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  // allow Enter to submit
  const [allowEnterToSubmit, setAllowEnterToSubmit] = useState(true);

  // allow input history navigation
  const [allowInputHistoryNavigation, setAllowInputHistoryNavigation] =
    useState(false);

  // allow telemetry Collection
  const [allowTelemetryCollection, setAllowTelemetryCollection] =
    useState(false);
  return (
    <>
      <div className={classes.spaceBetween}>
        <Text sm className={classes.label}>
          Press <span className={classes.highlight}>“Enter”</span> to Submits
          Chat
        </Text>
        <Switch
          isChecked={allowEnterToSubmit}
          setIsChecked={setAllowEnterToSubmit}
        />
      </div>
      <div className={classes.spaceBetween}>
        <Text sm className={classes.label}>
          Input History Navigation
        </Text>
        <Switch
          isChecked={allowInputHistoryNavigation}
          setIsChecked={setAllowInputHistoryNavigation}
        />
      </div>
      <Devider2 />
      <div className={classes.selectBox}>
        <Text primitive0 sm>
          Color Theme:
        </Text>
        <div className={classes.spaceBetween}>
          <Text sm className={classes.label}>
            Theme Mode
          </Text>
          <Dropdown
            className={classes.dropdown}
            items={themeModes}
            isActive={showThemeModeDropdown}
            setIsActive={setShowThemeModeDropdown}
            selectedValue={selectedTheme}
            setSelectedAiModel={setSelectedTheme}
            onSelect={(val) => setSelectedTheme(val)}
          />
        </div>

        <div className={classes.selectBox}>
          <Text primitive200 sm>
            Theme Color
          </Text>

          <div className={classes.allthemeColors}>
            {themeColors.map((theme, i) => (
              <button
                key={i}
                className={classes.theme}
                style={{ "--color": theme.value }} // Set CSS variable dynamically
              >
                <div className={classes.themeBox}></div>
              </button>
            ))}
          </div>
        </div>
      </div>{" "}
      <Devider2 />
      <div className={classes.selectBox}>
        <Text primitive0 sm>
          Utility
        </Text>
        <div className={classes.spaceBetween}>
          <Text className={classes.label}>Language</Text>
          <Dropdown
            className={classes.dropdown}
            items={languages}
            isActive={showLanguageDropdown}
            setIsActive={setShowLanguageDropdown}
            selectedValue={selectedLanguage}
            setSelectedAiModel={setSelectedLanguage}
            onSelect={(val) => setSelectedLanguage(val)}
          />
        </div>
        <div className={classes.spaceBetween}>
          <Text className={classes.label}>Telemetry Collection</Text>
          <Switch
            isChecked={allowTelemetryCollection}
            setIsChecked={setAllowTelemetryCollection}
          />
        </div>
      </div>
      <Devider2 className={classes.devider} />
      <Button primitive800>Reset</Button>
    </>
  );
};
export default AppSettings;
