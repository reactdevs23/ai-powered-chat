import { Button, Text, Wrapper } from "components/common";
import classes from "./ConnectCryptoWallet.module.css";
import { airdropIcon, walletIcon } from "images";

const ConnectCryptoWallet = ({ handleConncetWallet }) => {
  return (
    <Wrapper className={classes.wrapper}>
      <div className={classes.infoContainer}>
        <img src={airdropIcon} alt="#" className={classes.icon} />
        <Text primitive200 sm textCenter>
          Connect your crypto wallet to claim your airdrop tokens.
        </Text>
        <Button sm onClick={handleConncetWallet}>
          <img src={walletIcon} alt="#" className={classes.walletIcon} />{" "}
          Connect Wallet
        </Button>
        <Text primitive200 sm textCenter>
          Airdrop ends in 10 days
        </Text>
      </div>
    </Wrapper>
  );
};
export default ConnectCryptoWallet;
