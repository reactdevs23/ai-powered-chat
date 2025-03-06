import { Button, Heading, Text, Wrapper } from "components/common";
import classes from "./Overview.module.css";
import Devider from "components/common/Devider/Devider";
import clsx from "clsx";
const Overview = () => {
  return (
    <Wrapper className={classes.wrapper}>
      <div className={classes.header}>
        <Heading base medium primitive0>
          Overview
        </Heading>
        <Button transparent className={classes.coinMarketCap}>
          CoinMarketCap
        </Button>
      </div>
      <div className={classes.infoContainer}>
        <Text sm primitive200>
          The XYZ Token (XYZ) is the native utility token powering our AI-driven
          ecosystem. It serves as an access key for AI features, premium tools,
          and exclusive services. Holders can stake, trade, or use XYZ tokens
          within our platform for rewards, governance, and AI-driven automation.
        </Text>

        <Text sm primitive200>
          By claiming your free XYZ tokens today, you gain early access to our
          growing AI-powered platform while earning passive income through
          staking.
        </Text>
        <Devider className={classes.devider} />
      </div>

      <div className={classes.infoWrapper}>
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Token Name
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            XYZ Token
          </Text>
        </div>
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Symbol
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            XYZ
          </Text>
        </div>
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Price
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            $4.38 <span className="highlight">(3.76%)</span>
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Blockchain
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            Ethereum (ERC-20)
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Total Supply
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            250,000,000 XYZ
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Circulating Supply
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            150,000,000 XYZ
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Market Cap
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            $187.5M
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Fully Diluted Value (FDV)
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            $375M
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Current Price
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            $0.75  <span className="highlight">(+5.12%)</span>
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Staking Yield
          </Text>
          <Button sm className={clsx(classes.value, classes.yeild)}>
            APR 97.67%
          </Button>
        </div>
      </div>
      <Button primary className={classes.termsAndConditon}>
        Airdrop Terms & Conditions
      </Button>
    </Wrapper>
  );
};
export default Overview;
