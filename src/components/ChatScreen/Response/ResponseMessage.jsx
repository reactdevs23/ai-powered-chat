import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm"; // For GitHub-flavored markdown
import rehypeRaw from "rehype-raw"; // For raw HTML rendering
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
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

const ResponseMessage = ({ msg, loading }) => {
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
      {/* {loading ? (
        <div className={classes.loading}>
          <span>Replying...</span>
        </div>
      ) : ( */}
      <div className={classes.markdownContainer}>
        <ReactMarkdown
          children={msg.text}
          remarkPlugins={[gfm]} // Adds GitHub-flavored markdown
          rehypePlugins={[rehypeRaw]} // Parses raw HTML
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
      {/* )} */}

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
