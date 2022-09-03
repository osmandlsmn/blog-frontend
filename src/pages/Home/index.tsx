import * as React from "react";
import "./index.scss";

import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import BlogSection from "./components/BlogSection";

import { useQuery } from "@tanstack/react-query";
import { getBlog, getBlogs } from "../../api/blog";

const Home: React.FC = ({}) => {
  // const { isLoading, error, data } = useQuery(["blogs"], getBlogs);
  const { isLoading, error, data } = useQuery(["blogs"], () => getBlog("asd"));

  console.log(error);

  return (
    <>
      <HeroSection />
      <CategorySection />
      <BlogSection />
    </>
  );
};

export default Home;
