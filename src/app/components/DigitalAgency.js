import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/overlayImg.png";

const DigitalAgency = () => {
  return (
    <div className="w-[97%] lg:w-[80%] mx-auto">
      <div className="lg:flex justify-between">
        <div className="lg:w-[48%] flex justify-center items-center">
          <Image src={img1} alt="img" className="h-[400px] w-[400px]" />
        </div>
        <div className="lg:w-[48%] w-[90%] mx-auto">
          <div className="flex items-center justify-end pt-4">
            <p className="h-[1px] w-[30px] bg-[#818080]"></p>
            <p className="text-[14px] font-[400] text-[#00715C] px-3">
              About <span className="text-[#818080]">Sarva</span>{" "}
            </p>
          </div>
          <p className="lg:text-[48px] text-[26px] font-[700] text-black lg:text-start text-center py-3">
            Introduction To Best{" "}
            <span className="text-[#00715C]"> Digital Agency </span>
          </p>
          <p className="text-[16px] font-[300] text-[#818080] lg:text-start text-center">
            Sarva Venture was born out of a shared vision to revolutionize the
            way brands connect with their audiences. With a diverse team of
            creative minds, strategic thinkers, and digital experts, we set out
            to redefine the traditional agency model, placing innovation,
            collaboration, and client satisfaction at the forefront of
            everything we do.
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
      </div>
    </div>
  );
};

export default DigitalAgency;
