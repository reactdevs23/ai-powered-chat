import clsx from "clsx";
import { Heading, Text } from "..";
import classes from "./Header.module.css";

const Header = ({ heading, italicHeading, info, center, className, br }) => {
  return (
    <div className={clsx(classes.header, center && classes.center, className)}>
      <Heading xl4 gradient textCenter={center} className="heading">
        {heading} {br && <br />}{" "}
        <span className="font-instrument">{italicHeading}</span>
      </Heading>
      <Text base primitive700 textCenter={center}>
        {info}
      </Text>
    </div>
  );
};
export default Header;
