import { Outlet } from "react-router-dom";
import Header from "../features/header/Header";
import Footer from "../features/components/Footer";
import SubFooter from "../features/components/SubFooter";
import Categories from "../features/components/Categories";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Outlet />
      <Footer />
      <SubFooter />
    </div>
  );
};

export default MainLayout;
