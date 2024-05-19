import Image from "next/image";
import img1 from "../../public/our-digital/1.png";
import img2 from "../../public/our-digital/2.png";
import img3 from "../../public/our-digital/3.png";
import img4 from "../../public/our-digital/4.png";
import img5 from "../../public/our-digital/5.png";
const OurDigitalService = () => {
  return (
    <div className="w-[85%] mx-auto">
      <p className="lg:text-[42px] text-[28px] font-[700] text-center text-[#00715C]">
        Digital <span className="text-[black]">Services</span>
      </p>
      <div className="lg:flex justify-between w-full hidden items-center py-8">
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img1} alt="img" />
          </div>
          <p className="text-[15px] lg:text-[18px] py-2 font-[500] text-center">
            Search Engine Optimization
          </p>
        </div>
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img2} alt="img" />
          </div>
          <p className="text-[15px] lg:text-[18px] py-2 font-[500] text-center">
            Pay Per Click  (PPC)
          </p>
        </div>
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img3} alt="img" />
          </div>
          <p className="text-[15px] lg:text-[18px] py-2 font-[500] text-center">
            Search Engine Optimization
          </p>
        </div>
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img4} alt="img" />
          </div>
          <p className="text-[15px] lg:text-[18px] py-2 font-[500] text-center">
            Search Engine Optimization
          </p>
        </div>
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img5} alt="img" />
          </div>
          <p className="text-[15px] lg:text-[18px] py-2 font-[500] text-center">
            Search Engine Optimization
          </p>
        </div>
      </div>
      <div className="block w-full lg:hidden py-8">
        <div className="flex justify-between">
          <div className="w-[45%]">
            <div className="flex justify-center">
              <Image src={img1} alt="img" />
            </div>
            <p className="text-[15px] lg:text-[18px] py-2 font-[500] text-center">
              Search Engine Optimization
            </p>
          </div>
          <div className="w-[45%]">
            <div className="flex justify-center">
              <Image src={img2} alt="img" />
            </div>
            <p className="text-[15px] lg:text-[18px] py-2 font-[500] text-center">
              Pay Per Click  (PPC)
            </p>
          </div>
        </div>
        <div className="flex justify-between py-4">
          <div className="w-[45%]">
            <div className="flex justify-center">
              <Image src={img3} alt="img" />
            </div>
            <p className="text-[15px] lg:text-[18px] py-2 font-[500] text-center">
              Search Engine Optimization
            </p>
          </div>
          <div className="w-[45%]">
            <div className="flex justify-center">
              <Image src={img4} alt="img" />
            </div>
            <p className="text-[15px] lg:text-[18px] py-2 font-[500] text-center">
              Search Engine Optimization
            </p>
          </div>
        </div>
        <div className="flex justify-center py-4">
        <div className="w-[45%]">
          <div className="flex justify-center">
            <Image src={img5} alt="img" />
          </div>
          <p className="text-[15px] lg:text-[18px] py-2 font-[500] text-center">
            Search Engine Optimization
          </p>
        </div>
        </div>

        {/*

        */}
      </div>
    </div>
  );
};

export default OurDigitalService;
