import { appleLogo, discordLogo, fbLogo, githubLogo, googleLogo } from "images";
import classes from "./LoginOrSignupWith.module.css";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const LoginOrSignupWith = () => {
  const socialMedias = [
    {
      logo: googleLogo,
      to: "#",
    },
    {
      logo: fbLogo,
      to: "#",
    },
    {
      logo: githubLogo,
      to: "#",
    },
    {
      logo: appleLogo,
      to: "#",
    },
    {
      logo: discordLogo,
      to: "#",
    },
  ];
  return (
    <div className={classes.container}>
      {socialMedias.map((socialItem, i) => (
        <a href={socialItem.to} className={classes.iconContainer} key={i}>
          <img src={socialItem.logo} alt="#" className={classes.icon} />
        </a>
      ))}
    </div>
  );
};
export default LoginOrSignupWith;
