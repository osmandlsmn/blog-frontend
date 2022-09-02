import React from "react";
import Input from "../Input";

const Subscribe = () => {
  return (
    <section className="section subscribe-section">
      <div className="section-content">
        <div className="subscribe-image">
          <img src={require("../../assets/images/subscribe.png")} alt="" />
        </div>
        <h2 className="section-title">Subscribe For the lastest updates</h2>
        <p className="section-text">
          Subscribe to newsletter and never miss the new post every week.
        </p>
        <form className="subscribe-form">
          <Input placeholder="Enter your email here...." />
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
