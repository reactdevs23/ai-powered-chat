import clsx from "clsx";
import classes from "./HeroSection.module.css";
import { Heading, InputWithButton, Text } from "components/common";
import { useState } from "react";
import Header from "components/common/Header/Header";

const HeroSection = () => {
  const handleGenerate = () => {};
  const [question, setQuestion] = useState("");
  const features = [
    {
      title: ["18+", "AI Characters"],
      info: "Interact with a diverse range of AI personalities, each with unique traits, tones, and expertise.",
    },
    {
      title: ["Intelligent", "Conversations"],
      info: "Human-like responses with natural language processing for smooth and meaningful interactions.",
    },
    {
      title: ["Customizable", "Personality "],
      info: "Human-like responses with natural language processing for smooth and meaningful interactions.teract with a diverse range of AI personalities, each with unique traits, tones, and expertise.",
    },
  ];
  return (
    <section className={clsx(classes.wrapper)}>
      <div className={clsx(classes.container, "container")}>
        <Heading xl6 textCenter gradient>
          Elevate Your Conversations with AI-Powered Chat
        </Heading>
        <Text xl primitive300 textCenter>
          Engage, automate, and enhance interactions with our AI chatbot —
          seamless, instant, and personalized.
        </Text>
        <InputWithButton
          className={classes.inputContainer}
          name="question"
          placeholder="Ask anything..."
          value={question}
          setValue={setQuestion}
          onGenerate={handleGenerate}
          buttonText="Generate"
        />
      </div>{" "}
      <div className={clsx(classes.features, "container")}>
        {features?.map((feature, i) => (
          <div className={classes.feature} key={i}>
            <div className={classes.heading}>
              <Heading
                xl4={(i + 1) % 2 === 0}
                xl2={(i + 1) % 2 !== 0}
                medium
                primitiveDefault={(i + 1) % 2 !== 0}
                gradient={(i + 1) % 2 === 0}
              >
                {feature?.title[0]}
              </Heading>
              <Heading
                xl4={(i + 1) % 2 !== 0}
                xl2={(i + 1) % 2 === 0}
                medium
                primitiveDefault={(i + 1) % 2 === 0}
                gradient={(i + 1) % 2 !== 0}
              >
                {feature?.title[1]}
              </Heading>
            </div>
            <Text base primitive400>
              {feature.info}
            </Text>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HeroSection;
