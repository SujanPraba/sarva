import Link from "next/link";

const HeaderSection = () => {
  return (
    <div className="header-section lg:flex lg:px-[100px] px-[50px] justify-between w-full]" style={{
      backgroundImage: `url('bgImg.png')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // filter: 'blur(1px)',
      // opacity: 0.3
    }}>
      <div className="w-[100%] flex justify-center items-center mx-auto header-content  lg:min-h-[600px]">
        <div>
          <p className="text-[14px] font-[400] text-[white] text-center">Welcome To<span className="text-[#00715C] px-3">Sarva Venture</span></p>
          <h1 className="font-[700] lg:text-[58px] text-[28px] text-center text-[white] md:w-[80%] mx-auto">
            Explosive growth and customers who can&apos;t get enough of your brand.
          </h1>
          <p className="h-[1px] text-center bg-[#00715C]"></p>
          <p className="text-[white] font-[400] lg:text-[14px] text-[12px] text-center py-3">
            At Sarva Marketing, we turn marketing misfires into magic. We&apos;re a
            renegade crew of storytellers, strategists, and data whizzes who
            don&apos;t just market, <br></br>
            <span className="text-[#00715C]">we ignite.</span>
          </p>
          <div className="flex pt-[15px] justify-center mx-auto w-full">
          <Link href="#contactus" className="lg:px-[75px] mt-4 lg:mt-[0px] px-[30px] mx-3 py-[17px] bg-[#00715C] text-[white] md:text-[15px] text-[12px] font-[400] text-center border-[1px] border-[#00715C] cursor-pointer rounded-lg hover:pr-[80px] transition-all duration-500">
              Hire Us
            </Link>
            <Link href="#" className="lg:px-[75px] mt-4 lg:mt-[0px] px-[30px] mx-3 py-[17px] bg-[white] text-[#00715C] md:text-[15px] text-[12px] font-[400] text-center cursor-pointer rounded-lg hover:pr-[80px] transition-all duration-500">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="lg:w-[45%] flex justify-center items-center pt-[20px] lg:pt-[0px]">
        <Image src={HeaderImage} alt="img" />
      </div> */}
    </div>
  );
};

export default HeaderSection;
