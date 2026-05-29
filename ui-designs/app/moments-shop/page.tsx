import React from "react";
import Navigation from "../components/Navigation";
import "./shop.css";

const MomentShop = () => {
  const arr = [
    {
      image: "/images/handsbehindback.jpg",
      des: "the necessary backup personality",
    },
    {
      image: "/images/handwashing.jpg",
      des: "the necessary backup personality",
    },
    {
      image: "/images/img-muslim.jpg",
      des: "the necessary backup personality",
    },
    { image: "/images/care.jpg", des: "the necessary backup personality" },
  ];

  return (
    <>
      <Navigation />
      <div className="landing-flex">
        <img src=".\images\black_women.jpg" alt="image" />
        <div className="brand">BRAND BOOKS</div>
        <p className="our-brand">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A non autem
          tempora esse perferendis eaque ducimus.
        </p>
      </div>
      <div></div>

      <div className="audience-container">
        <p className="audience-flex">
          At Brand Books, we believe in creativity, authenticity, and timeless
          design. Our values are built on innovation, attention to detail, and
          creating meaningful experiences that connect brands with people. We
          focus on delivering modern, elegant, and impactful visual identities
          that inspire confidence and leave a lasting impression.
        </p>
        <div className="flex-text-image">
          <h1 className="h1-audience">audience</h1>
          <img src=".\images\audience.jpg" alt="image" />
        </div>
      </div>
      <div></div>

      <div className="the-values-flex">
        <nav className="navbar navbar-dark bg-transparent ">
          <a className="navbar-brand text-black" href="#">
            the <span className="values">values </span>
          </a>

          <div className="d-flex gap-3">
            <a className="text-black text-decoration-none" href="#">
              (555) 412-1234
            </a>
          </div>
        </nav>
        <div className="cards_values">
          {arr?.map((e, i) => {
            return (
              <>
                <div key={i} className="cards_">
                  <img src={e.image} />
                  <p className="des">{e.des}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MomentShop;
