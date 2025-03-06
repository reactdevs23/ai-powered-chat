import { devider } from "images";
import classes from "./Devider.module.css";
import clsx from "clsx";

const Devider2 = ({ className }) => {
  return (
    <div className={clsx(classes.deviderContainer, className)}>
      <img src={devider} alt="#" className={classes.devider} />
    </div>
  );
};
export default Devider2;
