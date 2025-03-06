import { Button, Heading, Text, Wrapper } from "components/common";

import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { PiRedditLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandDiscordFilled } from "react-icons/tb";
import classes from "./AboutUs.module.css";
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
const info = [
  { label: "Website", to: "" },
  { label: "Whitepaper", to: "" },
  { label: "CoinMarketCap", to: "" },
  { label: "DEX Listing", to: "" },
];
const AboutUs = () => {
  return (
    <Wrapper className={classes.wrapper}>
      <Heading primitive50 base medium>
        About Us
      </Heading>
      <Text primitive200 sm>
        At [Brand Name], we are revolutionizing digital interactions with
        AI-driven chat solutions. Our mission is to empower businesses and
        individuals with intelligent, engaging, and seamless conversations.
      </Text>
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
      <div className={classes.infoContainer}>
        {info.map(({ label, to }, i) => (
          <Button sm primary href={to} key={i}>
            {label}
          </Button>
        ))}
      </div>
    </Wrapper>
  );
};
export default AboutUs;
