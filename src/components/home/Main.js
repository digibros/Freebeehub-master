import { Autocomplete, Button, TextField } from "@mui/material";
import { borderColor } from "@mui/system";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import banner1 from "../../images/banners/banner1.jpg";
import { top100Films } from "../data/dummy";
function Main() {
  return (
    <div className="home-main">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        autoplay={true}
        autoplayTimeout={5000}
        responsive={{
          0: {
            items: 1.3,
          },
          600: {
            items: 1.3,
          },
          1000: {
            items: 1,
          },
        }}
        items={1}
        nav={false}
        dots={false}
      >
        <div className="item">
          <img src={banner1} className="carousel-image" />
        </div>
        <div className="item">
          <img src={banner1} className="carousel-image" />
        </div>
      </OwlCarousel>
      <div className="sell-form-lg">
        <p className="sell-form-title">Sell</p>
        {/* {/* <Autocomplete
          className="home-field"
          disablePortal
          id="category"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => ( 
            // <TextField
            //   className="home-field-input"
            //   {...params}
            //   label="Product Category"
            //   fullWidth
            // /> */}
        <input
          className="home-field-input"
          type="text"
          name="productDescription"
          placeholder="Product Category"
        />
        <input
          className="home-field-input"
          type="text"
          name="productDescription"
          placeholder="Product Name"
        />
        <input
          className="home-field-input"
          type="text"
          name="productDescription"
          placeholder="Product Description"
        />
        {/* )}
        /> */}
        {/* <Autocomplete
          className="home-field"
          disablePortal
          id="category"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => (

          )}
        /> */}
        {/* <div className="home-field"> */}
        {/* <TextField
            className="home-field-input"
            label="Product Name"
            sx={{ width: 286 }}
          /> */}

        {/* </div>
        <div className="home-field"> */}
        {/* <TextField
            className="home-field-input"
            label="Product Description"
            sx={{ width: 286, border: "0" }}
            size
          /> */}

        {/* </div> */}
        <Button
          variant="outlined"
          size="large"
          sx={{
            width: "80%",
            marginTop: "15px",
            color: "#019fbb",
            borderColor: "#019fbb",
          }}
        >
          SELL
        </Button>
      </div>
    </div>
  );
}

export default Main;
