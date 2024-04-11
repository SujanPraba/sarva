import Image from "next/image";
import ourDigital from "../../public/ourDigital.png";

const OurDigital = () => {
  return (
    <div className="w-[90%] mx-auto lg:flex justify-between">
      <div className="lg:w-[40%] flex items-center justify-center mx-auto">
        <div>
          <p className="lg:text-[34px] text-[24px] font-[700] lg:text-start text-center">
            Why should you choose Our digital Acedemy
          </p>
          <p className="text-[#4F4F4F] lg:text-[15px] text-[13px] font-[400] pt-2">
            &quot;Choose us for results-driven marketing that combines creative
            innovation with meticulous analysis, ensuring your brand&apos;s
            digital triumph. We&apos;re dedicated to your success and tailor
            strategies to meet your unique goals.&quot;
          </p>
          <div className="flex lg:hidden justify-between items-center">
          <p className="p-3 rounded-lg bg-[#FF6B00] lg:w-[25%] w-[40%] text-center mt-3 text-[white] cursor-pointer">
              Contact us
            </p>
            <Image src={ourDigital} alt="img" className="h-[300px] w-[200px]"/>
          </div>
          <div className="lg:flex hidden justify-center">
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
