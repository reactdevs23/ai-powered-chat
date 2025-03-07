import { newChatActiveIcon, newChatIcon, planImg } from "images";
import { FaStar } from "react-icons/fa";
import classes from "./SingleCharacters.module.css";
import { Heading, Text } from "components/common";
const SingleCharacters = ({
  img,
  title,
  info,
  rating,
  numberOfComment,
  isPro,
}) => {
  return (
    <div className={classes.wrapper}>
      {isPro && (
        <div className={classes.pro}>
          <img src={planImg} alt="#" className={classes.proImg} />
        </div>
      )}
      <img src={img} alt="#" className={classes.img} />

      <div className={classes.infoContainer}>
        <Heading primitive50 base medium>
          {title}
        </Heading>
        <Text sm primitive400>
          {info}
        </Text>
        <div className={classes.ratingAndComment}>
          <Text className={classes.rating} sm primitive400>
            <FaStar className={classes.star} />
            {rating}
          </Text>
          <Text className={classes.numberOfComment} sm primitive400>
            <img src={newChatActiveIcon} alt="#" className={classes.chatIcon} />
            {numberOfComment}
          </Text>
        </div>
      </div>
    </div>
  );
};
export default SingleCharacters;
