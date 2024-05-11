import Image from "next/image";
import brain from "../../public/services/brain.png";
import chart from "../../public/services/chart.png";
import color from "../../public/services/color.png";
const OurServices = () => {
  return (
    <div>
      <p className="text-[20px] font-[400] text-center pt-2 text-[#00715C]">
        We have
      </p>
      <p className="lg:text-[40px] text-[24px] font-[700] text-center">
        Talent & Team
      </p>
      <div className="w-[90%] mx-auto lg:pt-[60px] pt-[10px]">
        <div className="lg:flex justify-between">
          <div className="lg:border-r-[1px] border-b-[1px] lg:border-b-[0px] lg:w-[29%] p-2">
            <div className="flex ">
              <Image src={color} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-start">
              Creative Powerhouse
            </p>
            <p className="text-[14px] font-[400] text-start">
              Boost your online visibility with our expert SEO strategies,
              making your brand stand out in search engine results.
            </p>
          </div>
          <div className="lg:border-r-[1px]  border-b-[1px] lg:border-b-[0px] lg:w-[29%] p-2">
            <div className="flex ">
              <Image src={chart} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-start">
              Data Wizards
            </p>
            <p className="text-[14px] font-[400] text-start">
              Drive engagement and brand loyalty through our dynamic social
              media campaigns, designed to captivate your audience.
            </p>
          </div>
          <div className="lg:w-[29%] p-2">
            <div className="flex ">
              <Image src={brain} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-start">
              Strategic Masterminds
            </p>
            <p className="text-[14px] font-[400] text-start">
              Elevate your content game with our captivating and SEO-friendly
              content, designed to attract, educate, and convert your target
              audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
