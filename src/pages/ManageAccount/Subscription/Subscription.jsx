import { Button, Heading, Text } from "components/common";
import classes from "./Subscription.module.css";
import clsx from "clsx";
import { devider, planImg } from "images";

const Subscription = () => {
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.header)}>
        <Heading primitive50 medium sm>
          You’re using
        </Heading>
        <Button primary sm className={classes.freePlanButton}>
          Free Plan
        </Button>
        <img src={devider} alt="#" className={classes.devider} />
      </div>
      <div className={classes.infoContainer}>
        <img src={planImg} alt="#" className={classes.planImg} />
        <Heading base medium primitive0 textCenter>
          Upgrade <span className="highlight">Your Plan</span>
        </Heading>
        <Text className={classes.info} primitive200 textCenter>
          Unlock premium features and take your AI chat experience to the next
          level!
        </Text>
      </div>
      <Button primitiveTransparent8 sm wFull className={classes.button}>
        See Subscription Plan
      </Button>
    </div>
  );
};
export default Subscription;
