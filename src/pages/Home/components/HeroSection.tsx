import React from "react";

import HeroImage from "../../../assets/images/hero-image.png";
import Input from "../../../components/Input";

import { BiChevronDown } from "react-icons/bi";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, i’m Dasteen Front end dev</h1>
          <p className="hero-description">
            On this blog I share tips and tricks, frameworks, projects,
            tutorials, etc Make sure you subscribe to get the latest updates
          </p>
          <form className="subscribe-form">
            <Input placeholder="Enter your email here...." />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="" />
        </div>
      </div>
      <div className="scroll-icon">
        <i>
          <BiChevronDown size={22} color="black" />
        </i>
      </div>
    </section>
  );
};

export default HeroSection;
