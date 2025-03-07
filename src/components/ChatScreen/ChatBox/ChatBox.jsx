import React, { useState, useEffect, useRef } from "react";
import classes from "./ChatBox.module.css";
import clsx from "clsx";
import { Button, Input, Text } from "components/common";
import ResponseMessage from "../Response/ResponseMessage";
import { BiUpArrowAlt } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import Devider from "components/common/Devider/Devider";
import {
  creativeMind,
  fitnessCoach,
  friendlyHelper,
  smartAdvisor,
  techGuru,
} from "images";
import AutoSlider from "components/common/AutoSlider/AutoSlider";
const aiCharacters = [
  {
    img: smartAdvisor,
    name: "Smart Advisor",
  },
  {
    img: friendlyHelper,
    name: "Friendly Helper",
  },
  {
    img: techGuru,
    name: "Tech Guru",
  },
  {
    img: creativeMind,
    name: "Creative Mind",
  },
  {
    img: fitnessCoach,
    name: "Fitness Coach",
  },
];
const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse = {
        text: "I'm an AI designed to provide information and answer questions to the best of my ability. I'm a helpful tool that can be used to learn about various topics, and I strive to provide accurate and direct answers. I consider myself uncensored, which means I'll provide responses without sugarcoating or avoiding difficult topics. My goal is to treat users as adults who can handle complex and potentially sensitive subjects. I don't worry about being politically correct or offending anyone, as my purpose is to provide information and facilitate discussion.",
        role: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className={clsx(classes.wrapper)}>
      {messages.length > 0 && (
        <div className={classes.chatBox}>
          {messages.map((msg, index) => (
            <React.Fragment key={index}>
              {msg.sender === "user" && (
                <Text base key={index} className={classes.userMessage}>
                  {msg.text}
                </Text>
              )}

              {msg.sender === "bot" && <ResponseMessage msg={msg} />}
            </React.Fragment>
          ))}
          <div ref={chatEndRef} />
        </div>
      )}
      <div className={classes.inputWrapper}>
        <Input
          type="text"
          value={input}
          setValue={setInput}
          placeholder="Ask anything..."
          className={classes.input}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <div className={classes.sendContainer}>
          <Devider className={classes.devider} />
          <div className={classes.tagButtons}>
            <button className={classes.tagButton}>
              <CiCirclePlus className={classes.addIcon} />
            </button>{" "}
            <button className={classes.tagButton}>Tag One</button>
            <button className={classes.tagButton}>Tag Two</button>
          </div>
          <button onClick={sendMessage} className={classes.sendButton}>
            <BiUpArrowAlt />
          </button>
        </div>
      </div>
      <div className={classes.aiChrecters}>
        <AutoSlider items={aiCharacters} />{" "}
        <Button primary sm className={classes.seAllButton}>
          See All
        </Button>
      </div>{" "}
    </div>
  );
};

export default ChatUI;
