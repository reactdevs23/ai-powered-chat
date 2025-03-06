import { devider } from "images";
import classes from "./Devider.module.css";
import clsx from "clsx";
const Devider = ({ className }) => {
  return (
    <img src={devider} alt="#" className={clsx(className, classes.devider)} />
  );
};
export default Devider;
