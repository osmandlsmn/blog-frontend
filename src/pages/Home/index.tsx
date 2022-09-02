import * as React from "react";
import "./index.scss";

import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import BlogSection from "./components/BlogSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <BlogSection />
    </>
  );
};

export default Home;
