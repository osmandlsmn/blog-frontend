import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

import Categories from "../../../data/categories";

const CategorySection = () => {
  const [category, setCategory] = React.useState<number>(0);
  return (
    <section className="section category-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Browse the category</h1>
          <div className="section-navigation">
            <div className="prev">
              <AiOutlineCaretLeft size={24} />
            </div>
            <div className="next">
              <AiOutlineCaretRight size={24} />
            </div>
          </div>
        </div>
        <div className="section-content">
          <Swiper
            className="swiper-container"
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 5,
              },
              425: {
                slidesPerView: 3,
              },
              375: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 2,
              },
            }}
          >
            {Categories.map(({ icon, title }, index) => (
              <SwiperSlide
                className={`category-card ${category === index ? "focus" : ""}`}
                onClick={() => setCategory(index)}
              >
                <div className="category-icon ">
                  <img src={icon} alt="" />
                </div>
                <h3 className="category-title">{title}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
