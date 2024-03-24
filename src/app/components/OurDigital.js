import Image from "next/image";
import ourDigital from "../../public/ourDigital.png";

const OurDigital = () => {
  return (
    <div className="w-[90%] mx-auto flex justify-between">
      <div className="w-[40%] flex items-center justify-center mx-auto">
        <div>
          <p className="text-[34px] font-[700] w-[82%]">
            Why should you choose Our digital Acedemy
          </p>
          <p className="text-[#4F4F4F] text-[15px] font-[400] pt-2">"Choose us for results-driven marketing that combines creative innovation with meticulous analysis, ensuring your brand's digital triumph. We're dedicated to your success and tailor strategies to meet your unique goals."</p>
          <p className="p-3 rounded-lg bg-[#FF6B00] w-[25%] text-center mt-3 text-[white] cursor-pointer">Contact us</p>
        </div>
      </div>
      <div className="w-[40%]">
        <Image src={ourDigital} alt="img"/>
      </div>
    </div>
  );
};

export default OurDigital;
