import Image from "next/image";
import img1 from "../../public/clients/img1.png";
import img2 from "../../public/clients/img2.png";
import img3 from "../../public/clients/img3.png";
import img4 from "../../public/clients/img4.png";
import img5 from "../../public/clients/img5.png";
import img6 from "../../public/clients/img6.png";
const OurClients = () => {
  return (
    <div className="w-[85%] mx-auto">
      <p className="lg:text-[42px] text-[28px] font-[700] text-center text-[#00715C]">
        Our <span className="text-[black]">Clients</span>
      </p>
      <div className="lg:flex justify-between w-full hidden items-center py-8">
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img1} alt="img" />
          </div>

        </div>
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img2} alt="img" />
          </div>

        </div>
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img3} alt="img" />
          </div>

        </div>
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img4} alt="img" />
          </div>

        </div>
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img5} alt="img" />
          </div>

        </div>
        <div className="w-[17%]">
          <div className="flex justify-center">
            <Image src={img6} alt="img" />
          </div>
        </div>
      </div>
      <div className="block w-full lg:hidden py-8">
        <div className="flex justify-between">
          <div className="w-[45%]">
            <div className="flex justify-center">
              <Image src={img1} alt="img" className="h-20 w-20"/>
            </div>

          </div>
          <div className="w-[45%]">
            <div className="flex justify-center">
              <Image src={img2} alt="img" className="h-20 w-20"/>
            </div>

          </div>
        </div>
        <div className="flex justify-between py-4">
          <div className="w-[45%]">
            <div className="flex justify-center">
              <Image src={img3} alt="img" className="h-20 w-20"/>
            </div>

          </div>
          <div className="w-[45%]">
            <div className="flex justify-center">
              <Image src={img4} alt="img" className="h-20 w-20"/>
            </div>

          </div>
        </div>
        <div className="flex justify-between py-4">
          <div className="w-[45%]">
            <div className="flex justify-center">
              <Image src={img5} alt="img" className="h-20 w-20"/>
            </div>

          </div>
          <div className="w-[45%]">
            <div className="flex justify-center">
              <Image src={img6} alt="img" className="h-20 w-20"/>
            </div>

          </div>
        </div>


        {/*

        */}
      </div>
    </div>
  );
};

export default OurClients;
