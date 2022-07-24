import React from "react";
import dummy from "../../images/products/dummy.webp";
import OwlCarousel from "react-owl-carousel";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
function Suggestions() {
  return (
    <div className="container-sm suggestions">
      <div className="d-flex justify-content-between align-itmes-center">
        <p className="subtitle">Suggestion For You</p>
        <p className="more">more...</p>
      </div>
      <div className="suggestion-list">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          autoplay={true}
          autoplayTimeout={5000}
          autoplaySpeed={1000}
          responsive={{
            0: {
              items: 1.1,
            },
            600: {
              items: 1.3,
            },
            1000: {
              items: 3.2,
            },
          }}
        >
          <div className="item suggestion-item">
            <img className="s-prod-img" src={dummy} alt="dummy" />
            <div className="prod-det">
              <p className="prod-name">One plus 10T</p>
              <p className="prod-desc">
                One plus 10T is a wonderfull lorem ipusum dorem and usefull and
                very helpfull
              </p>
              <p className="prod-place">
                {" "}
                <LocationOnOutlinedIcon
                  style={{ fontSize: "1.1rem", marginBottom: "3px" }}
                />{" "}
                Guntur
              </p>
              <div className="prod-action">
                <div className="buy">Buy</div>
                <div className="cart">
                  <ShoppingBagOutlinedIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="item suggestion-item">
            <img className="s-prod-img" src={dummy} alt="dummy" />
            <div className="prod-det">
              <p className="prod-name">One plus 10T</p>
              <p className="prod-desc">
                One plus 10T is a wonderfull lorem ipusum dorem and usefull and
                very helpfull
              </p>
              <p className="prod-place">
                {" "}
                <LocationOnOutlinedIcon
                  style={{ fontSize: "1.1rem", marginBottom: "3px" }}
                />{" "}
                Guntur
              </p>
              <div className="prod-action">
                <div className="buy">Buy</div>
                <div className="cart">
                  <ShoppingBagOutlinedIcon />
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Suggestions;
