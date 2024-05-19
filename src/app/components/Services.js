import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/services/1.png";
const Services = () => {
  return (
    <div className="bg-black py-20">
      <div className="w-[97%] lg:w-[95%] mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:w-[48%] w-[90%] mx-auto">
            <div className="flex items-center justify-start pt-4">
              <p className="h-[1px] w-[60px] bg-[#818080]"></p>
              <p className="text-[14px] font-[400] text-[white] px-3">
                What We Are{" "}
                <span className="text-[#00715C] pl-1">Offering</span>{" "}
              </p>
            </div>
            <p className="lg:text-[40px] text-[26px] font-[700] text-[#00715C] text-start py-3">
              Services{" "}
              <span className="text-[white]">
                {" "}
                We Can <br></br>
                Offer You !{" "}
              </span>
            </p>
            <p className="text-[16px] font-[300] text-[white] text-start">
              At Sarva Venture, we're more than just an advertising agency –
              we're your strategic partner in growth. Founded on the belief that
              every brand has a unique story waiting to be told, we're
              passionate about helping businesses like yours unlock their full
              potential and stand out in today's competitive landscape.
            </p>
            {/* <p className="lg:px-[35px] lg:mt-[0px] px-[55px] mx-3 py-[17px] bg-[#00715C] text-[white] text-[white] text-center border-[1px] border-[#00715C] cursor-pointer rounded-lg hover:pr-[80px] transition-all duration-500">
              Hire Us
            </p> */}
            <div className="flex lg:justify-start justify-center">
              <Link href="#contactus" className="px-[30px] bg-[#00715C] text-[white] text-[15px] py-[13px] rounded-md mt-6">
                Hire Us
              </Link>
            </div>
          </div>
          <div className="lg:w-[45%] lg:flex justify-between items-start lg:mt-0 mt-4">
            <div>
            <div className="">
              <div className="flex justify-between">
                <div className="min-h-[150px] bg-white px-4 rounded-md w-[290px] py-4 mr-3">
                  <div className="flex items-center justify-center pb-2">
                    <Image src={img1} alt="img" className="w-12 h-12" />
                  </div>
                  <p className="text-[15px] font-[500] text-center">
                    Advertising
                  </p>
                  <p className="text-[11px] font-[400] text-center">
                    we offer a comprehensive range of advertising services
                    designed to help your brand make a lasting impression and
                    drive meaningful results.
                  </p>
                </div>
                <div className="min-h-[150px] bg-white px-4 rounded-md w-[290px] py-4">
                  <div className="flex items-center justify-center pb-2">
                    <Image src={img1} alt="img" className="w-12 h-12" />
                  </div>
                  <p className="text-[15px] font-[500] text-center">
                    Branding Traditional & Digital
                  </p>
                  <p className="text-[11px] font-[400] text-center">
                    we offer a comprehensive suite of branding services that
                    seamlessly blend traditional and digital strategies to help
                    your brand stand out and leave a lasting impression.
                  </p>
                </div>
              </div>
            </div>
            <div className="min-h-[150px] bg-white px-4 rounded-md w-[100%] py-4 mt-3 flex items-center">
                  <div className="flex items-center justify-center pb-2 w-[30%]">
                    <Image src={img1} alt="img" className="w-12 h-12" />
                  </div>
                  <div>
                  <p className="text-[15px] font-[500] text-start">
                    Advertising
                  </p>
                  <p className="text-[11px] font-[400] text-start">
                    we offer a comprehensive range of advertising services
                    designed to help your brand make a lasting impression and
                    drive meaningful results.
                  </p>
                  </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
