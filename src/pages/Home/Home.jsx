import AnimatedTextSection from "components/common/TextAnimation/TextAnimation";
import HeroSection from "components/Home/HeroSection/HeroSection";
import classes from "./Home.module.css";
import Services from "components/Home/Services/Services";
import AiCharecters from "components/Home/AiCharecters/AiCharecters";
import HowItWorks from "components/Home/HowItWorks/HowItWorks";
import GetStartToday from "components/Home/GetStartToday/GetStartToday";
const Home = () => {
  return (
    <main className={classes.homePage}>
      <HeroSection />
      <Services />
      <AiCharecters />
      <HowItWorks />
      <GetStartToday />
    </main>
  );
};
export default Home;
