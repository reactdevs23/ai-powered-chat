import Modal from "components/common/Modal/Modal";
import classes from "./StakingSummaryModal.module.css";
import { Button, Text } from "components/common";
import clsx from "clsx";
import { btcLogo } from "images";
const StakingSummaryModal = ({ isActive, onClose }) => {
  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      heading="Staking Summary"
      className={classes.modal}
    >
      <div className={classes.stakingInfo}>
        <Text sm primitiveDefault>
          This is the summary about your staking info. Please check again before
          confirming.
        </Text>
      </div>{" "}
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
            Blockchain
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            Ethereum (ERC-20)
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Stake Amount
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            0.001845 BTC
          </Text>
        </div>{" "}
        <div className={classes.spaceBetween}>
          <Text sm primitive100 className={classes.key}>
            Staking Yield
          </Text>
          <Button sm className={clsx(classes.value, classes.yeild)}>
            APR 97.67%
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
            You will receive
          </Text>
          <Text base primitive50 className={classes.value} textRight>
            123.456900 XYZ
          </Text>
        </div>{" "}
      </div>
      <Button
        className={classes.stakeButton}
        primary
        onClick={() => {
          onClose();
        }}
      >
        Yes, Stake
      </Button>
    </Modal>
  );
};
export default StakingSummaryModal;
