import { devider } from "images";
import classes from "./Devider.module.css";
const Devider = ({ className }) => {
  return <img src={devider} alt="#" className={(className, classes.devider)} />;
};
export default Devider;
