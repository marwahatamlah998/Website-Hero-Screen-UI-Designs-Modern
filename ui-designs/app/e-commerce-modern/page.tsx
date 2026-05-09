import React from "react";
import "./e-commerce.css";

const EcommercePage = () => {
  const arr = [
    { image: "/images/img_1.jpg", des: "the necessary backup personality" },
    { image: "/images/img_4.jpg", des: "the small wirness of late-night decisions" },
    { image: "/images/img_3.jpg", des: "little carft made by hands with trust issues" },
  ];
  return (
    <>
      <div className="landing_page">
        <div className="one">cosy&cosy.</div>
        <div className="two">
          Comfort should be accessible.
          <br /> we make it accessible to you.
        </div>
        <button className="three">to catalog</button>
        <img className="four" src="/images/sofa_5.jpg" />
        <img className="five" src="/images/sofa_3.jpg" />
      </div>
      <div className="show_">
      <div className=" texts">
         <div className="header">new arrival<br/> is here now</div>
          <div className="sub_header">Fresh designer furniture just dropped-bold shapes, clean <br/>lines, and that wow factor your space has been waiting for.<br/> Come take a look and find your new favorite piece.
</div>
      </div>
             
        <div className="cards_products">
          {arr?.map((e, i) => {
            return (
              <>
                <div key={i} className="cards_">
                    <img src={e.image} />
                    <p className="des">{e.des}</p>
                    <button className="cta">Show more</button>
                     </div>
              </>
            );
          })}
      </div>
      </div>
    </>
    
  );
};

export default EcommercePage;
