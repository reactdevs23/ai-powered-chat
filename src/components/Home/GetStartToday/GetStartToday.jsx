import { Button, Heading, Text } from "components/common";
import classes from "./GetStartToday.module.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import clsx from "clsx";
import { checkMarkIcon } from "images";

const GetStartToday = () => {
  const list = [
    "Boost engagement, automate tasks, and enhance experiences!",
    "Join now and unlock the future of AI chat!",
  ];
  return (
    <section className={clsx(classes.container, "container", "sectionPadding")}>
      <div className={classes.infoContainer}>
        <Heading primitive0 xl5>
          Get Started
          <span className="highlight"> Today!</span>
        </Heading>
        <Text primitive300 lg>
          Start chatting today and experience the future of AI conversations!{" "}
        </Text>
        <div className={classes.buttonContainer}>
          <Button btnPrimary onClick={() => {}}>
            Try It Now
          </Button>{" "}
          <Button transparent onClick={() => {}}>
            Claim Airdrop
          </Button>
        </div>
      </div>
      <div className={classes.listContainer}>
        {list?.map((list, i) => (
          <div className={classes.list} key={i}>
            <img src={checkMarkIcon} className={classes.icon} />
            <Text xl className="gradient">
              {list}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};
export default GetStartToday;
