import React from "react";
import phone from "../../images/icons/smartphone.png";
import laptop from "../../images/icons/laptop.png";
import electronics from "../../images/icons/electronics.png";
import electricAppliance from "../../images/icons/electric-appliance.png";
import earbuds from "../../images/icons/earbuds.png";
import smartwatch from "../../images/icons/smartwatch.png";
import tablet from "../../images/icons/tablet.png";
import tv from "../../images/icons/tv.png";
import others from "../../images/icons/others.png";

function Categories() {
  return (
    <div className="container-sm categories">
      <p className="subtitle">Categories</p>
      <div className="category-list">
        <div className="category-item d-flex align-items-center flex-column justify-content-center ">
          <img src={phone} alt="phone" className="category-img" />
          <p className="category-name">Smartphone</p>
        </div>
        <div className="category-item d-flex align-items-center flex-column justify-content-center ">
          <img src={laptop} alt="laptop" className="category-img" />
          <p className="category-name">Laptop</p>
        </div>
        <div className="category-item d-flex align-items-center flex-column justify-content-center ">
          <img src={electronics} alt="electronics" className="category-img" />
          <p className="category-name">Electronics</p>
        </div>
        <div className="category-item d-flex align-items-center flex-column justify-content-center ">
          <img
            src={electricAppliance}
            alt="electricappliances"
            className="category-img"
          />
          <p className="category-name">HomeAppliance</p>
        </div>
        <div className="category-item d-flex align-items-center flex-column justify-content-center ">
          <img src={tablet} alt="tablet" className="category-img" />
          <p className="category-name">Tablet</p>
        </div>
        <div className="category-item d-flex align-items-center flex-column justify-content-center ">
          <img src={smartwatch} alt="smartwatch" className="category-img" />
          <p className="category-name">Watches</p>
        </div>
        <div className="category-item d-flex align-items-center flex-column justify-content-center ">
          <img src={earbuds} alt="earbuds" className="category-img" />
          <p className="category-name">Earphones</p>
        </div>
        <div className="category-item d-flex align-items-center flex-column justify-content-center ">
          <img src={tv} alt="tv" className="category-img" />
          <p className="category-name">Tv</p>
        </div>
        <div className="category-item d-flex align-items-center flex-column justify-content-center ">
          <img src={others} alt="others" className="category-img" />
          <p className="category-name">Others</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
