import { Outlet } from "react-router-dom";
import Header from "../features/header/Header";
import SubFooter from "../features/components/SubFooter";

const AboutUsLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <SubFooter />
    </div>
  );
};

export default AboutUsLayout;
