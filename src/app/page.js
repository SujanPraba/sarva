import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import OurCulture from "./components/OurCulture";
import OurDigital from "./components/OurDigital";
import OurDigitalService from "./components/OurDigitalService";
import OurLatestWork from "./components/OurLatestWork";
import OurServices from "./components/OurServices";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      {/* <--------------------------NavBar Section ---------------------------> */}
      <Navbar />
      {/* <--------------------------Header Section ---------------------------> */}
      <div className="pt-[100px] lg:pt-[150px]">
        <HeaderSection />
      </div>
      {/* <--------------------------Our Services Section ---------------------------> */}
      <div className="pt-[50px] lg:pt-[100px]">
        <OurServices />
      </div>
      {/* <--------------------------Our-Digital Section ---------------------------> */}
      <div className="pt-[50px] lg:pt-[100px]">
        <OurDigital />
      </div>
      {/* <--------------------------Our-Digital Section ---------------------------> */}
      <div className="pt-[50px] lg:pt-[100px]">
        <Portfolio />
      </div>

      {/* <--------------------------OurCulture Section ---------------------------> */}
      <div className="pt-[50px] lg:pt-[100px]">
        <OurCulture />
      </div>
      {/* <--------------------------OurLatestWork Section ---------------------------> */}
      <div className="pt-[50px] lg:pt-[100px]">
        <OurLatestWork />
      </div>
      {/* <--------------------------OurDigitalService Section ---------------------------> */}
      <div className="pt-[50px] lg:pt-[100px]">
        <OurDigitalService />
      </div>
      {/* <--------------------------Gallery Section ---------------------------> */}
      <div className="pt-[20px] lg:pt-[40px]">
        <Gallery />
      </div>
      {/* <--------------------------Testimonials Section ---------------------------> */}
      <div className="pt-[30px] lg:pt-[70px]">
        <Testimonials />
      </div>
      {/* <--------------------------Footer Section ---------------------------> */}
      <div className="pt-[50px] lg:pt-[100px]">
        <Footer />
      </div>
    </>
  );
}
