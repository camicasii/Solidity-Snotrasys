import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MainInfo from "../components/mainInfo/mainInfo";
import Plans from "../components/plans/plans";
import Stack from "../components/stake/stake";
import "./main.css";
export default function MainPage() {
  return (
    <div
      className="main "
      style={{ backgroundImage: "URL(./images/background.png)" }}
    >
      <Header />
      <div className="customContainer">
        <MainInfo />
        <Plans />
        <Stack />
      </div>
      <Footer />
    </div>
  );
}
