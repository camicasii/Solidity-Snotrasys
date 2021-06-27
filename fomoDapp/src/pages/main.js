import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MainInfo from "../components/mainInfo/mainInfo";
import Plans from "../components/plans/plans";
import Stack from "../components/stake/stake";
import ControlledCarousel from "../components/Info/Info";
import "./main.css";
import Banner from "../components/Banner/Banner";
export default function MainPage() {
  return (
    <div
      className="main "
      style={{ backgroundImage: "URL(./images/background.png)" }}
    >
      
      <Header />
      <Banner /> 
      <ControlledCarousel/>
      <div className="customContainer">
        <MainInfo />
        <Plans />
        <Stack />
      </div>
      <Footer />
    </div>
  );
}
