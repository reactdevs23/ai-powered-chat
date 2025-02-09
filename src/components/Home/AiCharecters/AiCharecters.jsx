import { Heading, Text } from "components/common";
import classes from "./AiCharecters.module.css";
import clsx from "clsx";
import ExploreCharacters from "../ExploreCharacters/ExploreCharacters";

const AiCharecters = () => {
  const features = [
    {
      title: ["18+ Unique", "AI Personalities"],
      info: "Engage with AI characters tailored for different interactions.",
    },
    {
      title: ["Customizable", "Tones & Styles"],
      info: "Adjust responses to match your brand or personal preferences.",
    },
    {
      title: ["Realistic", "Responses"],
      info: "Experience natural, human-like conversations..",
    },
  ];
  return (
    <section className={clsx(classes.wrapper, "container")}>
      <div className={clsx(classes.container)}>
        <div className={classes.header}>
          <Heading primitive0 xl5>
            AI <span className="highlight">Characters</span>
          </Heading>
          <Text primitive300 lg>
            Discover a variety of AI characters, each with unique personalities
            and expertise, tailored to enhance your conversations—whether as a
            friendly assistant, professional advisor, or fun companion.
          </Text>
        </div>
        <div className={classes.features}>
          {features?.map((feature, i) => (
            <div className={classes.feature} key={i}>
              <Heading gradient lg medium>
                {feature.title[0]} <br /> {feature.title[1]}
              </Heading>
              <Text base primitive400>
                {feature.info}
              </Text>
            </div>
          ))}
        </div>
      </div>
      <ExploreCharacters />
    </section>
  );
};
export default AiCharecters;
