import Image from "next/image";
import port from "../../public/portfolio.png";
const Portfolio = () => {
  return (
    <div>
      <p className="text-center lg:text-[40px] text-[24px] font-[700]">Portfolio </p>
      <p className="text-center text-[#667085] lg:text-[16px] text-[14px] font-[400] pt-2 w-[96%] mx-auto">
        We’ve done all the heavy lifting so you don’t have to — get all the data
        you need to launch and grow your business faster.
      </p>
      <div className="lg:pt-[60px] pt-[30px] lg:flex w-[90%] mx-auto justify-between items-center">
        <div className="lg:w-[55%] w-[100%] mx-auto">
            <div className="flex justify-between w-full">
                <div className="lg:w-[45%] w-[48%]">
                    <p className="lg:text-[60px] text-[30px] text-center font-[600] text-[#FF6B00]">4,000+</p>
                    <p className="lg:text-[17px] text-[15px] text-center font-[400] pt-1">Global customers</p>
                    <p className="text-[#667085] lg:text-[14px] text-[11px] font-[400] text-center pt-1">We’ve helped over 4,000 amazing global companies.</p>
                </div>
                <div className="lg:w-[45%] w-[48%]">
                    <p className="lg:text-[60px] text-[30px] text-center font-[600] text-[#FF6B00]">600%</p>
                    <p className="lg:text-[17px] text-[15px] text-center font-[400] pt-1">Return on investment</p>
                    <p className="text-[#667085] lg:text-[14px] text-[11px] font-[400] text-center pt-1">Our customers have reported an average of ~600% ROI.</p>
                </div>
            </div>
            <div className="flex justify-between lg:pt-[60px] pt-[30px]">
                <div className="lg:w-[45%] w-[48%]">
                    <p className="lg:text-[60px] text-[30px] text-center font-[600] text-[#FF6B00]">25+</p>
                    <p className="lg:text-[17px] text-[15px] text-center font-[400] pt-1">Team Members</p>
                    <p className="text-[#667085] lg:text-[14px] text-[11px] font-[400] text-center pt-1">Our best has given always.</p>
                </div>
                <div className="lg:w-[45%] w-[48%]">
                    <p className="lg:text-[60px] text-[30px] text-center font-[600] text-[#FF6B00]">200+</p>
                    <p className="lg:text-[17px] text-[15px] text-center font-[400] pt-1">5-star reviews</p>
                    <p className="text-[#667085] lg:text-[14px] text-[11px] font-[400] text-center pt-1">We’re proud of our 5-star rating with over 200 reviews.</p>
                </div>
            </div>
        </div>
        <div className="lg:w-[40%] w-full flex justify-center items-center pt-6 lg:pt-0">
            <Image src={port} alt="img" />

        </div>


      </div>
    </div>
  );
};

export default Portfolio;
