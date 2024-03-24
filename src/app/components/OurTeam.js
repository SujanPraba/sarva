import Image from "next/image";
import img1 from "../../public/ourTeam/founder.png";
const OurTeam = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h3 className="text-[42px] font-[700] text-center">Meet our team</h3>
        <p className="pt-4 text-center text-[13px] font-[400] text-[#52525B]">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
        <div className="flex-grow w-full pt-[45px] flex">
            <div className="w-[25%]">
                <div className="flex justify-center">
                <Image src={img1} alt=""/>
                </div>
                <p className="text-center text-[16px] font-[400] py-2">Mohan</p>
                <p className="text-center text-[16px] font-[400] text-[#FF6B00]">Founder & CEO</p>
            </div>
            <div className="w-[25%]">
                <div className="flex justify-center">
                <Image src={img1} alt=""/>
                </div>
                <p className="text-center text-[16px] font-[400] py-2">Mohan</p>
                <p className="text-center text-[16px] font-[400] text-[#FF6B00]">Founder & CEO</p>
            </div>
            <div className="w-[25%]">
                <div className="flex justify-center">
                <Image src={img1} alt=""/>
                </div>
                <p className="text-center text-[16px] font-[400] py-2">Mohan</p>
                <p className="text-center text-[16px] font-[400] text-[#FF6B00]">Founder & CEO</p>
            </div>
            <div className="w-[25%]">
                <div className="flex justify-center">
                <Image src={img1} alt=""/>
                </div>
                <p className="text-center text-[16px] font-[400] py-2">Mohan</p>
                <p className="text-center text-[16px] font-[400] text-[#FF6B00]">Founder & CEO</p>
            </div>
        </div>
        <div className="flex-grow w-full pt-[45px] flex">
            <div className="w-[25%]">
                <div className="flex justify-center">
                <Image src={img1} alt=""/>
                </div>
                <p className="text-center text-[16px] font-[400] py-2">Mohan</p>
                <p className="text-center text-[16px] font-[400] text-[#FF6B00]">Founder & CEO</p>
            </div>
            <div className="w-[25%]">
                <div className="flex justify-center">
                <Image src={img1} alt=""/>
                </div>
                <p className="text-center text-[16px] font-[400] py-2">Mohan</p>
                <p className="text-center text-[16px] font-[400] text-[#FF6B00]">Founder & CEO</p>
            </div>
            <div className="w-[25%]">
                <div className="flex justify-center">
                <Image src={img1} alt=""/>
                </div>
                <p className="text-center text-[16px] font-[400] py-2">Mohan</p>
                <p className="text-center text-[16px] font-[400] text-[#FF6B00]">Founder & CEO</p>
            </div>
            <div className="w-[25%]">
                <div className="flex justify-center">
                <Image src={img1} alt=""/>
                </div>
                <p className="text-center text-[16px] font-[400] py-2">Mohan</p>
                <p className="text-center text-[16px] font-[400] text-[#FF6B00]">Founder & CEO</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
