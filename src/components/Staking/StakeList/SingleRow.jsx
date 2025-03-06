import { useState } from "react";
import { Text } from "components/common";
import classes from "./StakeList.module.css";
import clsx from "clsx";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "utils/utils";
import StakingDetailsModal from "../../../Modals/StakingDetailsModal/StakingDetailsModal";

const SingleRow = ({ logo, symbol, name, stakeId, staked, earned, status }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(stakeId); // Ensure stakeId is copied
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // Show checkmark for 1 second
  };

  const [showStakingDetailsModal, setShowStakingDetailsModal] = useState(false);

  return (
    <>
      <tr
        className={classes.row}
        onClick={() => setShowStakingDetailsModal(true)}
      >
        <td className={classes.item}>
          <div className={classes.coinContainer}>
            <img src={logo} alt={name} className={classes.logo} />
            <div>
              <Text sm primitive50>
                {symbol}
              </Text>
              <Text xs primitive300 className={classes.name}>
                {name}
              </Text>
            </div>
          </div>
        </td>
        <td className={classes.item}>
          <button className={classes.stakeIdContainer} onClick={handleCopy}>
            <Text sm primitive100 reglar>
              {stakeId}
            </Text>
            {copied ? (
              <FaCheck className={classes.checkIcon} />
            ) : (
              <LuCopy className={classes.copyIcon} />
            )}
          </button>
        </td>
        <td className={classes.item}>{staked}</td>
        <td className={classes.item}>{earned}</td>
        <td className={classes.item}>
          <div
            className={clsx(
              classes.statusContainer,
              status?.toLowerCase() === "active" && classes.active,
              status?.toLowerCase() === "finished" && classes.finished
            )}
          >
            <Text className={classes.status}>{status}</Text>
            <FaChevronRight className={classes.arrow} />
          </div>
        </td>
      </tr>
      <tr>
        <td>
          {" "}
          <StakingDetailsModal
            isActive={showStakingDetailsModal}
            onClose={() => setShowStakingDetailsModal(false)}
          />
        </td>
      </tr>
    </>
  );
};

export default SingleRow;
