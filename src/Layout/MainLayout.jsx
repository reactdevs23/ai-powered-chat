import Footer from "Layout/Footer/Footer";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default MainLayout;
