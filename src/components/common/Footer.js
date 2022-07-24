import React from "react";
import "../../css/footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container-sm footer-container">
        <div className="title-content">
          <p className="footer-logo">FreebeeHub</p>
          <div className="rights">
            <p className="copyrights">Copyright © 2021 OnSync.</p>
            <p className="copyrights">All rights reserved</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="footer-cat">
            <p className="fcat-title">Categories</p>
            <div>
              <p className="fcat-item">
                <span class="fcat-item-span">Smartphone</span>
              </p>
              <p className="fcat-item">
                <span class="fcat-item-span">Laptop</span>
              </p>
              <p className="fcat-item">
                <span class="fcat-item-span">Electronics</span>
              </p>
              <p className="fcat-item">
                <span class="fcat-item-span">HomeAppliance</span>
              </p>
              <p className="fcat-item">
                <span class="fcat-item-span">Tablet</span>
              </p>
              <p className="fcat-item">
                <span class="fcat-item-span">Watches</span>
              </p>
            </div>
          </div>
          <div className="footer-cat">
            <p className="fcat-title">FreebeeHub</p>
            <div>
              <p className="fcat-item">
                <span class="fcat-item-span">About Us</span>
              </p>
              <p className="fcat-item">
                <span class="fcat-item-span">Terms of Service</span>
              </p>
              <p className="fcat-item">
                <span class="fcat-item-span">Terms of Use</span>
              </p>
              <p className="fcat-item">
                <span class="fcat-item-span">Team</span>
              </p>
              <p className="fcat-item">
                <span class="fcat-item-span">Contact Us</span>
              </p>
              {/* <p className="fcat-item">
              <span class="fcat-item-span">Watches</span>
            </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
