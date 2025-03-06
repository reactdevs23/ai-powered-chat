import {
  Button,
  Dropdown,
  Heading,
  Input,
  Text,
  Wrapper,
} from "components/common";
import classes from "./CreateNewStake.module.css";
import Devider from "components/common/Devider/Devider";
import {
  altLogo,
  bnbLogo,
  btcLogo,
  etcLogo,
  icpLogo,
  linkLogo,
  ltcLogo,
  ordiLogo,
  pythLogo,
} from "images";
import { useState } from "react";
import CoinsDropdown from "./CoinsDropdown/CoinsDropdown";
import { handleKeyDown } from "hooks";
import clsx from "clsx";
import StakingSummaryModal from "../../../Modals/StakingSummaryModal/StakingSummaryModal";
const coins = [
  {
    logo: btcLogo,
    symbol: "BTC",
    name: "Bitcoin",
    amount: 1.8345,
  },
  {
    logo: ltcLogo,
    symbol: "LTC",
    name: "Litecoin",
    amount: 1.8345,
  },
  {
    logo: altLogo,
    symbol: "ALT",
    name: "AltLayer",
    amount: 1.8345,
  },
  {
    logo: bnbLogo,
    symbol: "BNB",
    name: "Binance Chain Native Token",
    amount: 1.8345,
  },
  {
    logo: etcLogo,
    symbol: "ETC",
    name: "Ethereum",
    amount: 1.8345,
  },
  {
    logo: ordiLogo,
    symbol: "ORDI",
    name: "Ordinals",
    amount: 1.8345,
  },
  {
    logo: pythLogo,
    symbol: "PYTH",
    name: "Pyth Network",
    amount: 1.8345,
  },
  {
    logo: linkLogo,
    symbol: "LINK",
    name: "ChainLink",
    amount: 1.8345,
  },

  {
    logo: icpLogo,
    symbol: "ICP",
    name: "Internet Computer",
    amount: 1.8345,
  },
];

const durations = ["7 Days", "15 Days", "30 Days"];
const CreateNewStake = () => {
  const [showAssetsDropdown, setShowAssetsDropdown] = useState(false);
  const [selectedAssets, setSelectedAssets] = useState({
    logo: btcLogo,
    symbol: "BTC",
    name: "Bitcoin",
    amount: 1.8345,
  });
  const [stakeAmount, setStakeAmount] = useState("");
  const [showDurationDropdown, setShowDurationDropdown] = useState(false);
  const [selectedDuration, setSlectedDuration] = useState("30 Days");

  const [showStakingSummaryModal, setShowStakingSummaryModal] = useState(false);
  return (
    <>
      <Wrapper className={classes.wrapper}>
        <div className={classes.header}>
          <Heading base primitive50 medium>
            Create new stake
          </Heading>
          <Devider />
        </div>
        <div className={classes.selectBox}>
          <Text className={classes.label} sm primitive100>
            Select Asset
          </Text>
          <CoinsDropdown
            items={coins}
            isActive={showAssetsDropdown}
            setIsActive={setShowAssetsDropdown}
            selectedValue={selectedAssets}
            setSelectedValue={setSelectedAssets}
            onSelect={(val) => setSelectedAssets(val)}
          />
          <Devider className={classes.devider} />
        </div>{" "}
        <div className={classes.selectBox}>
          <Text className={classes.label} sm primitive100>
            Staking Amount{" "}
          </Text>

          <div className={classes.inputContainer}>
            <Input
              onKeyDown={handleKeyDown}
              type="number"
              className={classes.input}
              placeholder="10-50,000"
              value={stakeAmount}
              setValue={setStakeAmount}
            />
            <Text className={classes.symbol} base>
              BTC
            </Text>
          </div>

          <Devider className={classes.devider} />
        </div>
        <div className={clsx(classes.selectBox, classes.durationContainer)}>
          <Text className={classes.label} base primitive100>
            Duration
          </Text>
          <Dropdown
            transparent
            items={durations}
            isActive={showDurationDropdown}
            setIsActive={setShowDurationDropdown}
            selectedValue={selectedDuration}
            setSelectedValue={setSlectedDuration}
            onSelect={(val) => setSelectedAssets(val)}
          />
          <Devider className={classes.devider} />
        </div>{" "}
        <div className={classes.infoWrapper}>
          <div className={classes.spaceBetween}>
            <Text sm primitive100 className={classes.key}>
              APR
            </Text>
            <Text base primitive50 className={classes.value} textRight regular>
              <span className="highlight">2.7%</span>
            </Text>
          </div>{" "}
          <div className={classes.spaceBetween}>
            <Text sm primitive100 className={classes.key}>
              Fee
            </Text>
            <Text base primitive50 className={classes.value} textRight>
              0.00 ETH / $0.00
            </Text>
          </div>
          <div className={classes.spaceBetween}>
            <Text sm primitive100 className={classes.key}>
              You will receive
            </Text>
            <Text base primitive50 className={classes.value} textRight>
              0.00 XYZ
            </Text>
          </div>
        </div>
        <Button
          sm
          className={classes.stakeButton}
          onClick={() => setShowStakingSummaryModal(true)}
        >
          Stake Now
        </Button>
      </Wrapper>
      <StakingSummaryModal
        isActive={showStakingSummaryModal}
        onClose={() => setShowStakingSummaryModal(false)}
      />
    </>
  );
};
export default CreateNewStake;
