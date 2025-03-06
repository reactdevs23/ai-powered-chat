import classes from "./Services.module.css";
import clsx from "clsx";
import TextRevealByWord from "components/common/TextAnimation/TextAnimation";
import Card from "./Card/Card";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const handleJoinNow = () => {
    navigate("/login");
  };
  const handleClaimNow = () => {
    navigate("/claim-airdrop");
  };
  return (
    <section
      className={clsx(classes.wrapper, "container", "sectionPadding")}
      data-aos="fade-up"
    >
      <TextRevealByWord
        text="At [Brand Name], we are revolutionizing digital interactions with AI-driven chat solutions. Our mission is to empower businesses and individuals with intelligent, engaging, and seamless conversations."
        learnMoreLink="#"
      />

      <div className={classes.cards}>
        <Card
          title="Join us in shaping the future of AI communication!"
          onClick={handleJoinNow}
          buttonText="Join Now"
        />{" "}
        <Card
          title="Claim your airdrop tokens today and step into the future of crypto rewards!"
          onClick={handleClaimNow}
          buttonText="Claim Now"
        />
      </div>
    </section>
  );
};
export default Services;
