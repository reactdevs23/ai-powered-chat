import { Route, Routes } from "react-router-dom";

import Home from "pages/Home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LoginPage from "pages/Authentication/Login/Login";
import Signup from "pages/Authentication/Signup/Signup";
import ForgotPassword from "pages/Authentication/ForgotPassword/ForgotPassword";
import MainLayout from "Layout/MainLayout/MainLayout";
import ManageAccountLayout from "Layout/ManageAccountLayout/ManageAccountLayout";
import Profile from "pages/ManageAccount/Profile/Profile";
import Security from "pages/ManageAccount/Security/Security";
import Subscription from "pages/ManageAccount/Subscription/Subscription";
import ChatData from "./pages/ManageAccount/ChatData/ChatData";
import ClaimAirdrop from "pages/ClaimAirdrop/ClaimAirdrop";
import AirdropAndStakinLayout from "Layout/AirdropAndStakinLayout/AirdropAndStakinLayout";
import Staking from "pages/Staking/Staking";

import ChatScreen from "pages/ChatScreen/ChatScreen";
import ChatScreenLayout from "Layout/ChatScreenLayout/ChatScreenLayout";
import AiCharactersLayout from "Layout/AiCharactersLayout/AiCharactersLayout";
import AiCharactersPage from "pages/AiCharactersPage/AiCharactersPage";

function App() {
  useEffect(() => {
    Aos.init({
      // Global settings:
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      // Animation settings:
      offset: 300,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <Routes>
      {/* Start Authentication */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<Signup />} />{" "}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      {/* End Authentication */}
      {/* Start Landing */}
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}></Route>
      </Route>
      {/* End Landing */}
      {/*Start Airdrop and staking  */}
      <Route path="/" element={<AirdropAndStakinLayout />}>
        <Route path="claim-airdrop" element={<ClaimAirdrop />} />
        <Route path="stacking" element={<Staking />} />
      </Route>
      {/*End */}
      <Route path="manage-account/" element={<ManageAccountLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="security" element={<Security />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="chat-data" element={<ChatData />} />
      </Route>
      <Route path="/" element={<ChatScreenLayout />}>
        <Route path="chat-screen" element={<ChatScreen />} />
      </Route>{" "}
      <Route path="/" element={<AiCharactersLayout />}>
        <Route path="ai-characters" element={<AiCharactersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
