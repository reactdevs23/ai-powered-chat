import { Button, Heading, Text, Wrapper } from "components/common";
import classes from "./AvaiableToClaim.module.css";

const AvaiableToClaim = ({ handleClaim }) => {
  return (
    <Wrapper>
      <Text primitive100 sm textCenter className={classes.label}>
        Available to Claim
      </Text>
      <Heading xl3 primitive0 textCenter medium>
        0.01236 <span className={classes.symbol}>xyz</span>
      </Heading>
      <Text primitive200 sm textCenter>
        ≅ $123.45
      </Text>
      <div className={classes.buttonContainer}>
        <Button sm onClick={handleClaim}>
          Claim Now
        </Button>
        <Button sm primary>
          Refer Friend
        </Button>
      </div>
    </Wrapper>
  );
};
export default AvaiableToClaim;
