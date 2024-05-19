"use client";
import { useEffect } from "react";
import DigitalAgency from "./components/DigitalAgency";
import Footer from "./components/Footer";
import FormComponent from "./components/Form";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import OurClients from "./components/OurClients";
import OurDigital from "./components/OurDigital";
import OurDigitalService from "./components/OurDigitalService";
import OurProjects from "./components/OurProjects";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    document.body.classList.add("scroll-smooth");

    // Cleanup on component unmount
    return () => {
      document.documentElement.classList.remove("scroll-smooth");
      document.body.classList.remove("scroll-smooth");
    };
  });
  return (
    <div className="scroll-smooth">
      {/* <--------------------------NavBar Section ---------------------------> */}
      <Navbar />
      {/* <--------------------------Header Section ---------------------------> */}
      <div className="">
        <HeaderSection />
      </div>
      <div className="pt-[50px] lg:pt-[100px]" id="aboutus">
        <DigitalAgency />
      </div>
      <div className="pt-[20px] lg:pt-[50px]">
        <OurClients />
      </div>
      <div className="pt-[20px] lg:pt-[50px]" id="services">
        <Services />
      </div>
      {/* <--------------------------Our Services Section ---------------------------> */}
      {/* <div className="pt-[20px] lg:pt-[50px]">
        <OurServices />
      </div> */}
      {/* <--------------------------OurDigitalService Section ---------------------------> */}
      <div className="pt-[20px] lg:pt-[50px]">
        <OurDigitalService />
      </div>
      {/* <--------------------------Our-Digital Section ---------------------------> */}
      <div className="pt-[50px] lg:pt-[50px]">
        <OurDigital />
      </div>
      {/* <--------------------------Our-Digital Section ---------------------------> */}
      <div className="pt-[50px] lg:pt-[100px]">
        <Portfolio />
      </div>

      <div className="pt-[50px] lg:pt-[100px]">
        <OurProjects />
      </div>
      <div className="pt-[50px] lg:pt-[100px]">
        <FormComponent />
      </div>

      {/* <--------------------------Footer Section ---------------------------> */}
      <div className="pt-[50px] lg:pt-[100px]">
        <Footer />
      </div>
    </div>
  );
}
