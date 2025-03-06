import { Heading, Text } from "components/common";
import classes from "./Staking.module.css";
import StakeInfo from "components/Staking/StakeInfo/StakeInfo";
import StakeList from "components/Staking/StakeList/StakeList";
import CreateNewStake from "components/Staking/CreateNewStake/CreateNewStake";
import ConnectWallet from "components/Staking/CreateNewStake/ConnectWallet/ConnectWallet";
import { useAppContext } from "ContextProvider/ContextProvider";

const Staking = () => {
  const { setShowConnectWalletModal, connectedWallet } = useAppContext();

  const handleConncetWallet = () => {
    setShowConnectWalletModal(true);
  };
  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <Heading xl2 medium primitive0 textCenter>
          Stake XYZ Tokens & <br />{" "}
          <span className="highlight">Earn Rewards!</span>
        </Heading>
        <Text sm primitive300 textCenter>
          Put your XYZ tokens to work and earn high-yield rewards with our
          secure staking program. Whether you're holding for the long term or
          looking for passive income, staking XYZ offers flexible options,
          competitive APY, and exclusive benefits.
        </Text>
      </div>
      <div className={classes.container}>
        {!connectedWallet && (
          <ConnectWallet handleConncetWallet={handleConncetWallet} />
        )}
        {connectedWallet && <CreateNewStake />}
        <StakeInfo />
      </div>

      <StakeList />
    </section>
  );
};
export default Staking;
