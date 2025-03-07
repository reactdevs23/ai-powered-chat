import { Button, Dropdown, Heading, Input, Text } from "components/common";
import classes from "./AiCharactersPage.module.css";
import { useState } from "react";
import { PiSliders } from "react-icons/pi";
import Modal from "components/common/Modal/Modal";
import TabSlider from "components/common/TabSlider/TabSlider";
import Devider2 from "components/common/Devider2/Devider";
import Switch from "components/common/Switch/Switch";
import {
  smartAdvisor,
  friendlyHelper,
  techGuru,
  creativeMind,
  fitnessCoach,
} from "images";
import SingleCharacters from "./SingleCharacters/SingleCharacters";

// Define Tabs and AI Models
const tabs = [
  "All",
  "Writing",
  "Programming",
  "Productivity",
  "Research",
  "Education",
];
const aiModels = ["GPT-4o", "Llama 3.2 3B", "DeepSeek R1671B", "Dolphin 72B"];

// AI Characters Data with Categories
const aiCharacters = [
  {
    img: smartAdvisor,
    title: "Smart Advisor",
    info: "Offers professional advice on business, tech, and more.",
    category: "Productivity",
    isPro: false,
    webEnabled: true,
    matureContent: false,
    rating: "4.5",
    numberOfComment: "50k",
  },
  {
    isPro: true,
    img: friendlyHelper,
    title: "Friendly Helper",
    info: "Provides support with a warm, friendly tone.",
    category: "Education",
    webEnabled: false,
    matureContent: false,
    rating: "4.5",
    numberOfComment: "50k",
  },
  {
    img: techGuru,
    title: "Tech Guru",
    info: "Specializes in solving complex issues and providing insights.",
    category: "Programming",
    isPro: false,
    webEnabled: true,
    matureContent: true,
    rating: "4.5",
    numberOfComment: "50k",
  },
  {
    img: creativeMind,
    title: "Creative Mind",
    info: "Inspires with artistic and creative ideas for projects.",
    category: "Writing",
    isPro: true,
    webEnabled: false,
    matureContent: false,
    rating: "4.5",
    numberOfComment: "50k",
  },
  {
    isPro: true,
    img: fitnessCoach,
    title: "Fitness Coach",
    info: "Guides users with personalized workouts and fitness tips.",
    category: "Research",
    webEnabled: true,
    matureContent: true,
    rating: "4.5",
    numberOfComment: "50k",
  },
  {
    isPro: true,
    img: fitnessCoach,
    title: "Fitness Coach",
    info: "Guides users with personalized workouts and fitness tips.",
    category: "Research",
    webEnabled: true,
    matureContent: true,
    rating: "4.5",
    numberOfComment: "50k",
  },
];

const AiCharactersPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState("All");

  const [showSelectAiDropdown, setShowSelectAiDropdown] = useState(false);
  const [selectedAiModel, setSelectedAiModel] = useState("GPT-4o");

  const [proOnly, setProOnly] = useState(false);
  const [webEnabled, setWebEnabled] = useState(false);
  const [matureContent, setMatureContent] = useState(false);

  // Filtering AI Characters based on selected filters
  const filteredCharacters =
    activeFilterTab === "All"
      ? aiCharacters // Show all items when "All" is selected
      : aiCharacters.filter((character) => {
          if (character.category !== activeFilterTab) return false;
          if (proOnly && !character.isPro) return false;
          if (webEnabled && !character.webEnabled) return false;
          if (!matureContent && character.matureContent) return false;
          if (
            searchValue &&
            !character.title.toLowerCase().includes(searchValue.toLowerCase())
          )
            return false;

          return true;
        });

  return (
    <>
      <section className={classes.wrapper}>
        <div className={classes.header}>
          <Heading primitive0 medium textCenter>
            AI <span className="highlight">Characters</span>
          </Heading>
          <Text sm primitive300 textCenter>
            Discover a variety of AI characters, each with unique personalities
            and expertise, tailored to enhance your conversations.
          </Text>

          <div className={classes.filterContainer}>
            <Input
              search
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
            />
            <Button
              primary
              className={classes.filterButton}
              onClick={() => setShowFilterModal(true)}
            >
              <PiSliders /> Filter
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <TabSlider
          activeTab={tabs.indexOf(activeFilterTab)}
          setActiveTab={(index) => setActiveFilterTab(tabs[index])}
          tabs={tabs}
        />

        {/* Display Filtered AI Characters */}
        <div className={classes.aiCharacters}>
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character, i) => (
              <SingleCharacters {...character} key={i} />
            ))
          ) : (
            <Text sm className={classes.noResults}>
              No AI Characters Found
            </Text>
          )}
        </div>
      </section>

      {/* Filter Modal */}
      <Modal
        className={classes.modal}
        isActive={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        heading="Filter By"
      >
        <div className={classes.modalContainer}>
          <div className={classes.selectBox}>
            <Text className={classes.label} sm>
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
          </div>
          <Devider2 className={classes.devider} />
          <div className={classes.spaceBetween}>
            <Text className={classes.label} sm>
              Pro Only
            </Text>
            <Switch isChecked={proOnly} setIsChecked={setProOnly} />
          </div>
          <div className={classes.spaceBetween}>
            <Text className={classes.label} sm>
              Web Enabled
            </Text>
            <Switch isChecked={webEnabled} setIsChecked={setWebEnabled} />
          </div>
          <div className={classes.spaceBetween}>
            <Text className={classes.label} sm>
              Mature Content
            </Text>
            <Switch isChecked={matureContent} setIsChecked={setMatureContent} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AiCharactersPage;
