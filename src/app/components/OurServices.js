import Image from "next/image";
import searchEngine from "../../public/services/search.png";
const OurServices = () => {
  return (
    <div>
      <p className="lg:text-[40px] text-[24px] font-[700] text-center">Our Services</p>
      <p className="text-[15px] font-[400] text-center pt-2 text-[#52525B]">
        Compelling creativity for digital success
      </p>
      <div className="w-[90%] mx-auto lg:pt-[60px] pt-[10px]">
        <div className="lg:flex justify-between">
          <div className="lg:border-r-[1px] border-b-[1px] lg:w-[29%] p-2">
            <div className="flex ">
              <Image src={searchEngine} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-start">
              Search Engine Optimization{" "}
            </p>
            <p className="text-[14px] font-[400] text-start">
              Boost your online visibility with our expert SEO strategies,
              making your brand stand out in search engine results.
            </p>
          </div>
          <div className="lg:border-r-[1px] border-b-[1px] lg:w-[29%] p-2">
            <div className="flex ">
              <Image src={searchEngine} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-start">
              Search Engine Optimization{" "}
            </p>
            <p className="text-[14px] font-[400] text-start">
              Boost your online visibility with our expert SEO strategies,
              making your brand stand out in search engine results.
            </p>
          </div>
          <div className="lg:border-r-[1px] border-b-[1px] lg:w-[29%] p-2">
            <div className="flex ">
              <Image src={searchEngine} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-start">
              Search Engine Optimization{" "}
            </p>
            <p className="text-[14px] font-[400] text-start">
              Boost your online visibility with our expert SEO strategies,
              making your brand stand out in search engine results.
            </p>
          </div>
        </div>
        <div className="lg:flex justify-between mt-[50px]">
          <div className="lg:border-r-[1px] border-b-[1px] lg:w-[29%] p-2">
            <div className="flex ">
              <Image src={searchEngine} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-start">
              Search Engine Optimization{" "}
            </p>
            <p className="text-[14px] font-[400] text-start">
              Boost your online visibility with our expert SEO strategies,
              making your brand stand out in search engine results.
            </p>
          </div>
          <div className="lg:border-r-[1px] border-b-[1px] lg:w-[29%] p-2">
            <div className="flex ">
              <Image src={searchEngine} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-start">
              Search Engine Optimization{" "}
            </p>
            <p className="text-[14px] font-[400] text-start">
              Boost your online visibility with our expert SEO strategies,
              making your brand stand out in search engine results.
            </p>
          </div>
          <div className="lg:border-r-[1px] border-b-[1px] lg:w-[29%] p-2">
            <div className="flex ">
              <Image src={searchEngine} alt="" />
            </div>
            <p className="text-[21px] py-4 font-[700] text-start">
              Search Engine Optimization{" "}
            </p>
            <p className="text-[14px] font-[400] text-start">
              Boost your online visibility with our expert SEO strategies,
              making your brand stand out in search engine results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
