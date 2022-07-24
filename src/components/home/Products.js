import React from "react";
import dummy from "../../images/products/dummy.webp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

function Products() {
  return (
    <div className="products">
      <div className="container-sm">
        <p className="prod-title">Products</p>
        <div className="prod-list">
          <div className="prod-item">
            <div className="o-prod-cart">
              <ShoppingBagOutlinedIcon style={{ fontSize: "1.3rem" }} />
            </div>
            <div
              className="prod-img"
              style={{
                backgroundImage: `url(${dummy})`,
              }}
            ></div>
            {/* <div className="overlay"> */}
            <div className="o-prod-info">
              <div className="o-prod-det">
                <p className="o-prod-title">One Plus 10T</p>
                {/* <p className="o-prod-desc">
                  hey there thahas asjjk asuhas hhsna hey there how are you
                  check out some new device pover here jdhas jksskd lla
                </p> */}
                <p className="o-prod-loc">
                  {/* <LocationOnOutlinedIcon style={{ fontSize: "1rem" }} /> */}
                  Guntur
                </p>
                {/* </div> */}
              </div>
            </div>
            {/* <img className="prod-image" src={dummy} alt="dummy" /> */}
          </div>
          <div className="prod-item">
            <div className="o-prod-cart">
              <ShoppingBagOutlinedIcon style={{ fontSize: "1.3rem" }} />
            </div>
            <div
              className="prod-img"
              style={{
                backgroundImage: `url(${dummy})`,
              }}
            ></div>
            {/* <div className="overlay"> */}
            <div className="o-prod-info">
              <div className="o-prod-det">
                <p className="o-prod-title">One Plus 10T</p>
                {/* <p className="o-prod-desc">
                  hey there thahas asjjk asuhas hhsna hey there how are you
                  check out some new device pover here jdhas jksskd lla
                </p> */}
                <p className="o-prod-loc">
                  {/* <LocationOnOutlinedIcon style={{ fontSize: "1rem" }} /> */}
                  Guntur
                </p>
                {/* </div> */}
              </div>
            </div>
            {/* <img className="prod-image" src={dummy} alt="dummy" /> */}
          </div>
          <div className="prod-item">
            <div className="o-prod-cart">
              <ShoppingBagOutlinedIcon style={{ fontSize: "1.3rem" }} />
            </div>
            <div
              className="prod-img"
              style={{
                backgroundImage: `url(${dummy})`,
              }}
            ></div>
            {/* <div className="overlay"> */}
            <div className="o-prod-info">
              <div className="o-prod-det">
                <p className="o-prod-title">One Plus 10T</p>
                {/* <p className="o-prod-desc">
                  hey there thahas asjjk asuhas hhsna hey there how are you
                  check out some new device pover here jdhas jksskd lla
                </p> */}
                <p className="o-prod-loc">
                  {/* <LocationOnOutlinedIcon style={{ fontSize: "1rem" }} /> */}
                  Guntur
                </p>
                {/* </div> */}
              </div>
            </div>
            {/* <img className="prod-image" src={dummy} alt="dummy" /> */}
          </div>
          <div className="prod-item">
            <div className="o-prod-cart">
              <ShoppingBagOutlinedIcon style={{ fontSize: "1.3rem" }} />
            </div>
            <div
              className="prod-img"
              style={{
                backgroundImage: `url(${dummy})`,
              }}
            ></div>
            {/* <div className="overlay"> */}
            <div className="o-prod-info">
              <div className="o-prod-det">
                <p className="o-prod-title">One Plus 10T</p>
                {/* <p className="o-prod-desc">
                  hey there thahas asjjk asuhas hhsna hey there how are you
                  check out some new device pover here jdhas jksskd lla
                </p> */}
                <p className="o-prod-loc">
                  {/* <LocationOnOutlinedIcon style={{ fontSize: "1rem" }} /> */}
                  Guntur
                </p>
                {/* </div> */}
              </div>
            </div>
            {/* <img className="prod-image" src={dummy} alt="dummy" /> */}
          </div>
          <div className="prod-item">
            <div className="o-prod-cart">
              <ShoppingBagOutlinedIcon style={{ fontSize: "1.3rem" }} />
            </div>
            <div
              className="prod-img"
              style={{
                backgroundImage: `url(${dummy})`,
              }}
            ></div>
            {/* <div className="overlay"> */}
            <div className="o-prod-info">
              <div className="o-prod-det">
                <p className="o-prod-title">One Plus 10T</p>
                {/* <p className="o-prod-desc">
                  hey there thahas asjjk asuhas hhsna hey there how are you
                  check out some new device pover here jdhas jksskd lla
                </p> */}
                <p className="o-prod-loc">
                  {/* <LocationOnOutlinedIcon style={{ fontSize: "1rem" }} /> */}
                  Guntur
                </p>
                {/* </div> */}
              </div>
            </div>
            {/* <img className="prod-image" src={dummy} alt="dummy" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
