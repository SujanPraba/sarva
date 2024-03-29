import Image from "next/image";
import HeaderImage from "../../public/HeaderImg.png";
const HeaderSection = () => {
  return (
    <div className="lg:flex lg:px-[100px] px-[50px] justify-between w-full">
      <div className="lg:w-[45%] w-[90%] flex justify-center items-center mx-auto">
        <div>
          <h1 className="font-[700] lg:text-[60px] text-[30px] text-center lg:text-start">
            Unlocking Digital Creativity in the Dark
          </h1>
          <p className="text-[#4F4F4F] font-[400] text-[14px] text-center lg:text-start">
            "Unlocking your brand's potential with data-driven strategies and
            compelling creativity for digital success."
          </p>
          <div className="flex pt-[45px] w-[75%] mx-auto lg:w-full">
            <p className="lg:px-[35px] px-[25px] py-[17px] bg-[#FF6B00] text-[white] text-[15px] font-[400] text-center border-[1px] border-transparent cursor-pointer rounded-lg hover:bg-[white] hover:text-[#FF6B00] hover:border-[1px] hover:border-[#FF6B00]">
              Our Services
            </p>
            <p className="lg:px-[35px] px-[25px] mx-3 py-[17px] bg-[white] text-[#FF6B00] text-[15px] font-[400] text-center border-[1px] border-[#FF6B00] cursor-pointer rounded-lg hover:pr-[42px] transition-all duration-500">
              Get Started
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[45%] flex justify-center items-center pt-[20px] lg:pt-[0px]">
        <Image src={HeaderImage} alt="img" />
      </div>
    </div>
  );
};

export default HeaderSection;
