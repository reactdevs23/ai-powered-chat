import React from "react";
import classes from "./Footer.module.css";
import clsx from "clsx";

import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { PiRedditLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandDiscordFilled } from "react-icons/tb";

import { Button, Heading, Text } from "components/common";
import CopyrightContainer from "../CopyrightContainer/CopyrightContainer";
import { checkMarkIcon, smallLogo } from "images";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMedia = [
    {
      icon: <FaTelegramPlane className={classes.icon} />,

      to: "#",
    },
    {
      icon: <PiRedditLogoFill className={classes.icon} />,

      to: "#",
    },
    {
      icon: <FaSquareXTwitter className={classes.icon} />,

      to: "#",
    },
    {
      icon: <FaLinkedin className={classes.icon} />,

      to: "#",
    },
    {
      icon: <TbBrandDiscordFilled className={classes.icon} />,

      to: "#",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <footer className={clsx(classes.container, "container")}>
        <div className={classes.infoContainer}>
          <img src={smallLogo} alt="#" className={classes.logo} />
          <div className={classes.title}>
            <Heading medium gradient xl2>
              Brand Name
            </Heading>
            <Text primitive300 lg>
              AI-Powered Conversations
            </Text>
          </div>
          <Button primary>
            <img
              src={checkMarkIcon}
              alt="#"
              className={classes.checkMarkIcon}
            />
            All System Operationals
          </Button>
        </div>
        <div className={clsx(classes.itemsContainer, classes.quickLinks)}>
          <Heading base gradient className={classes.heading} medium>
            Quick Links
          </Heading>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/" className={classes.link}>
            About Brand
          </Link>
          <Link to="/" className={classes.link}>
            Pricing Plan
          </Link>{" "}
          <Link to="/" className={classes.link}>
            Blog & News
          </Link>
          <Link to="/" className={classes.link}>
            Claim Airdrop
          </Link>
        </div>
        <div className={classes.devider1}></div>
        <div className={classes.itemsContainer}>
          <Heading base gradient className={classes.heading} medium>
            AI Characters
          </Heading>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Smart Advisor
          </a>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Friendly Helper
          </a>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Tech Guru
          </a>{" "}
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Creative Mind
          </a>{" "}
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Virtual Assistant
          </a>
          <Button className={classes.seeAll}>See All</Button>
        </div>
        <div className={classes.devider2}></div>
        <div className={clsx(classes.itemsContainer, classes.supportContainer)}>
          <Heading base gradient className={classes.heading} medium>
            Support
          </Heading>
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Help Center
          </a>{" "}
          <a
            href="#/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            FAQs
          </a>{" "}
          <div>
            <p className={classes.link}>Email:</p>

            <a
              href="mailto: support@[yourbrand].com"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              support@[yourbrand].com
            </a>
          </div>{" "}
          <div>
            <p className={clsx(classes.link, classes.followUs)}>Follow Us:</p>

            <div className={classes.socialContainer}>
              {socialMedia.map((el, i) => (
                <a
                  href={el.to}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  className={classes.social}
                >
                  {el.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <CopyrightContainer />
    </section>
  );
};

export default Footer;
