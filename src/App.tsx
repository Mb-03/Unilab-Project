import { Route, Routes } from "react-router-dom";
import Landing from "./features/landing/Landing";
import AboutUs from "./features/aboutUs/AboutUs";
import MainLayout from "./layout/MainLayout";
import AboutUsLayout from "./layout/AboutUsLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Landing />} />
          <Route path="/contactus" element={<Landing />} />
          <Route path="/help&support" element={<Landing />} />
        </Route>

        <Route element={<AboutUsLayout />}>
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
