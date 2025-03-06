import { useState } from "react";
import { Heading, Text } from "components/common";
import { TfiReload } from "react-icons/tfi";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDislike } from "react-icons/bi";
import { LuCopy } from "react-icons/lu";
import { FaCheck } from "react-icons/fa"; // Import the check icon

import classes from "./ResponseMessage.module.css";
import clsx from "clsx";
import { botLogo } from "images";

const ResponseMessage = ({ msg }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(msg.text);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <img src={botLogo} alt="#" className={classes.botLogo} />
        <div>
          <Heading primitive50 base medium>
            Brand Name
          </Heading>
          <Text className={classes.info} primitive400>
            1.33 sec • Llama 3.3 70B
          </Text>
        </div>
      </div>
      <Text base className={classes.botMessage}>
        {msg.text}
      </Text>

      <div className={classes.actionContainer}>
        <button className={classes.actionButton}>
          <TfiReload className={classes.actionIcon} />
        </button>

        <button className={classes.actionButton}>
          <AiOutlineExpandAlt className={classes.actionIcon} />
        </button>
        <button className={classes.actionButton}>
          <RiDeleteBin6Line className={classes.actionIcon} />
        </button>
        <button className={classes.actionButton}>
          <BiDislike className={classes.actionIcon} />
        </button>

        <button className={classes.actionButton} onClick={handleCopy}>
          {copied ? (
            <FaCheck className={clsx(classes.actionIcon, classes.checkMark)} />
          ) : (
            <LuCopy className={classes.actionIcon} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ResponseMessage;
