import { Button, Heading, Text } from "components/common";
import classes from "./GetStartToday.module.css";
import clsx from "clsx";
import { checkMarkIcon } from "images";

const GetStartToday = () => {
  const list = [
    "Boost engagement, automate tasks, and enhance experiences!",
    "Join now and unlock the future of AI chat!",
  ];
  return (
    <section className={classes.wrapper} data-aos="fade-up">
      <div className={clsx(classes.container, "container")}>
        <div className={classes.infoContainer}>
          <Heading primitive0 xl5>
            Get Started
            <span className="highlight"> Today!</span>
          </Heading>
          <Text primitive300 lg>
            Start chatting today and experience the future of AI conversations!{" "}
          </Text>
          <div className={classes.buttonContainer}>
            <Button btnPrimary onClick={() => {}} className={classes.button}>
              Try It Now
            </Button>{" "}
            <Button transparent onClick={() => {}} className={classes.button}>
              Claim Airdrop
            </Button>
          </div>
        </div>
        <div className={classes.listContainer}>
          {list?.map((list, i) => (
            <div className={classes.list} key={i}>
              <img src={checkMarkIcon} alt="#" className={classes.icon} />
              <Text xl className="gradient">
                {list}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GetStartToday;
