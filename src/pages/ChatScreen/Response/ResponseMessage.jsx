import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Heading, Text } from "components/common";
import { TfiReload } from "react-icons/tfi";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiDislike } from "react-icons/bi";
import { LuCopy } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";

import classes from "./ResponseMessage.module.css";

import { botLogo } from "images";

const ResponseMessage = ({ msg }) => {
  const [copied, setCopied] = useState(false);

  // Handles copying text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(msg.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  // Custom renderer for code blocks
  const renderCodeBlock = ({ node, inline, className, children, ...props }) => {
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
  };

  return (
    <div className={classes.wrapper}>
      {/* Header Section */}
      <div className={classes.header}>
        <img src={botLogo} alt="Bot Logo" className={classes.botLogo} />
        <div>
          <Heading primitive50 base medium>
            Brand Name
          </Heading>
          <Text className={classes.info} primitive400>
            1.33 sec • Llama 3.3 70B
          </Text>
        </div>
      </div>

      {/* Markdown Content */}
      <div className={classes.markdownContainer}>
        <ReactMarkdown
          children={msg.text}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{ code: renderCodeBlock }}
        />
      </div>

      {/* Action Buttons */}
      <div className={classes.actionContainer}>
        {[
          { icon: <TfiReload />, onClick: () => {} },
          { icon: <AiOutlineExpandAlt />, onClick: () => {} },
          { icon: <RiDeleteBin6Line />, onClick: () => {} },
          { icon: <BiDislike />, onClick: () => {} },
          {
            icon: copied ? (
              <FaCheck className={classes.checkMark} />
            ) : (
              <LuCopy />
            ),
            onClick: handleCopy,
          },
        ].map((action, index) => (
          <button
            key={index}
            className={classes.actionButton}
            onClick={action.onClick}
          >
            {action.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResponseMessage;
