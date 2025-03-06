import AboutUs from "components/ClaimAirdrop/AboutUs/AboutUs";
import ClaimInfo from "components/ClaimAirdrop/ClaimInfo/ClaimInfo";
import ConnectCryptoWallet from "components/ClaimAirdrop/ConnectCryptoWallet/ConnectCryptoWallet";
import Overview from "components/ClaimAirdrop/Overview/Overview";
import classes from "./ClaimAirdrop.module.css";

import AvaiableToClaim from "components/ClaimAirdrop/AvaiableToClaim/AvaiableToClaim";
import MyWallet from "components/ClaimAirdrop/MyWallet/MyWallet";

import { useAppContext } from "ContextProvider/ContextProvider";
const ClaimAirdrop = () => {
  const { setShowConnectWalletModal, connectedWallet } = useAppContext();

  const handleConncetWallet = () => {
    setShowConnectWalletModal(true);
  };
  const handleClaim = () => {};
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {!connectedWallet && (
            <ConnectCryptoWallet handleConncetWallet={handleConncetWallet} />
          )}
          {connectedWallet && (
            <>
              <AvaiableToClaim handleClaim={handleClaim} />
              <MyWallet />
            </>
          )}
          <AboutUs />
          <ClaimInfo />
        </div>
        <Overview />
      </div>
    </>
  );
};
export default ClaimAirdrop;
