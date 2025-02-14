import clsx from "clsx";
import classes from "./HowItWorks.module.css";
import { Heading, Text } from "components/common";
import { aiCharacterImg, conversationsImg, assistanceImg } from "images";
const HowItWorks = () => {
  const data = [
    {
      img: aiCharacterImg,
      title: "Choose Your",
      highlightText: "AI Character",
      info: "Select from 18+ unique AI personalities tailored to your needs.",
    },
    {
      img: conversationsImg,
      title: "Start a",
      highlightText: "Conversation",
      info: "Engage instantly with intelligent, human-like responses.",
    },
    {
      img: assistanceImg,
      title: "Enjoy 24/7 AI",
      highlightText: "Assistance",
      info: "Get instant responses anytime, anywhere!",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        {" "}
        <div className={classes.header} data-aos="fade-up">
          <Heading primitive0 xl5>
            How It
            <span className="highlight"> Works</span>
          </Heading>
          <Text primitive300 lg>
            Getting started with our AI chat platform is simple and seamless!
          </Text>
        </div>
        <div className={classes.cards}>
          {data?.map((card, i) => (
            <div className={classes.card} key={i} data-aos="fade-up">
              <div className={classes.infoContainer}>
                <Heading xl2 medium primitive0 className={classes.heading}>
                  <span className="gradient"> {card.title} </span>{" "}
                  <span className="highlight">{card.highlightText}</span>
                </Heading>
                <Text base primitive400 className={classes.info}>
                  {card.info}
                </Text>
              </div>
              <img src={card.img} alt="#" className={classes.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
