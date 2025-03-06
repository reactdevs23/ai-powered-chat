import ProgressBar from "components/common/ProgressBar/ProgressBar";
import classes from "./ChatData.module.css";
import { Button, Text } from "components/common";
import { formatStorage } from "utils/utils";
// Function to format storage values dynamically

const ChatData = () => {
  const totalBytes = 1024 * 1024 * 1024; // 1GB in Bytes
  const usedBytes = 144 * 1024 * 1024; // 144KB in Bytes (adjust as needed)

  const progress = Math.round((usedBytes / totalBytes) * 100); // Calculate percentage

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Text sm primitive0 className={classes.label}>
          <span>Storage use {progress}%</span>
          <span>
            {formatStorage(usedBytes)} of {formatStorage(totalBytes)}
          </span>
        </Text>
        <ProgressBar progress={progress} />
      </div>
      <div className={classes.chartHistory}>
        <Text sm primitive0>
          Delete Chat History
        </Text>
        <Text primitive200 className={classes.info}>
          You have the option to delete your chat history permanently. This
          action cannot be undone.
        </Text>
        <div className={classes.list}>
          <p>Erase all messages from your conversation.</p>
          <p>Erase all messages from your conversation.</p>
        </div>

        <Button sm primitiveWarning className={classes.deleteButton}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ChatData;
