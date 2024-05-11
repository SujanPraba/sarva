import Image from "next/image";
import port from "../../public/portfolio.png";
const Portfolio = () => {
  return (
    <div>
      <div className="lg:w-[85%] w-[95%] mx-auto">
        <p className="font-[700] lg:text-[40px] text-[24px]">
          Results and Measurement
        </p>
        <p className="text-[18px] font-[400] text-[#667085]">
          We’ve done all the heavy lifting so you don’t have to — get all the
          data you need to launch and grow your business faster.
        </p>
      </div>
      <div className="lg:pt-[60px] pt-[30px] lg:flex w-[90%] mx-auto justify-between items-center">
        <div className="lg:w-[50%] w-[100%] mx-auto">
          <div className="lg:py-6 py-2">
            <p className="font-[600] text-[#00715C] lg:text-[30px] text-[18px]">
              Track Record of Success
            </p>
            <p className="text-[14px] font-[400] text-[#667085]">
              A history of achieving positive results for clients.
            </p>
          </div>
          <div className="lg:py-6 py-2">
            <p className="font-[600] text-[#00715C] lg:text-[30px] text-[18px]">
            Strong Measurement Capabilities
            </p>
            <p className="text-[14px] font-[400] text-[#667085]">
            The ability to track key performance indicators (KPIs) and demonstrate the impact of marketing efforts.
            </p>
          </div>
          <div className="lg:py-6 py-2">
            <p className="font-[600] text-[#00715C] lg:text-[30px] text-[18px]">
            Return on Investment (ROI) Focus
            </p>
            <p className="text-[14px] font-[400] text-[#667085]">
            Prioritizing strategies that deliver measurable value for the client&apos;s marketing budget.
            </p>
          </div>
        </div>
        <div className="lg:w-[40%] w-full flex justify-center items-center pt-6 lg:pt-0">
          <Image src={port} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
