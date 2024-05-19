"use client";
import Image from "next/image";
import { useState } from "react";
import ad1 from "../../public/ourprojects/ad/1.png";
import ad2 from "../../public/ourprojects/ad/2.png";
import ad3 from "../../public/ourprojects/ad/3.png";
import allimg1 from "../../public/ourprojects/all/1.png";
import allimg2 from "../../public/ourprojects/all/2.png";
import allimg3 from "../../public/ourprojects/all/3.png";
import brandingimg1 from "../../public/ourprojects/branding/1.png";
import brandingimg2 from "../../public/ourprojects/branding/2.png";
import brandingimg3 from "../../public/ourprojects/branding/3.png";
import brandingimg4 from "../../public/ourprojects/branding/4.png";
import event1 from "../../public/ourprojects/event/1.png";
import event2 from "../../public/ourprojects/event/2.png";
import event3 from "../../public/ourprojects/event/3.png";

const OurProjects = () => {
  const [activeButton, setActiveButton] = useState("All");

  const buttons = ["All", "Branding", "Event Management", "Advertisement"];

  const renderImages = () => {
    switch (activeButton) {
      case "All":
        return (
          <div className="flex justify-between lg:w-[90%] mx-auto w-[95%]">
            <Image src={allimg1} alt="All image 1" className="h-[180px] w-[120px] md:h-[250px] md:w-[200px] lg:h-fit lg:w-fit"/>
            <Image src={allimg2} alt="All image 2" className="h-[180px] w-[130px] md:h-[250px] md:w-[200px] lg:h-fit lg:w-fit"/>
            <Image src={allimg3} alt="All image 3" className="h-[180px] w-[130px] md:h-[250px] md:w-[200px] lg:h-fit lg:w-fit"/>
          </div>
        );
      case "Branding":
        return (
          <>
            <div className="flex justify-between lg:w-[90%] mx-auto w-[95%]">
              <Image src={brandingimg1} alt="Branding image 1" className="h-[180px] w-[130px] md:h-[250px] md:w-[200px] lg:h-[310px] lg:w-[260px] xl:h-fit xl:w-fit"/>
              <Image src={brandingimg2} alt="Branding image 2" className="h-[180px] w-[130px] md:h-[250px] md:w-[200px] lg:h-[310px] lg:w-[260px] xl:h-fit xl:w-fit"/>
              <Image src={brandingimg3} alt="Branding image 3" className="h-[180px] w-[130px] md:h-[250px] md:w-[200px] lg:h-[310px] lg:w-[260px] xl:h-fit xl:w-fit"/>
            </div>
            <div className="flex justify-center mt-4">
              <Image src={brandingimg4} alt="Branding image 4" />
            </div>
          </>
        );
      case "Event Management":
        return (
            <>
            <div className="flex justify-between lg:w-[90%] w-[95%] mx-auto">
            <Image src={event2} alt="All image 2" className="h-[180px] w-[150px] md:h-[250px] md:w-[260px] xl:h-fit xl:w-fit"/>
            <Image src={event1} alt="All image 1" className="h-[180px] w-[150px] md:h-[250px] md:w-[260px] xl:h-fit xl:w-fit"/>

            <Image src={event3} alt="All image 3" className="h-[180px] w-[150px] md:h-[250px] md:w-[230px] xl:h-fit xl:w-fit"/>
          </div>
            </>
        ); // Replace with actual images
      case "Advertisement":
        return (
            <>
            <div className="flex justify-between w-[90%] mx-auto">
            <Image src={ad1} alt="All image 2" className="h-[140px] w-[120px] md:h-[250px] md:w-[260px] xl:h-fit xl:w-fit"/>
            <Image src={ad2} alt="All image 1" className="h-[140px] w-[120px] md:h-[250px] md:w-[260px] xl:h-fit xl:w-fit"/>

            <Image src={ad3} alt="All image 3" className="h-[140px] w-[120px] md:h-[250px] md:w-[260px] xl:h-fit xl:w-fit"/>
          </div>
            </>
        );; // Replace with actual images
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="flex justify-center items-center" id="projects">
        <p className="h-[1px] w-[100px] bg-gray-400"></p>
        <p className="px-3 text-[15px] font-[400] text-gray-400">
          Our Portfolio
        </p>
        <p className="h-[1px] w-[100px] bg-gray-400"></p>
      </div>
      <div className="pt-6">
        <p className="lg:text-[40px] text-[24px] font-[700] text-green-700 text-center">
          Projects <span className="text-black"> We Have Completed</span>
        </p>
      </div>
      <div className="mt-6 flex justify-center w-full">
        <div className="flex justify-between md:w-[60%] w-[90%] lg:w-[40%]">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => setActiveButton(button)}
              className={`py-2 md:px-4 px-2  rounded-md  text-[14px] font-[400] ${
                activeButton === button
                  ? "bg-[#00715C] text-white"
                  : "bg-[#F2F2F2] text-black"
              }`}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10">{renderImages()}</div>
    </div>
  );
};

export default OurProjects;
