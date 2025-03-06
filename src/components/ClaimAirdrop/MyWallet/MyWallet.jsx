import { Button, Heading, Text, Wrapper } from "components/common";
import classes from "./MyWallet.module.css";
import Devider from "components/common/Devider/Devider";
import clsx from "clsx";

const MyWallet = () => {
  return (
    <Wrapper className={classes.wrapper}>
      <div className={classes.header}>
        <Heading primitive50 base>
          My Wallet
        </Heading>
        <Devider className={classes.devider} />
      </div>
      <div className={clsx(classes.spaceBetween, classes.availableContainer)}>
        <div className={classes.infobox}>
          <Text primitive100 base className={classes.label}>
            Available
          </Text>
          <Heading xl primitive100 medium>
            0.01236 <span className={classes.symbol}>xyz</span>
          </Heading>{" "}
          <Text primitive200 sm>
            ≅ $123.45
          </Text>
        </div>
        <div className={classes.buttonContainer}>
          <Button sm>Stake</Button>
          <Button sm primary>
            Buy
          </Button>
        </div>
        <Devider className={classes.devider} />
      </div>{" "}
      <div className={clsx(classes.spaceBetween, classes.stakeContainer)}>
        <div className={classes.infobox}>
          <Text primitive100 base className={classes.label}>
            Staked
          </Text>
          <Heading xl primitive100 medium>
            0.01236 <span className={classes.symbol}>xyz</span>
          </Heading>{" "}
          <Text primitive200 sm>
            ≅ $123.45
          </Text>
        </div>
        <div className={classes.buttonContainer}>
          <Button sm>Unstake</Button>
          <Button sm className={classes.apr}>
            APR 97.67%
          </Button>
        </div>
        <Devider className={classes.devider} />
      </div>
    </Wrapper>
  );
};
export default MyWallet;
