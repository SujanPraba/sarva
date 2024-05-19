import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
const Footer = () => {
  return (
    <div className="px-4 bg-black py-12">
      <div className="w-[80%] mx-auto lg:flex hidden justify-between">
        <div className="flex justify-between">
          <div className="w-[30%]">
            <Image src={logo} alt="img" className="h-20 w-[130px]" />
            <p className="mt-6 font-[300] text-[12px] text-white">
              From strategic planning to creative execution, we have the
              expertise and resources to elevate your brand above the
              competition.
            </p>
          </div>
          <div className="w-[30%] flex justify-end">
            <div className="flex justify-between w-full">
              <ul className="text-white text-[14px] font-[300]">
                <li className="font-[500] text-[16px] py-2">Company</li>
                <Link href="#aboutus">
                  <li className="py-2">About us</li>
                </Link>
                <Link href="#projects">
                  <li className="py-2">Project</li>
                </Link>
                <Link href="#contactus">
                  <li className="py-2">Contact us</li>
                </Link>
              </ul>
              <ul className="text-white text-[14px] font-[300] lg:ml-18 xl:ml-20">
                <li className="font-[500] text-[16px] py-2">
                  Contact Information
                </li>
                <li className="py-2">sarvaventures.ind@gmail.com</li>
                <li className="py-2">9342063714</li>
                <li className="py-2">
                  No. 2c, Jamals Akila Apartments,<br></br>T.Nagar, Chennai
                  <br></br> Tamil Nadu - 600017
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex items-center  justify-between w-[85%] mx-auto">
          <div className="w-[40%]">
            <Image src={logo} alt="img" className="h-20 w-[130px]" />
            <p className="mt-6 font-[300] text-[12px] text-white">
              From strategic planning to creative execution, we have the
              expertise and resources to elevate your brand above the
              competition.
            </p>
          </div>
          <div>
          <ul className="text-white text-[14px] font-[300]">
                <li className="font-[500] text-[16px] py-2">Company</li>
                <Link href="#aboutus">
                  <li className="py-2">About us</li>
                </Link>
                <Link href="#projects">
                  <li className="py-2">Project</li>
                </Link>
                <Link href="#contactus">
                  <li className="py-2">Contact us</li>
                </Link>
              </ul>
          </div>
        </div>
        <div className="w-[93%] ml-auto mt-[25px]">
          <ul className="text-white text-[14px] font-[300] lg:ml-18 xl:ml-20">
            <li className="font-[500] text-[16px] py-2">Contact Information</li>
            <li className="py-2">sarvaventures.ind@gmail.com</li>
            <li className="py-2">9342063714</li>
            <li className="py-2">
              No. 2c, Jamals Akila Apartments,<br></br>T.Nagar, Chennai
              <br></br> Tamil Nadu - 600017
            </li>
          </ul>
        </div>
      </div>
      <p className="h-[1px] w-full bg-gray-500 my-6"></p>
      <p className="text-[13px] font-[400] py-4 cursor-pointer px-3 text-center text-[white]">
        Copyright ⓒ sarva, 2024. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
