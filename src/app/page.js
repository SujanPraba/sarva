import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <>
      {/* <--------------------------NavBar Section ---------------------------> */}
      <Navbar />
      {/* <--------------------------Header Section ---------------------------> */}
      <div className="pt-[100px] lg:pt-[200px]">
        <HeaderSection />
      </div>
       {/* <--------------------------Our Services Section ---------------------------> */}
       <div className="pt-[50px] lg:pt-[100px]">
        <OurServices />
      </div>
    </>
  );
}
