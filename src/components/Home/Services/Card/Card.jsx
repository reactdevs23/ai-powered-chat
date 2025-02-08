import { Button, Text } from "components/common";
import classes from "./Card.module.css";

const Card = ({ title, onClick, buttonText }) => {
  return (
    <div className={classes.card}>
      <Text primitive300 xl>
        {title}
      </Text>
      <Button btnPrimary onClick={onClick} sm>
        {buttonText}
      </Button>
    </div>
  );
};
export default Card;
