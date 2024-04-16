import Image from "next/image";
import ourDigital from "../../public/ourDigital.png";
import tick from "../../public/services/tick.png";

const OurDigital = () => {
  return (
    <div className="w-[90%] mx-auto lg:flex justify-between">
      <div className="lg:w-[40%] flex items-center justify-center mx-auto">
        <div className="w-full">
          <p className="lg:text-[34px] text-[24px] font-[700] lg:text-start text-center">
          Unique Approach
          </p>
          <div className="flex items-start pt-4">
            <Image src={tick} alt="img" className="h-fit w-fit"/>
            <div className="px-3">
              <p className="font-[700] lg:text-[24px] text-[20px]">Customer Focus</p>
              <p className="font-[400] lg:text-[16px] text-[14px] text-[#4F4F4F] py-1">The ability to understand client.</p>
            </div>
          </div>
          <div className="flex items-start pt-4">
            <Image src={tick} alt="img" className="h-fit w-fit"/>
            <div className="px-3">
              <p className="font-[700] lg:text-[24px] text-[20px]">Data-Driven Decisions</p>
              <p className="font-[400] lg:text-[16px] text-[14px] text-[#4F4F4F] py-1">Balancing creative ideas with data analysis</p>
            </div>
          </div>
          <div className="flex items-start pt-4">
            <Image src={tick} alt="img" className="h-fit w-fit"/>
            <div className="px-3">
              <p className="font-[700] lg:text-[24px] text-[20px]">Multi-Channel Expertise</p>
              <p className="font-[400] lg:text-[16px] text-[14px] text-[#4F4F4F] py-1">Offering a range of marketing services across various channels, from social media and content marketing to traditional advertising and public relations.</p>
            </div>
          </div>
          <div className="flex items-start pt-4">
            <Image src={tick} alt="img" className="h-fit w-fit"/>
            <div className="px-3">
              <p className="font-[700] lg:text-[24px] text-[20px]">Innovative Thinking</p>
              <p className="font-[400] lg:text-[16px] text-[14px] text-[#4F4F4F] py-1">The ability to stay ahead of the curve.</p>
            </div>
          </div>

          <div className="flex lg:hidden justify-between items-center">
          <p className="p-3 rounded-lg bg-[#FF6B00] lg:w-[25%] w-[40%] text-center mt-3 text-[white] cursor-pointer">
              Contact us
            </p>
            <Image src={ourDigital} alt="img" className="h-[300px] w-[200px]"/>
          </div>
          <div className="lg:flex hidden justify-start pt-6">
            <p className="p-3 rounded-lg bg-[#FF6B00] lg:w-[25%] w-[40%] text-center mt-3 text-[white] cursor-pointer">
              Contact us
            </p>
          </div>
        </div>
      </div>
      <div className="w-[40%] hidden lg:flex">
        <Image src={ourDigital} alt="img" />
      </div>
    </div>
  );
};

export default OurDigital;
