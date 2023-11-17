import { Carousel } from "antd";
import React from "react";
import slider1 from "../../assets/images/banner/bannerImgOne.png";
import slider2 from "../../assets/images/banner/bannerImgTwo.png";
import slider3 from "../../assets/images//banner/bannerImgThree.png";
import BannerBottom from "../../components/Banner/BannerBottom";
import Product from "../../Pages/ProductPage/product.js"
import Footer from "../../components/home/Footer/Footer.js"
import FooterBottom from "../../components/home/Footer/FooterBottom.js";

const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <Carousel autoplay>
        <div>
          <img
            style={{ width: "100%", height: "650px" }}
            src={slider2}
            alt="Carousel 1"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "650px" }}
            src={slider3}
            alt="Carousel 1"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "650px" }}
            src={slider1}
            alt="Carousel 1"
          />
        </div>
      </Carousel>
      
      {/* Below Carousel */}
      <BannerBottom/>
      
      {/* Product List */}
      <Product/>

      {/* Footer */}
      <Footer/>
      <FooterBottom/>
    </div>
  );
};

export default Home;
