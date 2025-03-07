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

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await fetch(
        "https://zarp-574634440075.europe-west4.run.app/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "dolphin-2.9.2-qwen2-72b",
            messages: [
              { role: "system", content: "You are a helpful assistant" },
              { role: "user", content: input },
            ],
            stream: true,
          }),
        }
      );

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let accumulatedText = "";

      // Append an empty system message first and track its index
      let systemMessageIndex = -1;
      setMessages((prevMessages) => {
        systemMessageIndex = prevMessages.length;
        return [...prevMessages, { text: "", sender: "system", loading: true }];
      });

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const json = JSON.parse(line.replace("data: ", ""));
              const content = json.choices?.[0]?.delta?.content || "";

              if (content) {
                accumulatedText += content;

                // Update only the latest system message
                setMessages((prevMessages) => {
                  const updatedMessages = [...prevMessages];
                  if (systemMessageIndex !== -1) {
                    updatedMessages[systemMessageIndex] = {
                      text: accumulatedText,
                      sender: "system",
                      loading: true, // Keep loading while receiving the response
                    };
                  }
                  return updatedMessages;
                });
              }
            } catch (error) {
              console.error("Error parsing JSON:", error);
            }
          }
        }
      }

      // Remove loading once response is fully received
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        if (systemMessageIndex !== -1) {
          updatedMessages[systemMessageIndex].loading = false;
        }
        return updatedMessages;
      });
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
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

              {msg.sender === "system" && <ResponseMessage msg={msg} />}
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
        <AutoSlider items={aiCharacters} />
        <Button primary sm className={classes.seAllButton}>
          See All
        </Button>
      </div>
    </div>
  );
};

export default ChatUI;
