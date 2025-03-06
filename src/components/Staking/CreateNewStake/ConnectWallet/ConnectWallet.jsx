import { Button, Text, Wrapper } from "components/common";
import classes from "./ConnectWallet.module.css";
import { walletIcon } from "images";

const ConnectWallet = ({ handleConncetWallet }) => {
  return (
    <Wrapper className={classes.wrapper}>
      <div className={classes.infoContainer}>
        <Text primitive200 sm textCenter>
          Connect your crypto wallet to claim your airdrop tokens.
        </Text>
        <Button sm onClick={handleConncetWallet}>
          <img src={walletIcon} alt="#" className={classes.walletIcon} />{" "}
          Connect Wallet
        </Button>
      </div>
    </Wrapper>
  );
};
export default ConnectWallet;
