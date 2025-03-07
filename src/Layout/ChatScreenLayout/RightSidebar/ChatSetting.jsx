import classes from "./RightSidebar.module.css";

import { Button, Dropdown, Text } from "components/common";
import Devider2 from "components/common/Devider2/Devider";
import Switch from "components/common/Switch/Switch";

import { useState } from "react";

const aiModels = ["GPT-4o", "Llama 3.2 3B", "DeepSeek R1671B", "Dolphin 72B"];
const tones = ["Professional", "Professional2"];
const formalityLevels = ["Casual", "Formal"];
const responseLength = ["Low", "Medium", "High"];
const ChatSettings = () => {
  // select Ai model dropdown
  const [showSelectAiDropdown, setShowSelectAiDropdown] = useState(false);
  const [selectedAiModel, setSelectedAiModel] = useState("GPT-4o");

  // selecttones dropdown
  const [showTonesDropdown, setShowTonesDropdown] = useState(false);
  const [selectedTones, setSelectedTones] = useState("Professional");

  //formality levels dropdown
  const [showFormalityLevelDropdown, setShowFormalityLevelDropdown] =
    useState(false);
  const [selectedFormalityLevel, setSelectedFormalityLevel] =
    useState("Casual");

  //response length dropdown
  const [showResponseLengthDropdown, setShowResponseLengthDropdown] =
    useState(false);
  const [selectedResponseLength, setSelectedResponseLength] =
    useState("Medium");

  // allow emoji and gifs
  const [allowEmojiAndGifs, setAllowEmojiAndGifs] = useState(false);
  return (
    <>
      <div className={classes.selectBox}>
        <Text primitive200 sm>
          Select AI Model
        </Text>
        <Dropdown
          className={classes.dropdown}
          items={aiModels}
          isActive={showSelectAiDropdown}
          setIsActive={setShowSelectAiDropdown}
          selectedValue={selectedAiModel}
          setSelectedAiModel={setSelectedAiModel}
          onSelect={(val) => setSelectedAiModel(val)}
        />
      </div>{" "}
      <div className={classes.selectBox}>
        <Text primitive200 sm>
          Tones
        </Text>
        <Dropdown
          className={classes.dropdown}
          items={tones}
          isActive={showTonesDropdown}
          setIsActive={setShowTonesDropdown}
          selectedValue={selectedTones}
          setSelectedAiModel={setSelectedTones}
          onSelect={(val) => setSelectedTones(val)}
        />
      </div>
      <Devider2 className={classes.devider} />
      <div className={classes.selectBox}>
        <Text primitive0 sm>
          Custom Configuration:
        </Text>
        <div className={classes.spaceBetween}>
          <Text className={classes.label}>Formality Level</Text>
          <Dropdown
            className={classes.dropdown}
            items={formalityLevels}
            isActive={showFormalityLevelDropdown}
            setIsActive={setShowFormalityLevelDropdown}
            selectedValue={selectedFormalityLevel}
            setSelectedAiModel={setSelectedFormalityLevel}
            onSelect={(val) => setSelectedFormalityLevel(val)}
          />
        </div>
        <div className={classes.spaceBetween}>
          <Text className={classes.label}>Response Length</Text>
          <Dropdown
            className={classes.dropdown}
            items={responseLength}
            isActive={showResponseLengthDropdown}
            setIsActive={setShowResponseLengthDropdown}
            selectedValue={selectedResponseLength}
            setSelectedAiModel={setSelectedResponseLength}
            onSelect={(val) => setSelectedResponseLength(val)}
          />
        </div>
        <div className={classes.spaceBetween}>
          <Text className={classes.label}>Emojis & GIFs</Text>
          <Switch
            isChecked={allowEmojiAndGifs}
            setIsChecked={setAllowEmojiAndGifs}
          />
        </div>
      </div>
      <Devider2 className={classes.devider} />
      <div className={classes.selectBox}>
        <div className={classes.spaceBetween}>
          <Text primitive0 sm>
            System Prompt:
          </Text>
          <Button sm primary>
            Add
          </Button>
        </div>
        <div className={classes.promptWrapper}>
          <Text className={classes.label} sm textCenter>
            Craft a System Prompt to dictate its responses and interactions.
          </Text>
        </div>
      </div>{" "}
      <Devider2 className={classes.devider} />
      <Button primitive800>Reset</Button>
    </>
  );
};
export default ChatSettings;
