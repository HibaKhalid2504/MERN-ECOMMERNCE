import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/home/Footer/Footer";
import FooterBottom from "../../components/home/Footer/FooterBottom";

const Journal = () => {
  // const location = useLocation();
  // const [prevLocation, setPrevLocation] = useState("");
  // useEffect(() => {
  //   setPrevLocation(location.state.data);
  // }, [location]);
  return (
    <>   <div className="max-w-container mt-16 mx-auto px-4">
      {/* <Breadcrumbs title="Journals" prevLocation={prevLocation} /> */}
      <h1 className="text-slate-800 text-8xl font-semibold mb-4">Journal</h1>
      <div className="pb-10">
        <h2 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Le Stylist</span>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate!
        </h2>
        
        <button className="w-52 h-10 bg-slate-800 text-white hover:bg-black duration-300">
          <Link to="/product">
           Continue Shopping</Link>
          </button>
        
      </div>
      
    </div>
    <Footer/>
    <FooterBottom/>
    </>
  );
};

export default Journal;
