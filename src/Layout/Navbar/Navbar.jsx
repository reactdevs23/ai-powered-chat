import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

import Dropdown from "./Dropdown/Dropdown";
import clsx from "clsx";
import { logo } from "images";
import { Button } from "components/common";

const Navbar = () => {
  const charecterRef = useRef(null);
  const resourcesRef = useRef(null);
  const [isCharectersDropdownActive, setIsCharecterDropdownActive] =
    useState(false);
  const [isResourcesDropdownActive, setIsResourcesDropdownActive] =
    useState(false);
  const characters = [
    { navItem: "Crypto Checkout", to: "/" },
    { navItem: "Wallet as a Service", to: "/" },
    { navItem: "Blockchain API", to: "/" },
  ];
  const resources = [
    { navItem: "Crypto Checkout", to: "/" },
    { navItem: "Wallet as a Service", to: "/" },
    { navItem: "Blockchain API", to: "/" },
  ];
  const [sidebar, setSidebar] = useState(false);
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
    <div
      className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}
    >
      <header className={[classes.header, "container"].join(" ")}>
        <NavLink
          className={[classes.navItem, classes.logoContainer].join(" ")}
          to="/"
          onClick={() => setSidebar((prev) => !prev)}
        >
          {" "}
          <img src={logo} alt="#" className={classes.logo} />
        </NavLink>

        <div
          className={[classes.navItems, sidebar && classes.sidebar].join(" ")}
        >
          {" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? clsx(classes.navItem, classes.navActive)
                : classes.navItem
            }
            to="/about"
            onClick={() => setSidebar((prev) => !prev)}
          >
            About
          </NavLink>
          <Dropdown
            isActive={isCharectersDropdownActive}
            setIsActive={setIsCharecterDropdownActive}
            onSelect={(val) => {
              setIsCharecterDropdownActive(false);
            }}
            dropdownItems={characters}
            dropdownRef={charecterRef}
          >
            <span
              className={
                isCharectersDropdownActive
                  ? clsx(classes.navActive, classes.navItem)
                  : classes.navItem
              }
            >
              Characters
            </span>
          </Dropdown>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? clsx(classes.navItem, classes.navActive)
                : classes.navItem
            }
            to="/pricing"
            onClick={() => setSidebar((prev) => !prev)}
          >
            Pricing
          </NavLink>{" "}
          <Dropdown
            label="Service"
            isActive={isResourcesDropdownActive}
            setIsActive={setIsResourcesDropdownActive}
            onSelect={(val) => {
              setIsResourcesDropdownActive(false);
            }}
            dropdownItems={resources}
            dropdownRef={resourcesRef}
          >
            <span
              className={
                isResourcesDropdownActive
                  ? clsx(classes.navActive, classes.navItem)
                  : classes.navItem
              }
            >
              {" "}
              Resources
            </span>
          </Dropdown>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? clsx(classes.navItem, classes.navActive)
                : classes.navItem
            }
            to="/contact"
            onClick={() => setSidebar((prev) => !prev)}
          >
            Contact
          </NavLink>{" "}
          <div className={classes.buttonContainer}>
            {" "}
            <Button transparent onClick={() => {}}>
              Claim Airdrop
            </Button>
            <Button btnPrimary onClick={() => {}}>
              Try It Now
            </Button>
          </div>
        </div>
        <div className={classes.mobileButton}>
          {sidebar ? (
            <IoMdClose
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          ) : (
            <AiOutlineAlignRight
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
