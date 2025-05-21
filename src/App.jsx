import { Routes, Route } from "react-router-dom";

//layouts
import MainLayout from "./layouts/MainLayout";

//pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/courses" element={<Pricing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
