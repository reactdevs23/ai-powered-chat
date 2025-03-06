import React from "react";
import classes from "./AutoSlider.module.css";
import Marquee from "react-fast-marquee";
import Text from "../Text/Text";

const AutoSlider = ({ items }) => {
  return (
    <div className={classes.wrapper}>
      <Marquee direction="left" autoFill={true} speed={20} pauseOnHover={true}>
        <div className={classes.items}>
          {items.map(({ name, img }, i) => (
            <button className={classes.item} key={i}>
              <img src={img} alt="#" className={classes.img} />
              <Text sm className={classes.name}>
                {name}
              </Text>
            </button>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default AutoSlider;
