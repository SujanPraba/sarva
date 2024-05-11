import Image from "next/image";
import HeaderImage from "../../public/HeaderImg.png";
const HeaderSection = () => {
  return (
    <div className="lg:flex lg:px-[100px] px-[50px] justify-between w-full">
      <div className="lg:w-[45%] w-[100%] flex justify-center items-center mx-auto">
        <div>
          <h1 className="font-[700] lg:text-[60px] text-[28px] text-center lg:text-start">
            Explosive growth and customers who can&apos;t get enough of your brand.
          </h1>
          <p className="text-[#4F4F4F] font-[400] lg:text-[14px] text-[12px] text-center lg:text-start">
            At Sarva Marketing, we turn marketing misfires into magic. We&apos;re a
            renegade crew of storytellers, strategists, and data whizzes who
            don&apos;t just market, <br></br>
            <span className="text-[#00715C]">we ignite.</span>
          </p>
          <div className="flex pt-[45px] justify-center lg:justify-start mx-auto w-full">
          <p className="lg:px-[35px] mt-4 lg:mt-[0px] px-[55px] mx-3 py-[17px] bg-[#00715C] text-[white] text-[13px] font-[400] text-center border-[1px] border-[#00715C] cursor-pointer rounded-lg hover:pr-[42px] transition-all duration-500">
              Our Services
            </p>
            <p className="lg:px-[35px] mt-4 lg:mt-[0px] px-[55px] mx-3 py-[17px] bg-[white] text-[#00715C] text-[13px] font-[400] text-center border-[1px] border-[#00715C] cursor-pointer rounded-lg hover:pr-[42px] transition-all duration-500">
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
