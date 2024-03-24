import Image from "next/image";
import port from "../../public/portfolio.png";
const Portfolio = () => {
  return (
    <div>
      <p className="text-center text-[40px] font-[700]">Portfolio </p>
      <p className="text-center text-[#667085] text-[16px] font-[400] pt-2">
        We’ve done all the heavy lifting so you don’t have to — get all the data
        you need to launch and grow your business faster.
      </p>
      <div className="lg:pt-[60px] pt-[30px] flex w-[90%] mx-auto justify-between items-center">
        <div className="w-[55%]">
            <div className="flex justify-between">
                <div className="w-[45%]">
                    <p className="text-[60px] text-center font-[600] text-[#FF6B00]">4,000+</p>
                    <p className="text-[17px] text-center font-[400] pt-1">Global customers</p>
                    <p className="text-[#667085] text-[14px] font-[400] text-center pt-1">We’ve helped over 4,000 amazing global companies.</p>
                </div>
                <div className="w-[45%]">
                    <p className="text-[60px] text-center font-[600] text-[#FF6B00]">600%</p>
                    <p className="text-[17px] text-center font-[400] pt-1">Return on investment</p>
                    <p className="text-[#667085] text-[14px] font-[400] text-center pt-1">Our customers have reported an average of ~600% ROI.</p>
                </div>
            </div>
            <div className="flex justify-between lg:pt-[60px] pt-[30px]">
                <div className="w-[45%]">
                    <p className="text-[60px] text-center font-[600] text-[#FF6B00]">25+</p>
                    <p className="text-[17px] text-center font-[400] pt-1">Team Members</p>
                    <p className="text-[#667085] text-[14px] font-[400] text-center pt-1">Our best has given always.</p>
                </div>
                <div className="w-[45%]">
                    <p className="text-[60px] text-center font-[600] text-[#FF6B00]">200+</p>
                    <p className="text-[17px] text-center font-[400] pt-1">5-star reviews</p>
                    <p className="text-[#667085] text-[14px] font-[400] text-center pt-1">We’re proud of our 5-star rating with over 200 reviews.</p>
                </div>
            </div>
        </div>
        <div className="w-[40%] flex justify-center items-center">
            <Image src={port} alt="img" />

        </div>


      </div>
    </div>
  );
};

export default Portfolio;
