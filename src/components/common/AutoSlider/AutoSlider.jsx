import React from "react";
import classes from "./AutoSlider.module.css";
import Marquee from "react-fast-marquee";
import Text from "../Text/Text";

const AutoSlider = ({ items }) => {
  return (
    <div className={classes.wrapper}>
      <Marquee direction="left" autoFill={true} speed={20} pauseOnHover={true}>
        <div className={classes.items}>
          {items.map((item, i) => (
            <div className={classes.item} key={i}>
              <Text primitive900 semiBold sm>
                {item}
              </Text>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee direction="right" autoFill={true} speed={20} pauseOnHover={true}>
        <div className={classes.items}>
          {items.map((item, i) => (
            <div className={classes.item} key={i}>
              <Text primitive900 semiBold sm>
                {item}
              </Text>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default AutoSlider;
