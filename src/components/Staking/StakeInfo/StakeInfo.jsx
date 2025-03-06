import { Text, Wrapper } from "components/common";
import classes from "./StakeInfo.module.css";

const StakeInfo = () => {
  const data = [
    "Earn Passive Income – Enjoy up to 85.4% APR on staked tokens.",
    "Flexible & Fixed Staking – Choose between short-term or long-term locking periods.",
    "Boost Your Rewards – Higher APY for longer staking durations.",
    "Secure & Transparent – Fully audited smart contracts for safe staking.",
    "Governance & Voting – Participate in key decisions for the XYZ ecosystem.",
  ];
  return (
    <Wrapper className={classes.wrapper}>
      {data.map((info, i) => (
        <Text key={i} base primitive200 className={classes.info}>
          ✅ {info}
        </Text>
      ))}
    </Wrapper>
  );
};
export default StakeInfo;
