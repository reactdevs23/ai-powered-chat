import {
  aiCharectersActiveIcon,
  aiCharectersIcon,
  claimAirdropActiveIcon,
  claimAirdropIcon,
  devider,
  erpIcon,
  faqIcon,
  helpAndSupportIcon,
  loadManagementIcon,
  logoutIcon,
  newChatActiveIcon,
  newChatIcon,
  planImg,
  reportIcon,
  smallLogo,
  stackingActiveIcon,
  stackingIcon,
  userImg,
  userImgPlaceholder,
} from "images";

import classes from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Button, Heading, Input, Text } from "components/common";

import clsx from "clsx";
import { MdClose } from "react-icons/md";
import Devider2 from "components/common/Devider2/Devider";
const navItems = [
  {
    icons: [newChatIcon, newChatActiveIcon],
    navItem: "New Chat",
    to: "/new-chat",
  },
  {
    icons: [aiCharectersIcon, aiCharectersActiveIcon],
    navItem: "AI Characters",
    to: "/ai-charecters",
  },
  {
    icons: [claimAirdropIcon, claimAirdropActiveIcon],
    navItem: "Claim Airdrop",
    to: "/claim-airdrop",
  },
  {
    icons: [stackingIcon, stackingActiveIcon],
    navItem: "Stacking",
    to: "/stacking",
  },
];
const Sidebar = ({ sidebar, setSidebar }) => {
  const [searchValue, setSearchValue] = useState();

  const regularChats = [
    "Restaurant Website Header Design",
    "Project Management Tool Sitemap",
    "General Settings Overview",
  ];
  const [activeChat, setActiveChat] = useState("");
  const handleActiveChat = (chat) => {
    setActiveChat(chat);
  };
  const aiCharacters = [
    {
      icon: erpIcon,
      character: "Best Languages for ERP",
    },
    {
      icon: faqIcon,
      character: "FAQ & Knowledge Base",
    },
    {
      icon: reportIcon,
      character: "Team Productivity Reports",
    },
    {
      icon: loadManagementIcon,
      character: "Lead Management & Follow-ups",
    },
  ];
  const [activeCharacter, setActiveCharacter] = useState("");
  const handleActiveCharacter = (character) => {
    setActiveCharacter(character);
  };

  return (
    <section
      className={clsx(
        classes.sidebar,
        sidebar ? classes.showSidebar : "",
        "overflow"
      )}
    >
      <div className={classes.navItemsContainer}>
        <div className={classes.header}>
          <Link to="/">
            <img src={smallLogo} alt="#" className={classes.logo} />
          </Link>
          <button
            className={classes.sidebarButton}
            onClick={() => setSidebar((prev) => !prev)}
          >
            <MdClose />
          </button>{" "}
        </div>
        <Input
          className={classes.searchContainer}
          search
          value={searchValue}
          setValue={setSearchValue}
          placeholder="Search"
        />
        <div className={classes.navItems}>
          {navItems?.map((el, i) => (
            <NavLink
              to={el.to}
              key={i}
              className={({ isActive }) =>
                isActive
                  ? [classes.navItem, classes.navActive].join(" ")
                  : classes.navItem
              }
            >
              {({ isActive, isPending }) => {
                return (
                  <>
                    <img
                      src={isActive ? el.icons[1] : el.icons[0]}
                      alt="#"
                      className={classes.navIcon}
                    />
                    <span>{el.navItem}</span>
                  </>
                );
              }}
            </NavLink>
          ))}
        </div>
      </div>

      <div className={classes.chatsAndCharacters}>
        <div className={classes.regularChats}>
          <Text primitive400 xs className={classes.label}>
            Regular chats
          </Text>

          <div className={classes.chats}>
            {regularChats?.map((chat, i) => (
              <div
                key={i}
                className={clsx(
                  activeChat === chat && classes.activeChatContainer,
                  classes.chatContainer
                )}
              >
                <Text
                  primitive200
                  sm
                  className={clsx(classes.chat)}
                  onClick={() => handleActiveChat(chat)}
                >
                  {chat}
                </Text>
              </div>
            ))}
          </div>
        </div>{" "}
        <Devider2 />
        <div className={classes.aiCharacters}>
          <Text primitive400 xs className={classes.label}>
            Chat with characters
          </Text>

          <div className={classes.characters}>
            {aiCharacters?.map(({ character, icon }, i) => (
              <div
                className={clsx(
                  classes.character,
                  activeCharacter === character && classes.activeCharacter
                )}
                key={i}
                onClick={() => handleActiveCharacter(character)}
              >
                <img
                  src={icon}
                  alt="charecter"
                  className={classes.characterIcon}
                />{" "}
                <Text primitive200 sm className={classes.characterName}>
                  {character}
                </Text>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>

      <div className={classes.userWrapper}>
        <div className={classes.upgradePlan}>
          <img src={planImg} alt="#" className={classes.planImg} />
          <div className={classes.upgradeInfoContainer}>
            <Heading sm primitive0 medium>
              Upgrade <span className="highlight">Your Plan</span>
            </Heading>
            <Text xs className={classes.upgradeInfo}>
              Unlock premium features and take next level experience!
            </Text>
          </div>
        </div>{" "}
        <Devider2 />
        <div className={classes.userContainer}>
          <img src={userImg} alt="#" className={classes.userImg} />
          <div>
            <Heading sm primitive100 medium>
              User Name Here
            </Heading>
            <Button sm primary className={classes.freePlanButton}>
              Free Plan
            </Button>
          </div>
        </div>
        <Devider2 />>
        <div>
          <button className={classes.navItem}>
            <img src={helpAndSupportIcon} alt="#" className={classes.navIcon} />
            <p>Help & Support</p>
          </button>{" "}
          <button className={classes.navItem}>
            <img src={logoutIcon} alt="#" className={classes.navIcon} />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
