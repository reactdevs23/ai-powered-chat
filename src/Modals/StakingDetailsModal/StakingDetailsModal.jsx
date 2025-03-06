import Modal from "components/common/Modal/Modal";
import classes from "./StakingDetailsModal.module.css";
import { Button, Text } from "components/common";
import clsx from "clsx";
import { btcLogo } from "images";
const StakingDetailsModal = ({ isActive, onClose, status = "Active" }) => {
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      heading="Staking Details"
      className={classes.modal}
    >
      <div className={classes.infoWrapper}>
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Stake ID
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            30d2e6ac9add
          </Text>
        </div>
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
            Coin
          </Text>
          <div className={classes.coinContainer}>
            <Text base primitive50 className={classes.value} textRight>
              BTC
            </Text>
            <img src={btcLogo} alt="#" className={classes.logo} />
          </div>
        </div>
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Staked
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            0.001845 BTC
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Earned
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            123.456900 XYZ
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Staking Yield
          </Text>
          <Button sm className={clsx(classes.value, classes.yeild)}>
            APR 2.7%
          </Button>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Duration
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            30 days
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Status
          </Text>
          <Text
            base
            primitive50
            className={clsx(
              classes.value,
              status?.toLowerCase() === "active" && classes.active,
              status?.toLowerCase() === "finished" && classes.finished
            )}
            textRight
          >
            {status}
          </Text>
        </div>{" "}
      </div>
      <Button
        className={classes.claimRewards}
        primary
        onClick={() => {
          onClose();
        }}
      >
        Claim Reward
      </Button>
    </Modal>
  );
};
export default StakingDetailsModal;
