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
import { IoMdMore } from "react-icons/io";
import classes from "./Sidebar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button, Heading, Input, Text } from "components/common";

import clsx from "clsx";
import { MdClose } from "react-icons/md";
import Devider2 from "components/common/Devider2/Devider";
import useOnClickOutside from "hooks";
import Dropdown from "pages/ManageAccount/Dropdown/Dropdown";
import SingleChat from "./SingleChat";
import SingleCharacter from "./SingleCharacter";
const navItems = [
  {
    icons: [newChatIcon, newChatActiveIcon],
    navItem: "New Chat",
    to: "/chat-screen",
  },
  {
    icons: [aiCharectersIcon, aiCharectersActiveIcon],
    navItem: "AI Characters",
    to: "/ai-characters",
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
  const ref = useRef();
  const [searchValue, setSearchValue] = useState();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1280);
  const regularChats = [
    { id: 1, chat: "Restaurant Website Header Design" },
    { id: 2, chat: "Project Management Tool Sitemap" },
    { id: 3, chat: "General Settings Overview" },
    { id: 4, chat: "Restaurant Website Header Design" },
    { id: 5, chat: "Project Management Tool Sitemap" },
    { id: 6, chat: "General Settings Overview" },
  ];

  const aiCharacters = [
    {
      id: 1,
      icon: erpIcon,
      character: "Best Languages for ERP",
    },
    { id: 2, icon: faqIcon, character: "FAQ & Knowledge Base" },
    {
      icon: reportIcon,
      character: "Team Productivity Reports",
    },
    {
      id: 3,
      icon: loadManagementIcon,
      character: "Lead Management & Follow-ups",
    },
    { id: 4, icon: erpIcon, character: "Best Languages for ERP" },
    {
      icon: faqIcon,
      character: "FAQ & Knowledge Base",
    },
    { id: 5, icon: reportIcon, character: "Team Productivity Reports" },
    {
      id: 6,
      icon: loadManagementIcon,
      character: "Lead Management & Follow-ups",
    },
  ];

  // Handle screen resize to update `isSmallScreen`
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Call the hook conditionally based on screen size

  useOnClickOutside(ref, () => {
    if (isSmallScreen) setSidebar(false);
  });
  return (
    <section
      ref={ref}
      className={clsx(classes.sidebar, sidebar ? classes.showSidebar : "")}
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
            {regularChats?.map((el) => (
              <SingleChat {...el} key={el.id} />
            ))}
          </div>
        </div>{" "}
        <Devider2 />
        <div className={classes.aiCharacters}>
          <Text primitive400 xs className={classes.label}>
            Chat with characters
          </Text>

          <div className={classes.characters}>
            {aiCharacters?.map((el) => (
              <SingleCharacter {...el} key={el.id} />
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
        <Devider2 />
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
