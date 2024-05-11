import Image from "next/image";
import brain from "../../public/our-culture/1.png";
import chart from "../../public/our-culture/2.png";
import color from "../../public/our-culture/3.png";
const OurCulture = () => {
  return (
    <div>
      <p className="text-[20px] font-[400] text-center pt-2 text-[#00715C]">
        Our
      </p>
      <p className="lg:text-[40px] text-[24px] font-[700] text-center">
      Culture and Value
      </p>
      <div className="w-[90%] mx-auto lg:pt-[60px] pt-[10px]">
        <div className="lg:flex justify-between">
          <div className="lg:w-[29%] w-[50%] mx-auto p-2">
            <div className="flex justify-center">
              <Image src={brain} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-center">
              Creative Powerhouse
            </p>
            <p className="text-[14px] font-[400] text-center">
              Boost your online visibility with our expert SEO strategies,
              making your brand stand out in search engine results.
            </p>
          </div>
          <div className="lg:w-[29%] p-2 w-[50%] mx-auto">
            <div className="flex justify-center">
              <Image src={chart} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-center">
              Data Wizards
            </p>
            <p className="text-[14px] font-[400] text-center">
              Drive engagement and brand loyalty through our dynamic social
              media campaigns, designed to captivate your audience.
            </p>
          </div>
          <div className="lg:w-[29%] w-[50%] mx-auto p-2">
            <div className="flex justify-center">
              <Image src={color} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-center">
              Strategic Masterminds
            </p>
            <p className="text-[14px] font-[400] text-center">
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

export default OurCulture;
